package configurator;

import configurator.gui.StudyManagementLayoutAwt;
import configurator.gui.StudyManagementLayoutSwing;
import jdk.nashorn.internal.ir.IfNode;

import static configurator.helper.DesignationHelper.*;

import java.util.ArrayList;

public class Demo {
    public static void main(String[] args) {
        //Init
        Study myStudy =
            new Study(
                "Bachelor of Science in Informatik",
                "Bachelor of Science Informatik",
                AcademicalGrad.Bachelor,
                180,
                6,
                new University("Fernuni Hagen"),
                new Catalog(
                        new ArrayList<CatalogChapter>() {{
                                add(new CatalogChapter("P", "Pflicht",
                                        new ArrayList<CatalogDomain>() {{
                                            add(new CatalogDomain("Pflicht",
                                                    new ArrayList<Module>() {
                                                        {
                                                            add(new MandatoryModule(
                                                                    "M1613/61",
                                                                    "Einführung in die imperative Programmierung und Datenstrukturen I",
                                                                    CertificationType.unrated,
                                                                    new Faculty("Fakultät für Mathematik und Informatik"),
                                                                    new ArrayList<Lecturer>() {{
                                                                        add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                        add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                                    }},
                                                                    new ArrayList<Course>() {{
                                                                        add(new Course("1613", "Einführung in die imperative Programmierung", 5));
                                                                        add(new Course("1661", "Datenstrukturen I", 5));
                                                                    }}
                                                            ));
                                                            add(new MandatoryModule(
                                                                    "M1141",
                                                                    "Mathematische Grundlagen",
                                                                    CertificationType.unrated,
                                                                    new Faculty("Fakultät für Mathematik und Informatik"),
                                                                    new ArrayList<Lecturer>() {{
                                                                        add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                        add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                                    }},
                                                                    new ArrayList<Course>() {{
                                                                        add(new Course("1141", "Mathematische Grundlagen", 10));
                                                                    }}
                                                            ));
                                                            add(new MandatoryModule(
                                                                    "M1142",
                                                                    "Algorithmische Mathematik",
                                                                    CertificationType.unrated,
                                                                    new Faculty("Fakultät für Mathematik und Informatik"),
                                                                    new ArrayList<Lecturer>() {{
                                                                        add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                        add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                                    }},
                                                                    new ArrayList<Course>() {{
                                                                        add(new Course("1142", "Algorithmische Mathematik", 10));
                                                                    }}
                                                            ));
                                                            add(new MandatoryModule(
                                                                    "M1618",
                                                                    "Einführung in die objektorientierte Programmierung",
                                                                    CertificationType.unrated,
                                                                    new Faculty("Fakultät für Mathematik und Informatik"),
                                                                    new ArrayList<Lecturer>() {{
                                                                        add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                        add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                                    }},
                                                                    new ArrayList<Course>() {{
                                                                        add(new Course("1618", "Einführung in die objektorientierte Programmierung", 10));
                                                                    }}
                                                            ));
                                                            add(new MandatoryModule(
                                                                    "M1584",
                                                                    "Grundpraktikum Programmierung",
                                                                    CertificationType.unrated,
                                                                    new Faculty("Fakultät für Mathematik und Informatik"),
                                                                    new ArrayList<Lecturer>() {{
                                                                        add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                        add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                                    }},
                                                                    new ArrayList<Course>() {{
                                                                        add(new Course("1584", "Grundpraktikum Programmierung", 10));
                                                                    }}
                                                            ));
                                                            add(new MandatoryModule(
                                                                    "M25111",
                                                                    "Softwaresysteme",
                                                                    CertificationType.ratedInterview,
                                                                    new Faculty("Fakultät für Mathematik und Informatik"),
                                                                    new ArrayList<Lecturer>() {{
                                                                        add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                        add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                                    }},
                                                                    new ArrayList<Course>() {{
                                                                        add(new Course("1801", "Betriebssysteme und Rechnernetze", 5));
                                                                        add(new Course("1671", "Datenbanken I", 5));
                                                                    }}
                                                            ));
                                                            add(new MandatoryModule(
                                                                    "M25211",
                                                                    "Computersysteme",
                                                                    CertificationType.ratedExam,
                                                                    new Faculty("Fakultät für Mathematik und Informatik"),
                                                                    new ArrayList<Lecturer>() {{
                                                                        add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                        add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                                    }},
                                                                    new ArrayList<Course>() {{
                                                                        add(new Course("1608", "Computersysteme I", 5));
                                                                        add(new Course("1609", "Computersysteme II", 5));
                                                                    }}
                                                            ));
                                                            add(new MandatoryModule(
                                                                    "M25310",
                                                                    "Grundlagen der Theoretischen Informatik",
                                                                    CertificationType.ratedExam,
                                                                    new Faculty("Fakultät für Mathematik und Informatik"),
                                                                    new ArrayList<Lecturer>() {{
                                                                        add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                        add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                                    }},
                                                                    new ArrayList<Course>() {{
                                                                        add(new Course("1659", "Grundlagen der Theoretischen Informatik", 10));
                                                                    }}
                                                            ));
                                                            add(new MandatoryModule(
                                                                    "M26310",
                                                                    "Management von Softwareprojekten",
                                                                    CertificationType.unrated,
                                                                    new Faculty("Fakultät für Mathematik und Informatik"),
                                                                    new ArrayList<Lecturer>() {{
                                                                        add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                        add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                                    }},
                                                                    new ArrayList<Course>() {{
                                                                        add(new Course("1895", "Management von Softwareprojekten", 10));
                                                                    }}
                                                            ));
                                                        }
                                                    }
                                            ));
                                        }}
                                ));
                                add(new CatalogChapter("B", "Bachelor",
                                    new ArrayList<CatalogDomain>() {{
                                        add(new CatalogDomain("Grundlagen der Informatik",
                                                new ArrayList<Module>() {{
                                                    add(new ElectiveModule(
                                                            "M1613/61",
                                                            "Einführung in die imperative Programmierung und Datenstrukturen I",
                                                            CertificationType.unrated,
                                                            new Faculty("Fakultät für Mathematik und Informatik"),
                                                            new ArrayList<Lecturer>() {{
                                                                add(new Lecturer(Salutation.divers, "Martin", "Kaiser", "martin.kaiser@gmail.com", PersonalPosition.primary_lecturer));
                                                                add(new Lecturer(Salutation.female, "Karin", "Maier", "karin.maier@gmail.com", PersonalPosition.secondary_lecture));
                                                            }},
                                                            new ArrayList<Course>() {{
                                                                add(new Course("1613", "Einführung in die imperative Programmierung", 5));
                                                                add(new Course("1661", "Datenstrukturen I", 5));
                                                            }}
                                                    ));
                                                }}
                                        ));
                                    }}
                                ));
                        }}
                ),
                new ArrayList<Requirement>() {{
                    add(new Requirement("Abiturabschluss", new Certificate("Abitur")));
                }}
            );


        //Print
        System.out.println(myStudy.getFinalTitle() + " an der " + myStudy.getUniversity().getName() + " (" + myStudy.getCurrentEtcs() + " / " + myStudy.getMinimalEtcs() + ")");
        for (CatalogChapter chapter : myStudy.getCatalog().getChapters()) {
            System.out.println("└- " + chapter.getCode() + " - " + chapter.getName());
            for (CatalogDomain domain : chapter.getDomains()) {
                System.out.println("  └- " + domain.getName());
                for (Module module : domain.getModules()) {
                    System.out.println("    └- " + module.getCode() + " - " + module.getName() + "(" + module.getEtcs() + ")");
                    for (Course course : module.getCourses()) {
                        System.out.println("      └- " + course.getCode() + " - " + course.getName() + "(" + course.getEtcs() + ")");
                    }
                }
            }
        }
        //StudyManagementLayoutAwt smla = new StudyManagementLayoutAwt();
        //smla.setVisible(true);

        //StudyManagementLayoutSwing smls = new StudyManagementLayoutSwing();
        //smls.setVisible(true);

        Configurator config = Configurator.getInstance();
        config.studyManagementFrontend.setVisible(true);

    }
}
