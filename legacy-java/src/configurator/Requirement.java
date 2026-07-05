package configurator;

import configurator.helper.GlobalIDHelper;

public class Requirement {
    private int id;
    private String name;
    private Module requiredModule;
    private Course requiredCourse;
    private Certificate requiredCertificate;
    private Knowledge requiredKnowledge;

    public Requirement (String name, Module requiredModule) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.name = name;
        this.requiredModule = requiredModule;
    }

    public Requirement (String name, Course requiredCourse) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.name = name;
        this.requiredCourse = requiredCourse;
    }

    public Requirement (String name, Certificate requiredCertificate) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.name = name;
        this.requiredCertificate = requiredCertificate;
    }

    public Requirement (String name, Knowledge requiredKnowledge) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.name = name;
        this.requiredKnowledge = requiredKnowledge;
    }
}
