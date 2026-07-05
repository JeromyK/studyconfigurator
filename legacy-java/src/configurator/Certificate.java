package configurator;

import configurator.helper.GlobalIDHelper;

public class Certificate {
    private int id;
    private String name;

    public Certificate(String name) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.name = name;
    }
}
