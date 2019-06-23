function markovMe() {
    var markovChain = {};
    var textToMarkov = '';
    for (var i = 0; i < textToMarkov.length; i++) {
        var word_1 = textToMarkov[i].toLowerCase().replace(/[\W_]/, "");
        if (!markovChain[word_1]) {
            markovChain[word_1] = [];
        }
        if (textToMarkov[i + 1]) {
            markovChain[word_1].push(textToMarkov[i + 1].toLowerCase().replace(/[\W_]/, ""));
        }
    }
    var words = Object.keys(markovChain);
    var word = words[Math.floor(Math.random() * words.length)];
    var result = '';
    for (var i = 0; i < words.length; i++) {
        result += (word === '.') ? '. ' : word + ' ';
        var newWord = markovChain[word][Math.floor(Math.random() * markovChain[word].length)];
        word = newWord;
        if (!word || !markovChain.hasOwnProperty(word))
            word = words[Math.floor(Math.random() * words.length)];
    }
    document.getElementById('markovResults').innerText = result;
}
