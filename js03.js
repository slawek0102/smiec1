document.addEventListener('DOMContentLoaded', function () {





 var HTML = '<table>';

    // for (var i = 1; i < 9; i++) {

        HTML += '<tr>' ;

            for (var w = 1; w < 9; w++){
               HTML += '<td>' ;
               HTML += '</td>' + 'koniec wiersza';
            }

        HTML += '</tr>' ;
    // }

    HTML += '</table>';

    document.body.innerHTML += HTML;

});