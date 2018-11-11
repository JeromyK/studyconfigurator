package configurator.helper;

public class DesignationHelper {
    public enum Salutation {
        male, female, divers, neutral, undefined
    }
    public enum AcademicalGrad {
        Bachelor, Master, Doctor
    }

    public enum KnowledgeDomain {
        biology, mathematics, physics, chemistry
    }

    public enum KnowledgeLevel {
        knowing, understanding, practicing, analysing, developing, judging
    }

    public enum PersonalPosition {
        primary_lecturer, secondary_lecture, student
    }

    public enum SemesterType {
        winter, summer
    }

    public enum TransactionStatus {
        ok, forbidden, notFound, not_implemented, general_error
    }

    public enum CertificationType {
        unrated, ratedInterview, ratedExam
    }

    public enum Universities {
        Hagen, IUHB
    }
}
