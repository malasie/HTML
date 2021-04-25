function f(){
    var imie = input1.value
    var nazwisko=input2.value
    const litery= /^[a-zA-Z ]{3,}$/g;
    if (imie[0]==imie[0].toUpperCase() && imie.slice(1)==imie.slice(1).toLowerCase() && litery.test(imie)) {
        alert('ALL GOOD!')
    }
    else {alert('Nieprawidlowe imie ')}
    if (nazwisko.charAt(0)==nazwisko.charAt(0).toUpperCase() && nazwisko.substr(1)==nazwisko.substr(1).toLowerCase(), litery.test(nazwisko));
    else {alert('Nieprawidłowo wprowadzone nazwisko')}
}