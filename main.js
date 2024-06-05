function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Increment length counter for each character
        length++;

        // Check if the current character is a letter (not a space or punctuation)
        if (sentence[i].match(/[a-zA-Z]/)) {
            // Increment word count if the current character is preceded by a space or it's the first character
            if (i === 0 || sentence[i - 1] === ' ') {
                wordCount++;
            }

            // Check if the current character is a vowel
            if (sentence[i].match(/[aeiouAEIOU]/)) {
                vowelCount++;
            }
        }
    }

    // Output the results
    console.log("Length of the sentence:", length);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}

// Example usage
const sentence = "This is a sample sentence.";
analyzeSentence(sentence);
