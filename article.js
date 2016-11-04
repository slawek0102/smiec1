/**
 * Created by lkmk on 2016-11-04.
 */

function Article(title, descritpion) {
    this.id = Article.ID++;
    this.time = title;
    this.description = descritpion;
    this.active = true;
};


Article.ID = 1;


