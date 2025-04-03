function double(b){
    return function(a){
        return a*b;
    }
}

const double2 = double(2);
console.log(double2(4));