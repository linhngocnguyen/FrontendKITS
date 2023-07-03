function reverseStr(input) {
    var ret = new String;
    for(var i = input.length-1; i >= 0; i--) {
        ret+=input[i];
    }
    console.log("Xau sau khi dao nguoc: ");
    return ret;
}