package configurator;

import configurator.helper.GlobalIDHelper;

import java.util.List;

public class Course {
    private int id;
    private String code;
    private String name;
    private int etcs;
    private List<Requirement> requirements;

    public Course(String code, String name, int etcs){
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.code = code;
        this.name = name;
        this.etcs = etcs;
    }

    public Course(String code, String name, int etcs, List<Requirement> requirements){
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.code = code;
        this.name = name;
        this.etcs = etcs;
        this.requirements = requirements;
    }

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
    public List<Requirement> getRequirements() {
        return requirements;
    }

}
