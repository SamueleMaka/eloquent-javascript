/*
Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there
is either a sp
*/

for(let j=0; j<8; j++){
    let output = "";
    let order = j%2;
    for(let i=0; i<8; i++){
        if(i%2==order){
            output += "#";
        }else{
            output += " ";
        }
    }
    console.log(output)

}

