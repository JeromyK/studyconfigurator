package configurator.helper;

public class GlobalIDHelper {
    private static GlobalIDHelper instance;
    private int currentID;
    private GlobalIDHelper() {
        currentID = 1;
    }

    public static GlobalIDHelper getInstance() {
        if (GlobalIDHelper.instance == null) {
            GlobalIDHelper.instance = new GlobalIDHelper();
        }
        return GlobalIDHelper.instance;
    }

    public int getNextID() {
        this.currentID++;
        return currentID;
    }
}
