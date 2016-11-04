/**
 * Created by lkmk on 2016-11-04.
 */

var articlewiew = (function (articlewiew) {

    var list = null;

    articlewiew.renderList = function (articles) {
        initList();

        for (var i in articles){
            renderItem(articles[i]);
        }

    };

    function initList() {
        if (list){
            while (list.firstChild){
                list.removeChild(list);
            }
        }else {
            list = document.querySelector('#article-list');

        }
    }

    return articlewiew;
})(articlewiew ||{})