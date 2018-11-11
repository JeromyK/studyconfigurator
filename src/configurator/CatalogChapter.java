package configurator;

import configurator.helper.GlobalIDHelper;
import java.util.List;

public class CatalogChapter {
    private int id;
    private String code;
    private String name;
    private List<CatalogDomain> domains;

    public CatalogChapter(String code, String name, List<CatalogDomain> domains) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.code = code;
        this.name = name;
        this.domains = domains;
    }

    public String getCode() {
        return code;
    }

    public String getName() {
        return name;
    }

    public List<CatalogDomain> getDomains() {
        return domains;
    }
}
