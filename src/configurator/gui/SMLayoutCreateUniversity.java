package configurator.gui;

import configurator.Configurator;
import configurator.Study;
import configurator.University;
import configurator.helper.DesignationHelper;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SMLayoutCreateUniversity
        extends JFrame
        implements ActionListener {
    public SMLayoutCreateUniversity() {
        super("Erstelle Unbiversität");
        {
            JPanel labelPanel = new JPanel();
            labelPanel.setLayout(new GridLayout(1, 1));
            labelPanel.add(new JLabel("Name"));
            getContentPane().add(labelPanel, BorderLayout.WEST);

            JPanel textPanel = new JPanel();
            textPanel.setLayout(new GridLayout(1, 1));
            JTextField universityName = new JTextField("Hagen");

            textPanel.add(universityName);
            getContentPane().add(textPanel, BorderLayout.EAST);

            JPanel buttonPanel = new JPanel();
            buttonPanel.setLayout(new GridLayout(1, 1));
            Button generateButton = new Button("Speichern");
            generateButton.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    System.out.print("Universität " + universityName.getText() + " erstellt" + " \n");
                }
            });
            buttonPanel.add(generateButton);
            getContentPane().add(buttonPanel, BorderLayout.SOUTH);

            setLocation(100, 100);
            pack();
        }
    }
    @Override
    public void actionPerformed(ActionEvent e) {
    }
}