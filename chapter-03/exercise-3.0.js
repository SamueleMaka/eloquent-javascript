/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves
now. Define the function min that takes two arguments and returns their
minimum.
*/

function minimum(first, second){
    if(first>second){
        return second;
    }else if(first<=second){
        return first;
    }
}

console.log(minimum(2,3));

console.log(minimum(4,1));

console.log(minimum(0,0));