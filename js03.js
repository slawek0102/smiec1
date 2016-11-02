/**
 * Created by lkmk on 2016-11-02.
 */
document.querySelector('button').addEventListener('click', function () {
    var wartosc = document.querySelector('input').value;
    if (wartosc === '') {
        alert('Wypelnij pole');
        return;
    }
    var liczba = Number(wartosc);
    if (isNaN(liczba)) {
        console.log('konwerja nie poszla');
        return;
    }
    console.log((typeof (liczba)));
});
//# sourceMappingURL=js03.js.map