/*
Write a loop that makes seven calls to console.log to output the fol-
lowing triangle:
#
##
###
####
#####
######
#######
*/
let row = "";
for(let i = 0; i<7; i++){
    row += "#";
    console.log(row);
}