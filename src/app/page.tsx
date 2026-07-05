'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { mockStudy } from '@/domain/mockData';
import { calculateStudyCurrentEtcs, calculateGPA, areRequirementsMet, getMissingRequirements } from '@/domain/logic/studyLogic';
import { Card } from '@/presentation/components/Card';
import { LoginButton, LogoutButton } from '@/presentation/components/AuthButtons';
import { StudySelector } from '@/presentation/components/StudySelector';
import { saveStudyConfig, getStudyConfig, listStudyConfigs, deleteStudyConfig } from '@/app/actions';
import { studyTemplates } from '@/domain/templates';
import { InputModal } from '@/presentation/components/InputModal';
import { GradeSelector } from '@/presentation/components/GradeSelector';

const TEXT = {
  title: 'Studien-Konfigurator',
  subtitle: 'Planen Sie Ihren akademischen Weg',
  ectsTarget: 'Ziel-ECTS',
  ectsCurrent: 'Aktuelle ECTS',
  semester: 'Regelstudienzeit',
  degree: 'Abschluss',
  university: 'Universität',
  modules: 'Verfügbare Module',
  select: 'Auswählen',
  deselect: 'Abwählen',
  complete: 'Abschließen',
  completed: 'Abgeschlossen',
  congratulations: 'Sie haben das ECTS-Ziel erreicht!',
  missingRequirements: 'Voraussetzungen:',
  save: 'Speichern',
  saved: 'Gespeichert!',
  newStudyTitle: 'Wählen Sie Ihren Studiengang',
  gpa: 'Notenschnitt (GPA)',
};

