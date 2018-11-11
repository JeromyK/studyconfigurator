package configurator;

import configurator.helper.GlobalIDHelper;
import static configurator.helper.DesignationHelper.*;

import java.util.List;

public class Study {

    private int id;
    private String name;
    private String finalTitle;
    private AcademicalGrad academicalGrad;
    private int minimalEtcs;
    private int currentEtcs;
    private int standardAmountOfSemester;

    private University university;
    private Catalog catalog;
    private List<Requirement> requirements;

    public Study (String name, String finalTitle, AcademicalGrad academicalGrad, int minimalEtcs, int standardAmountOfSemester, University university, Catalog catalog, List<Requirement> requirements){
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.name = name;
        this.finalTitle = finalTitle;
        this.academicalGrad = academicalGrad;
        this.minimalEtcs = minimalEtcs;
        this.standardAmountOfSemester = standardAmountOfSemester;
        this.university = university;
        this.catalog = catalog;
        this.requirements = requirements;
    }

    public Study (String name, String finalTitle, AcademicalGrad academicalGrad, int minimalEtcs, int standardAmountOfSemester, University university){
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.name = name;
        this.finalTitle = finalTitle;
        this.academicalGrad = academicalGrad;
        this.minimalEtcs = minimalEtcs;
        this.standardAmountOfSemester = standardAmountOfSemester;
        this.university = university;
    }

    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public String getFinalTitle() {
        return finalTitle;
    }
    public University getUniversity() {
        return university;
    }
    public Catalog getCatalog() { return catalog; }
    public AcademicalGrad getAcademicalGrad() {
        return academicalGrad;
    }
    public int getMinimalEtcs() {
        return minimalEtcs;
    }
    public int getCurrentEtcs() {
        return currentEtcs;
    }
    public int getStandardAmountOfSemester() {
        return standardAmountOfSemester;
    }
    public List<Requirement> getRequirements() {
        return requirements;
    }

}
