function f(){
    var a= input1.value
    var b= input2.value
    var q=0;
    while (a != b) {
        if (a < b) {
          q = a; a = b; b = q;
        } 
        a = a - b;
      }
      odp.value=a;
}