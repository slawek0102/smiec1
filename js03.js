
    // var element = document.querySelector('h1');
    // element.style.backgroundColor = 'red';

    // var elements = document.querySelectorAll('li');

    // console.log(elements[0].innerHTML);

    var element = document.createElement('li');
    element.innerHTML = 'Kolejny element';

    var lista = document.querySelector('ul');

    lista.appendChild(element);