package configurator;

import configurator.helper.GlobalIDHelper;

public class Faculty {
    private int id;
    private String name;

    public Faculty (String name){
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.name = name;
    }
}
