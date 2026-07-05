package configurator;

import configurator.gui.StudyManagementLayoutSwing;

public class Configurator {
    private static Configurator instance;
    public Study currentStudy;
    public StudyManagementLayoutSwing studyManagementFrontend;

    private Configurator() {
        this.studyManagementFrontend = new StudyManagementLayoutSwing();
    }

    public static Configurator getInstance() {
        if (Configurator.instance == null) {
            Configurator.instance = new Configurator();
        }
        return Configurator.instance;
    }

    public void setCurrentStudy(Study currentStudy) {
        this.currentStudy = currentStudy;
    }
}