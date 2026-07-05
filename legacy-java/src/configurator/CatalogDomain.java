package configurator;

import configurator.helper.GlobalIDHelper;

import java.util.List;

public class CatalogDomain {
        private int id;
        private String name;
        private List<Module> modules;

        public CatalogDomain(String name, List<Module> modules) {
            this.id = GlobalIDHelper.getInstance().getNextID();
            this.name = name;
            this.modules = modules;
        }

    public String getName() {
        return name;
    }

    public List<Module> getModules() {
        return modules;
    }
}
