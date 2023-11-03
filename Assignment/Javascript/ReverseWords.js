function reverseWords(sentence) {
    let reversedSentence = "";
    let word = "";
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            word = sentence[i] + word;
        } else {
            reversedSentence += word + ' ';
            word = "";
        }
    }
    
    reversedSentence += word;  // Append the last word without space
    
    return reversedSentence;
}

const inputSentence =prompt("Enter your sentence");//This is a sunny day
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
