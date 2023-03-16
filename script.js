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
function rot13(str) { // LBH QVQ VG!
  
  var string = "";
  for(var i = 0; i < str.length; i++) {
    var temp = str.charAt(i);
    if(temp !== " " || temp!== "!" || temp!== "?") {
       string += String.fromCharCode(13 + String.prototype.charCodeAt(temp));
    } else {
      string += temp;
    }
  }
  
  return string;
}

// Change the inputs below to test