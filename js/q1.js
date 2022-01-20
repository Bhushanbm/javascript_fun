// JavaScript source code
var a = [];
for (var x = 0; x <= 100; x++) {
    var nonPrime = false;
    for (var i = 2; i < x; i++) {
        if (x %i==0 && i!== x) {
            nonPrime = true;
        }
    }

    if (nonPrime == false) {
        a.push(i);
    }
    a = a.reverse();
    for (i = a.length; i > 0; i--) {
        console.log(a[i]);
    }
}