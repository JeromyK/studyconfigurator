package configurator;

import configurator.helper.GlobalIDHelper;
import java.util.List;

public class Catalog {
    private int id;
    private List<CatalogChapter> chapters;

    public Catalog(List<CatalogChapter> chapters) {
        this.id = GlobalIDHelper.getInstance().getNextID();
        this.chapters = chapters;
    }

    public List<CatalogChapter> getChapters() {
        return chapters;
    }
}
