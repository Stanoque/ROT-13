function decode(encodedString){
    let cipherShift = 13; // how many alphabet positions is skipped by the cipher
    let workString = encodedString; // making func non-mutating
    let alphaRegExp = /[a-z]/gi; // regexp to define alphabetic character

    workString = workString.split(""); // arrays are more convenient 

    for(let i = 0; i < workString.length; i++){
        if(workString[i].match(alphaRegExp)){ // if character is alphabetic

            let charCode = workString[i].charCodeAt(); 
            if(charCode - cipherShift < 65){ // if alphabet limits are exceeded
                workString[i] = String.fromCharCode(90 - (64 - (charCode - cipherShift))); // just go to the other end
            } else {
                workString[i] = String.fromCharCode(workString[i].charCodeAt() - cipherShift);  // if in limits
            }
        }
    }

    return workString.join(""); // returning string
    
}

console.log(decode("SERR PBQR PNZC"));
