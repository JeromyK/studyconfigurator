package configurator.gui;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import configurator.Configurator;
import configurator.Study;
import configurator.University;
import configurator.helper.DesignationHelper;

public class StudyManagementLayoutSwing
        extends JFrame
        implements ActionListener {
    public StudyManagementLayoutSwing() {
        super("Erstelle Studium");

        JPanel labelPanel = new JPanel();
        labelPanel.setLayout(new GridLayout(6, 1));
        labelPanel.add(new JLabel("Bezeichnung des Studienganges"));
        labelPanel.add(new JLabel("Bezeichnung des Abschlusses"));
        labelPanel.add(new JLabel("Akademischer Grad"));
        labelPanel.add(new JLabel("Erlangte ETCS"));
        labelPanel.add(new JLabel("Regelstudienzeit in Semestern"));
        labelPanel.add(new JLabel("Universität"));
        getContentPane().add(labelPanel, BorderLayout.WEST);

        JPanel textPanel = new JPanel();
        textPanel.setLayout(new GridLayout(6, 2));
        JTextField studyName = new JTextField("Bachelor of Science in Informatik");
        JTextField studyfinalTitle = new JTextField("Bachelor of Science Informatik");
        JComboBox studyAcademicalGrad = new JComboBox(DesignationHelper.AcademicalGrad.values());
        JTextField studyMinimalEtcs = new JTextField("180");
        JTextField studyStandardAmountOfSemester = new JTextField("6");
        JComboBox studyUniversityName = new JComboBox(DesignationHelper.Universities.values());

        textPanel.add(studyName);
        textPanel.add(new Button(""));
        textPanel.add(studyfinalTitle);
        textPanel.add(new Button(""));
        textPanel.add(studyAcademicalGrad);
        textPanel.add(new Button(""));
        textPanel.add(studyMinimalEtcs);
        textPanel.add(new Button(""));
        textPanel.add(studyStandardAmountOfSemester);
        textPanel.add(new Button(""));
        textPanel.add(studyUniversityName);
        Button createUniversityButton = new Button("+");
        createUniversityButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                 SMLayoutCreateUniversity smlCreateUniversity= new SMLayoutCreateUniversity();
                 smlCreateUniversity.setVisible(true);
            }
        });
        textPanel.add(createUniversityButton);
        getContentPane().add(textPanel, BorderLayout.EAST);

        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new GridLayout(1, 1));
        Button generateButton = new Button("Generiere");
        generateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Configurator.getInstance().setCurrentStudy(new Study(
                        studyName.getText(),
                        studyfinalTitle.getText(),
                        (DesignationHelper.AcademicalGrad) studyAcademicalGrad.getSelectedItem(),
                        Integer.parseInt(studyMinimalEtcs.getText()),Integer.parseInt(studyStandardAmountOfSemester.getText()),
                        new University(studyUniversityName.getSelectedItem().toString())));
                System.out.print("Objekt erstellt" + " \n");
            }
        });
        buttonPanel.add(generateButton);
        getContentPane().add(buttonPanel, BorderLayout.SOUTH);

        setLocation(100, 100);
        pack();
    }

    @Override
    public void actionPerformed(ActionEvent e) {
    }
}
