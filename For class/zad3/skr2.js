function sprawdz(){
    var liczby = input1.value
    var max=0; 
    var a=0;

    for( i=0; i<liczby.length; i++){
        if(isNaN(liczby[i])!=true){
            a++;
            if(max<liczby[i]){max=liczby[i]}
        }
    }
    if(a==7){
        odpowiedz.value=max
    }
    else {alert("wprowadzono "+a+" liczb. Wprowadz 7 liczb.")}
}