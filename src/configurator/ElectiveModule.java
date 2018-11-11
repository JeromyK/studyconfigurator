package configurator;

import configurator.helper.DesignationHelper;
import configurator.helper.GlobalIDHelper;

import java.util.List;

public class ElectiveModule
        extends Module
{
    public ElectiveModule(String code, String name, DesignationHelper.CertificationType certificationType, Faculty faculty, List<Lecturer> lecturers, List<Course> courses){
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.code = code;
        this.name = name;
        this.certificationType = certificationType;
        this.faculty = faculty;
        this.lecturers = lecturers;
        this.courses = courses;

        for (Course course : courses) {
            this.etcs = course.getEtcs() + this.etcs;
        }
    }

    public ElectiveModule(String code, String name, DesignationHelper.CertificationType certificationType, Faculty faculty, List<Lecturer> lecturers, List<Course> courses, List<Requirement> requirements){
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.code = code;
        this.name = name;
        this.certificationType = certificationType;
        this.faculty = faculty;
        this.lecturers = lecturers;
        this.courses = courses;
        this.requirements = requirements;

        for (Course course : courses) {
            this.etcs = course.getEtcs() + this.etcs;
        }
    }
}
