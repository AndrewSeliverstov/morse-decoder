const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let messageConverted = [];
    let wordsNum = expr.split("**********");
    
    let newStr1 = [];
    let newStr2 = [];
    let newStr3 = [];
    let newStr4 = [];
    
    let dot = ".";
    let dash = "-";
        
    for (let i=0; i<wordsNum.length;i++){
        let re11 = /11/gi;
        let re10 = /10/gi;
        let re00 = /00/gi;
        newStr1[i] = wordsNum[i].replace(/.{1,10}(?=(.{10})+$)/g, '$& ');
        newStr2[i] = newStr1[i].replace(re11, dash);
        newStr3[i] = newStr2[i].replace(re10, dot);
        newStr4[i] = newStr3[i].replace(re00, '');
        
    }
    
    let res = newStr4.join("   ");
    
    res.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverted.push(MORSE_TABLE[letter]);
        });
        messageConverted.push(" ");
    });

    let res2 = messageConverted.join("");
    let result = res2.replace(/\s+$/, '');
    
    return result;
}

module.exports = {
    decode
}