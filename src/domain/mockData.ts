import { Study } from './types';

/**
 * Jeromy Engineering Conventions:
 * - Use formal address for UI strings.
 * - Discriminated unions for modules.
 * - Updated with official FernUni Hagen Bachelor Informatik curriculum (180 ECTS).
 */

export const mockStudy: Study = {
  id: 'study-1',
  name: 'Bachelor of Science in Informatik',
  finalTitle: 'Bachelor of Science Informatik',
  academicalGrad: 'Bachelor',
  minimalEtcs: 180,
  currentEtcs: 0,
  standardAmountOfSemester: 6,
  university: { id: 'uni-1', name: 'FernUniversität in Hagen' },
  catalog: {
    id: 'catalog-1',
    chapters: [
      {
        id: 'chapter-1',
        code: 'P1',
        name: 'Pflichtmodule - Grundlagen',
        domains: [
          {
            id: 'domain-math',
            name: 'Mathematik',
            modules: [
              {
                id: 'm-01141',
                type: 'mandatory',
                code: '01141',
                name: 'Mathematische Grundlagen',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 1
              },
              {
                id: 'm-01142',
                type: 'mandatory',
                code: '01142',
                name: 'Algorithmische Mathematik',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 2,
                requirements: [{ id: 'req-1141', type: 'module', name: '01141', requiredModuleId: 'm-01141' }]
              }
            ]
          },
          {
            id: 'domain-prog',
            name: 'Programmierung & Methodik',
            modules: [
              {
                id: 'm-01131',
                type: 'mandatory',
                code: '01131',
                name: 'Einführung in die imperative Programmierung',
                etcs: 5,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 1
              },
              {
                id: 'm-01132',
                type: 'mandatory',
                code: '01132',
                name: 'Einführung in die wissenschaftliche Methodik der Informatik',
                etcs: 5,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 1
              },
              {
                id: 'm-01143',
                type: 'mandatory',
                code: '01143',
                name: 'Datenstrukturen und Algorithmen',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 2,
                requirements: [{ id: 'req-1131', type: 'module', name: '01131', requiredModuleId: 'm-01131' }]
              },
              {
                id: 'm-01139',
                type: 'mandatory',
                code: '01139',
                name: 'Einführung in die objektorientierte Programmierung',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 2
              }
            ]
          }
        ]
      },
      {
        id: 'chapter-2',
        code: 'P2',
        name: 'Pflichtmodule - Kerninformatik',
        domains: [
          {
            id: 'domain-core',
            name: 'Kerninformatik',
            modules: [
              {
                id: 'm-01608',
                type: 'mandatory',
                code: '01608',
                name: 'Rechnerarchitektur',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 3
              },
              {
                id: 'm-01613',
                type: 'mandatory',
                code: '01613',
                name: 'Grundlagen der Theoretischen Informatik',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 3
              },
              {
                id: 'm-01609',
                type: 'mandatory',
                code: '01609',
                name: 'Datenbanken und Sicherheit im Internet',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 4
              },
              {
                id: 'm-01618',
                type: 'mandatory',
                code: '01618',
                name: 'Software Engineering',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 4
              }
            ]
          }
        ]
      },
      {
        id: 'chapter-wp',
        code: 'WP',
        name: 'Wahlpflichtmodule',
        domains: [
          {
            id: 'domain-wp-b',
            name: 'Katalog B (Informatik Vertiefung)',
            modules: [
              {
                id: 'm-01664',
                type: 'optional',
                code: '01664',
                name: 'Datenbanksysteme II',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 5
              },
              {
                id: 'm-01671',
                type: 'optional',
                code: '01671',
                name: 'Logik',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 5
              },
              {
                id: 'm-01657',
                type: 'optional',
                code: '01657',
                name: 'Web-Programmierung',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 5
              },
              {
                id: 'm-01810',
                type: 'optional',
                code: '01810',
                name: 'Informationsmanagement in Netzwerken',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 5
              }
            ]
          },
          {
            id: 'domain-wp-m',
            name: 'Katalog M (Mathematik/Methodik)',
            modules: [
              {
                id: 'm-01144',
                type: 'optional',
                code: '01144',
                name: 'Grundlagen der Analysis',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 4
              },
              {
                id: 'm-01146',
                type: 'optional',
                code: '01146',
                name: 'Lineare Algebra',
                etcs: 10,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 4
              }
            ]
          }
        ]
      },
      {
        id: 'chapter-final',
        code: 'AP',
        name: 'Abschlussphase',
        domains: [
          {
            id: 'domain-final',
            name: 'Praxis & Thesis',
            modules: [
              {
                id: 'm-final-prac',
                type: 'mandatory',
                code: 'FP',
                name: 'Fachpraktikum',
                etcs: 10,
                certificationType: 'unrated',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 5
              },
              {
                id: 'm-final-sem',
                type: 'mandatory',
                code: 'SEM',
                name: 'Bachelorseminar',
                etcs: 5,
                certificationType: 'unrated',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 6
              },
              {
                id: 'm-thesis',
                type: 'mandatory',
                code: 'THESIS',
                name: 'Abschlussmodul (Bachelorarbeit)',
                etcs: 15,
                certificationType: 'ratedExam',
                faculty: 'Fakultät für Mathematik und Informatik',
                lecturers: [],
                courses: [],
                isSelected: false,
                availability: { id: 'sem-both', name: 'Jedes Semester' },
                recommendedSemester: 6
              }
            ]
          }
        ]
      }
    ]
  }
};
