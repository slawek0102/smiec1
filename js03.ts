/**
 * Created by lkmk on 2016-11-02.
 */


document.querySelector('button').addEventListener('click', function () {

    const wartosc = document.querySelector('input').value;

    if (wartosc === '') {
        alert('Wypelnij pole');
        return;
    }

    let liczba = Number(wartosc);

    if (isNaN(liczba)){
        console.log('konwerja nie poszla');
        return;
    }

   console.log((typeof (liczba)));
});