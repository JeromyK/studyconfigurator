package configurator.gui;

import java.awt.*;
import java.util.List;

public class LayoutContainer {
    private static LayoutContainer instance;
    private List<Frame> layouts;

    private LayoutContainer(){ }

    public static LayoutContainer getInstance() {
        if (LayoutContainer.instance == null) {
            LayoutContainer.instance = new LayoutContainer();
        }
        return LayoutContainer.instance;
    }

    public void addLayout(Frame layout) {
        layouts.add(layout);
    }
}
