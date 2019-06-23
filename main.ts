function markovMe() {
    const markovChain = {}
    const textToMarkov = ''

    for (let i = 0; i < textToMarkov.length; i++) {
		let word = textToMarkov[i].toLowerCase().replace(/[\W_]/, "")

		if (!markovChain[word]) {
			markovChain[word] = []
		}
		if (textToMarkov[i + 1]) {
			markovChain[word].push(textToMarkov[i + 1].toLowerCase().replace(/[\W_]/, ""));
  		}
	}
	  
    const words = Object.keys(markovChain)
    let word = words[Math.floor(Math.random() * words.length)]
    let result = ''
	
	for (let i = 0; i < words.length; i++ ) {
		result += (word === '.') ? '. ': word + ' '
		let newWord =  markovChain[word][Math.floor(Math.random() * markovChain[word].length)]
		word = newWord;
		if (!word || !markovChain.hasOwnProperty(word)) word = words[Math.floor(Math.random() * words.length)]
	}
	
    return result;
}