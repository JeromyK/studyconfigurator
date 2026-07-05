package configurator.helper;

import configurator.helper.DesignationHelper.TransactionStatus;

import java.util.List;
public class SerializeHelper {
    private static SerializeHelper instance;
    private List<Object> library;
    private SerializeHelper() { }

    public static SerializeHelper getInstance() {
        if (SerializeHelper.instance == null) {
            SerializeHelper.instance = new SerializeHelper();
        }
        return SerializeHelper.instance;
    }

    public TransactionStatus save(Object entity) {
        library.add(entity);
        return TransactionStatus.ok;
    }

}
