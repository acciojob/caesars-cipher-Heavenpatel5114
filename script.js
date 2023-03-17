// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};
function rot13(encodedStr){
	const words=encodedStr.split("");
	let decodedArr=[];
	for(let i=0;i<words.length;i++){
		const word=words[i]
		let decoded_words=''
		for(let j=0;j<word.length;j++){
			const char = word.charAt(j)
			const decoded_char=lookup[char]
			decoded_word +=decoded_char
		}
		decodedArr.push(decoded_words)
	}
	return decodedArr.join(" ")
}
module.export=rot13;
// Change the inputs below to test