var tab = [];
var html = '';

// document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('button').addEventListener('click', function () {
        var value = document.querySelector('input').value;
        document.querySelector('input').value = '';
        tab.push(value);
        console.log(tab);

        var html = '';

        for (let index in tab){

            html+= '<li>' + tab[index] + '</li>'
        }

        document.querySelector('ul').innerHTML = html;
    });




// });