package configurator;

import static configurator.helper.DesignationHelper.*;

import java.util.List;

public class Module {
    protected int id;
    protected String code;
    protected String name;
    protected int etcs;
    protected CertificationType certificationType;
    protected Faculty faculty;
    protected List<Lecturer> lecturers;
    protected List<Course> courses;
    protected List<Requirement> requirements;

    protected boolean isSelected;

    public Module() { }

    public int getId() {
        return id;
    }
    public String getCode() {
        return code;
    }
    public String getName() {
        return name;
    }
    public int getEtcs() {
        return etcs;
    }
    public Faculty getFaculty() {
        return faculty;
    }
    public List<Lecturer> getLecturers() {
        return lecturers;
    }
    public List<Course> getCourses() {
        return courses;
    }
    public List<Requirement> getRequirements() {
        return requirements;
    }

    public void select(){
        this.isSelected = true;
    }

    public void deselect(){
        this.isSelected = false;
    }
}