export default function Home() {
  const { data: session, status } = useSession();
  const [study, setStudy] = useState(mockStudy);
  const [configs, setConfigs] = useState<any[]>([]);
  const [currentConfigId, setCurrentConfigId] = useState<string | undefined>();
  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [modalConfig, setModalConfig] = useState<{ title: string, defaultValue: string, onConfirm: (v: string) => void } | null>(null);
  const [gradeModal, setGradeModal] = useState<{ chapterId: string, domainId: string, moduleId: string } | null>(null);

  // Load configs on login
  useEffect(() => {
    if (status === 'authenticated') {
      refreshConfigs();
    }
  }, [status]);

  const refreshConfigs = async (knownId?: string) => {
    const list = await listStudyConfigs();
    setConfigs(list);
    
    const activeId = knownId || currentConfigId;
    
    // Only auto-select if truly nothing is selected and we are not in creation mode
    if (list.length > 0 && !activeId && !isCreating) {
      handleSelect(list[0].id);
    }
  };

  const handleSelect = async (id: string) => {
    setIsCreating(false);
    const config = await getStudyConfig(id);
    if (config) {
      try {
        const data = JSON.parse(config.configJson);
        data.currentEtcs = calculateStudyCurrentEtcs(data);
        setStudy(data);
        setCurrentConfigId(id);
      } catch (e) {
        console.error('Failed to parse config', e);
      }
    }
  };

  const handleCreate = () => {
    setIsCreating(true);
    setCurrentConfigId(undefined);
  };

  const handleSelectTemplate = (template: any) => {
    setModalConfig({
      title: 'Geben Sie Ihrem Studienplan einen Namen:',
      defaultValue: template.name,
      onConfirm: async (name) => {
        setModalConfig(null);
        setIsCreating(false);
        setIsSaving(true);
        try {
          const newStudy = { ...template, name };
          const result = await saveStudyConfig(JSON.stringify(newStudy), name);
          if (result) {
            setCurrentConfigId(result.id);
            setStudy(newStudy);
            refreshConfigs(result.id);
          }
        } catch (e) {
          console.error('Failed to create study from template', e);
        } finally {
          setIsSaving(false);
        }
      }
    });
  };

  const handleDelete = async (id: string) => {
    await deleteStudyConfig(id);
    if (currentConfigId === id) {
      setCurrentConfigId(undefined);
      setStudy(mockStudy);
    }
    refreshConfigs();
  };

  const handleSave = async () => {
    if (status !== 'authenticated' && !window.location.search.includes('dev=true')) return;
    setIsSaving(true);
    try {
      const name = study.name || "Mein Studium";
      const result = await saveStudyConfig(JSON.stringify(study), name, currentConfigId);
      if (result) {
        setCurrentConfigId(result.id);
        setHasSaved(true);
        setTimeout(() => setHasSaved(false), 2000);
        refreshConfigs(result.id);
      }
    } catch (e) {
      console.error('Save failed', e);
    } finally {
      setIsSaving(false);
    }
  };
  
  const toggleModule = (chapterId: string, domainId: string, moduleId: string) => {
    setStudy(prev => {
      // Deep clone to ensure React detects changes correctly
      const next = JSON.parse(JSON.stringify(prev));
      if (!next.catalog) return prev;
      
      const chapter = next.catalog.chapters.find((c: any) => c.id === chapterId);
      const domain = chapter?.domains.find((d: any) => d.id === domainId);
      const mod = domain?.modules.find((m: any) => m.id === moduleId);
      
      if (mod) {
        mod.isSelected = !mod.isSelected;
        if (!mod.isSelected) {
          mod.isCompleted = false;
          mod.grade = undefined;
        }
      }
      
      next.currentEtcs = calculateStudyCurrentEtcs(next);
      return next;
    });
  };

  const setModuleGrade = (chapterId: string, domainId: string, moduleId: string, grade: number) => {
    setStudy(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      if (!next.catalog) return prev;
      
      const chapter = next.catalog.chapters.find((c: any) => c.id === chapterId);
      const domain = chapter?.domains.find((d: any) => d.id === domainId);
      const mod = domain?.modules.find((m: any) => m.id === moduleId);
      
      if (mod) {
        mod.isCompleted = true;
        mod.grade = grade;
      }
      
      return next;
    });
    setGradeModal(null);
  };

  const progress = Math.min((study.currentEtcs / study.minimalEtcs) * 100, 100);
  const gpa = calculateGPA(study);

  if (status === 'loading') {
    return <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Laden...</div>;
  }

  if (status === 'unauthenticated') {
    return (
      <main className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, var(--accent-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {TEXT.title}
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
          Der moderne Weg, Ihr Studium zu planen. Erstellen Sie Ihr Profil, verwalten Sie Ihre ECTS und behalten Sie den Überblick über alle Voraussetzungen.
        </p>
        <div style={{ padding: '2rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '24px', backdropFilter: 'blur(10px)' }}>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Melden Sie sich an, um zu beginnen:</p>
          <LoginButton />
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      {modalConfig && (
        <InputModal 
          title={modalConfig.title}
          defaultValue={modalConfig.defaultValue}
          onConfirm={modalConfig.onConfirm}
          onCancel={() => setModalConfig(null)}
        />
      )}
      {gradeModal && (
        <GradeSelector 
          onSelect={(grade) => setModuleGrade(gradeModal.chapterId, gradeModal.domainId, gradeModal.moduleId, grade)}
          onCancel={() => setGradeModal(null)}
        />
      )}
      <header style={{ 
        marginBottom: '3rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        padding: '2rem 0'
      }}>
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.25rem' }}>{TEXT.title}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{TEXT.subtitle}</p>
        </div>
        
        <div>
          <LogoutButton />
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Sidebar */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <StudySelector 
            configs={configs}
            currentId={currentConfigId}
            onSelect={handleSelect}
            onCreate={handleCreate}
            onDelete={handleDelete}
          />

          {!isCreating && (
            <>
              <Card title={study.name}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <p><strong style={{ color: 'var(--text-secondary)' }}>{TEXT.degree}:</strong> {study.academicalGrad}</p>
                  <p><strong style={{ color: 'var(--text-secondary)' }}>{TEXT.university}:</strong> {study.university.name}</p>
                  <p><strong style={{ color: 'var(--text-secondary)' }}>{TEXT.semester}:</strong> {study.standardAmountOfSemester} Semester</p>
                  {gpa !== null && (
                    <p>
                      <strong style={{ color: 'var(--accent-color)' }}>{TEXT.gpa}:</strong> 
                      <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>{gpa.toFixed(2)}</span>
                    </p>
                  )}
                </div>
              </Card>

              <Card title="Fortschritt">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>{TEXT.ectsCurrent}</span>
                    <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{study.currentEtcs} / {study.minimalEtcs}</span>
                  </div>
                  <div style={{ height: '8px', background: 'var(--secondary-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        width: `${progress}%`, 
                        height: '100%', 
                        background: 'var(--accent-color)',
                        transition: 'width 0.5s ease'
                      }} 
                    />
                  </div>
                </div>
                {study.currentEtcs >= study.minimalEtcs && (
                  <p style={{ color: 'var(--success)', fontWeight: 'bold', fontSize: '0.9rem' }}>{TEXT.congratulations}</p>
                )}
                
                <button 
                  onClick={handleSave}
                  disabled={isSaving}
                  className="button-primary"
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  {isSaving ? '...' : (hasSaved ? TEXT.saved : TEXT.save)}
                </button>
              </Card>
            </>
          )}
        </aside>

        {/* Main Content Area */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {isCreating ? (
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{TEXT.newStudyTitle}</h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {studyTemplates.map(tpl => (
                  <Card key={tpl.id} title={tpl.name} onClick={() => handleSelectTemplate(tpl.template)} style={{ cursor: 'pointer', transition: 'transform 0.2s' }} className="hover-scale">
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{tpl.description}</p>
                    <button 
                      className="button-primary" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectTemplate(tpl.template);
                      }}
                    >
                      {TEXT.select}
                    </button>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <>
              <h2 style={{ fontSize: '1.5rem' }}>{TEXT.modules}</h2>
              
              {study.catalog?.chapters.map(chapter => (
                <div key={chapter.id}>
                  <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', color: 'var(--accent-color)' }}>
                    {chapter.name}
                  </h3>
                  {chapter.domains.map(domain => (
                    <div key={domain.id} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                      <h4 style={{ fontSize: '1rem', opacity: 0.7, marginLeft: '0.5rem' }}>{domain.name}</h4>
                      {domain.modules.map(mod => {
                        const selectedIds = study.catalog?.chapters.flatMap(c => c.domains.flatMap(d => d.modules.filter(m => m.isSelected).map(m => m.id))) || [];
                        const met = areRequirementsMet(mod, selectedIds);
                        const missing = getMissingRequirements(mod, selectedIds);

                        return (
                          <Card 
                            key={mod.id} 
                            className={mod.isSelected ? 'selected' : ''}
                            style={{ 
                              opacity: !met && !mod.isSelected ? 0.6 : 1,
                              borderLeft: !met && !mod.isSelected ? '4px solid var(--warning)' : (mod.isCompleted ? '4px solid var(--success)' : (mod.isSelected ? '4px solid var(--accent-color)' : '1px solid var(--glass-border)'))
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                              <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'var(--secondary-bg)', borderRadius: '6px', fontWeight: 'bold' }}>
                                    {mod.code}
                                  </span>
                                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: 'rgba(56, 189, 248, 0.2)', color: 'var(--accent-color)', borderRadius: '6px', fontWeight: 'bold' }}>
                                    {mod.etcs} ECTS
                                  </span>
                                  {mod.isCompleted && (
                                    <span style={{ fontSize: '0.8rem', padding: '2px 8px', background: 'var(--success)', color: '#fff', borderRadius: '6px', fontWeight: 'bold' }}>
                                      Note: {mod.grade?.toFixed(1)}
                                    </span>
                                  )}
                                </div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{mod.name}</h4>
                                
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', opacity: 0.7, marginBottom: '1rem' }}>
                                  {mod.availability && <span>🕒 {mod.availability.name}</span>}
                                  {mod.recommendedSemester && <span>📅 Empfohlen: Semester {mod.recommendedSemester}</span>}
                                </div>
                                
                                {mod.requirements && mod.requirements.length > 0 && (
                                  <div style={{ 
                                    padding: '0.75rem', 
                                    background: 'rgba(0,0,0,0.2)', 
                                    borderRadius: '8px',
                                    fontSize: '0.8rem',
                                    border: met ? '1px solid rgba(34, 197, 94, 0.2)' : '1px solid rgba(234, 179, 8, 0.2)'
                                  }}>
                                    <div style={{ fontWeight: 'bold', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                      {met ? '✅' : '🔒'} {TEXT.missingRequirements}
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                      {mod.requirements.map((req, i) => {
                                        const isMet = selectedIds.includes(req.requiredModuleId || '');
                                        return (
                                          <span key={i} style={{ 
                                            padding: '2px 6px', 
                                            borderRadius: '4px',
                                            background: isMet ? 'rgba(34, 197, 94, 0.1)' : 'rgba(234, 179, 8, 0.1)',
                                            color: isMet ? 'var(--success)' : 'var(--warning)',
                                            textDecoration: isMet ? 'line-through' : 'none'
                                          }}>
                                            {req.name}
                                          </span>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                              
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginLeft: '1.5rem' }}>
                                <button 
                                  className="button-primary"
                                  disabled={!met && !mod.isSelected}
                                  onClick={() => toggleModule(chapter.id, domain.id, mod.id)}
                                  style={{ 
                                    background: mod.isSelected ? 'var(--secondary-bg)' : 'var(--accent-color)', 
                                    color: mod.isSelected ? 'var(--text-primary)' : 'var(--primary-bg)',
                                    opacity: !met && !mod.isSelected ? 0.4 : 1,
                                    cursor: !met && !mod.isSelected ? 'not-allowed' : 'pointer',
                                    minWidth: '110px'
                                  }}
                                >
                                  {mod.isSelected ? TEXT.deselect : TEXT.select}
                                </button>
                                
                                {mod.isSelected && (
                                  <button 
                                    className="button-primary"
                                    onClick={() => setGradeModal({ chapterId: chapter.id, domainId: domain.id, moduleId: mod.id })}
                                    style={{ 
                                      background: mod.isCompleted ? 'var(--success)' : 'rgba(255,255,255,0.1)', 
                                      color: '#fff',
                                      minWidth: '110px'
                                    }}
                                  >
                                    {mod.isCompleted ? TEXT.completed : TEXT.complete}
                                  </button>
                                )}
                              </div>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </section>
      </div>
    </main>
  );
}
