/**
 * Jeromy Engineering Conventions: 
 * - Discriminated unions for polymorphic data.
 * - Strict type safety.
 * - Formal German address where applicable (though these are technical types).
 */

export type Salutation = 'male' | 'female' | 'divers' | 'neutral' | 'undefined';

export type AcademicalGrad = 'Bachelor' | 'Master' | 'Doctor';

export type KnowledgeDomain = 'biology' | 'mathematics' | 'physics' | 'chemistry';

export type KnowledgeLevel = 'knowing' | 'understanding' | 'practicing' | 'analysing' | 'developing' | 'judging';

export type PersonalPosition = 'primary_lecturer' | 'secondary_lecture' | 'student';

export type SemesterType = 'winter' | 'summer';

export type CertificationType = 'unrated' | 'ratedInterview' | 'ratedExam';

export interface Semester {
  id: string;
  name: string;
  type: SemesterType;
}

export interface Availability {
  id: string;
  name: string;
}

export interface University {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  etcs: number;
  requirements?: Requirement[];
}

export type ModuleType = 'mandatory' | 'elective' | 'optional';

export interface BaseModule {
  id: string;
  type: ModuleType;
  code: string;
  name: string;
  etcs: number;
  certificationType: CertificationType;
  faculty: string;
  lecturers: Lecturer[];
  courses: Course[];
  requirements?: Requirement[];
  isSelected: boolean;
  isCompleted?: boolean;
  grade?: number;
  availability?: Availability;
  recommendedSemester?: number;
}

export interface MandatoryModule extends BaseModule {
  type: 'mandatory';
}

export interface ElectiveModule extends BaseModule {
  type: 'elective';
}

export interface OptionalModule extends BaseModule {
  type: 'optional';
}

export type Module = MandatoryModule | ElectiveModule | OptionalModule;

export interface Lecturer {
  id: string;
  salutation: Salutation;
  firstName: string;
  lastName: string;
  email: string;
  position: PersonalPosition;
}

export type RequirementType = 'module' | 'course' | 'certificate' | 'knowledge';

export interface BaseRequirement {
  id: string;
  type: RequirementType;
  name: string;
}

export interface ModuleRequirement extends BaseRequirement {
  type: 'module';
  requiredModuleId: string;
}

export interface CourseRequirement extends BaseRequirement {
  type: 'course';
  requiredCourseId: string;
}

export interface CertificateRequirement extends BaseRequirement {
  type: 'certificate';
  certificateName: string;
}

export interface KnowledgeRequirement extends BaseRequirement {
  type: 'knowledge';
  domain: KnowledgeDomain;
  level: KnowledgeLevel;
}

export type Requirement = 
  | ModuleRequirement 
  | CourseRequirement 
  | CertificateRequirement 
  | KnowledgeRequirement;

export interface CatalogDomain {
  id: string;
  name: string;
  modules: Module[];
}

export interface CatalogChapter {
  id: string;
  code: string;
  name: string;
  domains: CatalogDomain[];
}

export interface Catalog {
  id: string;
  chapters: CatalogChapter[];
}

export interface Study {
  id: string;
  name: string;
  finalTitle: string;
  academicalGrad: AcademicalGrad;
  minimalEtcs: number;
  currentEtcs: number;
  standardAmountOfSemester: number;
  university: University;
  catalog?: Catalog;
  requirements?: Requirement[];
}
