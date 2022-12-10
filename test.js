var i = 0;

while( i < 10){
    var num =1;
    for(var j = i; j > 1; j--){
    process.stdout.write(j + " ");
        num *= 2;
    }
    console.log("***");
    i++;
}