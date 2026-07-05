import { mockStudy as fernUniHagenInformatik } from './mockData';

export const studyTemplates = [
  {
    id: 'tpl-fu-inf-b',
    name: 'Bachelor Informatik (FernUni Hagen)',
    description: 'Der offizielle Bachelor-Studiengang Informatik der FernUniversität in Hagen (180 ECTS).',
    template: fernUniHagenInformatik
  },
  {
    id: 'tpl-generic-b',
    name: 'Generisches Bachelor-Studium',
    description: 'Eine leere Vorlage für ein beliebiges Bachelor-Studium (180 ECTS).',
    template: {
      ...fernUniHagenInformatik,
      id: 'template-generic',
      name: 'Neues Studium',
      catalog: { chapters: [] }
    }
  }
];
