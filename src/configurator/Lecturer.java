package configurator;

import configurator.helper.GlobalIDHelper;

import static configurator.helper.DesignationHelper.*;

public class Lecturer {
    private int id;
    private Salutation salutation;
    private String firstname;
    private String lastname;
    private String email;
    private PersonalPosition position;

    public Lecturer (Salutation salutation, String firstname, String lastname, String email, PersonalPosition position) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.salutation = salutation;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email  = email;
        this.position = position;
    }
}
