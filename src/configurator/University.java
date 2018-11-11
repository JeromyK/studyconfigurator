package configurator;

import configurator.helper.GlobalIDHelper;

public class University {
    private int id;
    private String name;

    public University(String name) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.name = name;
    }

    public int getId() { return id; }
    public String getName() {
        return name;
    }

}
