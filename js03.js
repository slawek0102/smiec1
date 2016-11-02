/**
 * Created by lkmk on 2016-11-02.
 */


document.querySelector('select').addEventListener('change', function () {

    var value = document.querySelector('select').value;
    var kolor = '#fff';

    console.log(kolor);

    switch (value) {
        case '1':
            kolor = '#f00';
            break;
        case '2':
            kolor = '#0f0';
            break;
        case '3':
            kolor = '#00f';
            break;
        default:
            kolor = '#fff';
    }

     // document.body.style = 'background-color:' + kolor;

    document.body.style.backgroundColor = kolor;
    console.log(value);
    console.log(kolor);

});



















