package configurator.gui;

import java.awt.*;

public class StudyManagementLayoutAwt
        extends Frame {

    public StudyManagementLayoutAwt() {

        //Text AWT
        super("Awt");
        setLayout(new FlowLayout());
        add(new Panel (new FlowLayout(FlowLayout.LEFT)));

        Panel labelPanel = new Panel();
        labelPanel.setLayout(new GridLayout(6, 1));
        labelPanel.add(new Label("Bezeichung des Studienganges"));
        labelPanel.add(new Label("Bezeichung des Abschlusses"));
        labelPanel.add(new Label("Akademischer Grad"));
        labelPanel.add(new Label("Erlangte ETCS"));
        labelPanel.add(new Label("Regelstudienzeit in Semestern"));
        labelPanel.add(new Label("Universität"));

        Panel textPanel = new Panel();
        textPanel.setLayout(new GridLayout(6, 1));
        textPanel.add(new TextField("Bachelor of Science in Informatik"));
        textPanel.add(new TextField("Bachelor of Science Informatik"));
        textPanel.add(new TextField("Bachelor"));
        textPanel.add(new TextField("180"));
        textPanel.add(new TextField("6"));
        textPanel.add(new TextField("Fernuni Hagen"));

        add(labelPanel);
        add(textPanel);
        pack();
    }
}
