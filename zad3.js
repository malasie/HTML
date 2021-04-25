function f(){
    var imie = input1.value
    var nazwisko=input2.value
    var email=input3.value
    const i= /^[a-zA-ZąćęłóśżźĄĆĘŁÓŚŻŹ]{3,}$/g;
    const n= /^[a-zA-ZąćęłóśżźĄĆĘŁÓŚŻŹ ]{3,}$/g;
    const mail =/^(\w|\.|-)*\@+(\w{2,})+(\.\w{2,})+$/;
    if (imie[0]!=imie[0].toUpperCase() || imie.slice(1)!=imie.slice(1).toLowerCase() || !i.test(nazwisko)) {
        alert('Nieprawidlowe imie ')
    }
    else if (nazwisko[0]!=nazwisko[0].toUpperCase() || nazwisko.slice(1)!=nazwisko.slice(1).toLowerCase() || !n.test(nazwisko)) {
        alert('Nieprawidłowo wprowadzone nazwisko')
    }
    else if (!mail.test(email)){ alert('Zły email')}
    else {alert('All Good!')}
}