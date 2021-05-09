function sprawdz(){
    var liczby = input1.value
    var a=0; 
    for( i=0; i<liczby.length; i++){
        if(isNaN(liczby[i])!=true){
            if(a<liczby[i]){a=liczby[i]}
        }
    }
    odpowiedz.setT
    alert('Najwieksza cyfra: '+ a)
}