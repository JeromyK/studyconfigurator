package configurator;

import configurator.helper.GlobalIDHelper;
import static configurator.helper.DesignationHelper.*;

public class Knowledge {
    private int id;
    private KnowledgeDomain domain;
    private KnowledgeLevel level;
    private String areaOfExpertise;

    public Knowledge (KnowledgeDomain domain, KnowledgeLevel level, String areaOfExpertise) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.domain = domain;
        this.level = level;
        this.areaOfExpertise = areaOfExpertise;
    }

    public int getId() { return id; }
    public KnowledgeDomain getDomain() { return domain; }
    public KnowledgeLevel getLevel() { return level; }
    public String getAreaOfExpertise() { return areaOfExpertise; }
}
