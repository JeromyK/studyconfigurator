import { Study, Module, Course } from '../types';

/**
 * Jeromy Engineering Conventions:
 * - Pure functions for domain logic.
 * - No side effects.
 */

/**
 * Calculates the total ECTS of a module based on its courses.
 */
export const calculateModuleEtcs = (courses: Course[]): number => {
  return courses.reduce((total, course) => total + course.etcs, 0);
};

export const calculateStudyCurrentEtcs = (study: Study): number => {
  if (!study.catalog) return 0;
  
  let totalEtcs = 0;
  study.catalog.chapters.forEach(chapter => {
    chapter.domains.forEach(domain => {
      domain.modules.forEach(module => {
        if (module.isSelected) {
          totalEtcs += module.etcs;
        }
      });
    });
  });
  
  return totalEtcs;
};

/**
 * Calculates the weighted Grade Point Average (GPA).
 */
export const calculateGPA = (study: Study): number | null => {
  if (!study.catalog) return null;
  
  let weightedGradesSum = 0;
  let gradedEtcsSum = 0;
  
  study.catalog.chapters.forEach(chapter => {
    chapter.domains.forEach(domain => {
      domain.modules.forEach(module => {
        if (module.isCompleted && module.grade && module.grade > 0) {
          weightedGradesSum += module.grade * module.etcs;
          gradedEtcsSum += module.etcs;
        }
      });
    });
  });
  
  if (gradedEtcsSum === 0) return null;
  
  return weightedGradesSum / gradedEtcsSum;
};

/**
 * Checks if a module's requirements are met.
 * Handles module, course, certificate, and knowledge requirements.
 */
export const areRequirementsMet = (
  module: Module, 
  selectedModuleIds: string[], 
  completedCourseIds: string[] = [],
  acquiredCertificates: string[] = []
): boolean => {
  if (!module.requirements || module.requirements.length === 0) return true;
  
  return module.requirements.every(req => {
    switch (req.type) {
      case 'module':
        return selectedModuleIds.includes(req.requiredModuleId);
      case 'course':
        return completedCourseIds.includes(req.requiredCourseId);
      case 'certificate':
        return acquiredCertificates.includes(req.certificateName);
      case 'knowledge':
        // Simplified knowledge check: assuming knowledge is tracked elsewhere or always true for now
        return true; 
      default:
        return true;
    }
  });
};

/**
 * Returns a list of missing requirements for a module.
 */
export const getMissingRequirements = (
  module: Module,
  selectedModuleIds: string[],
  completedCourseIds: string[] = [],
  acquiredCertificates: string[] = []
): string[] => {
  if (!module.requirements) return [];
  
  const missing: string[] = [];
  
  module.requirements.forEach(req => {
    switch (req.type) {
      case 'module':
        if (!selectedModuleIds.includes(req.requiredModuleId)) {
          missing.push(`Modul: ${req.name}`);
        }
        break;
      case 'course':
        if (!completedCourseIds.includes(req.requiredCourseId)) {
          missing.push(`Kurs: ${req.name}`);
        }
        break;
      case 'certificate':
        if (!acquiredCertificates.includes(req.certificateName)) {
          missing.push(`Zertifikat: ${req.certificateName}`);
        }
        break;
    }
  });
  
  return missing;
};
