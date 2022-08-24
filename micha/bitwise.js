let num = 7

function addOne(x) {
    let m = 1;
     
    // Flip all the set bits
    // until we find a 0
    while( x & m ) {
        x = x ^ m;
        m <<= 1;
    }
     
    // flip the rightmost 0 bit
    x = x ^ m;
    return x;
}

let num_bin = (num).toString(2)
let num_bin_plus_one  = addOne(num).toString(2)
console.log(num_bin)
console.log(num_bin_plus_one)