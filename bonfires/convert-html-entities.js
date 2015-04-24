// EXCERCISE
// Convert the characters "&", "<", ">", '"', and "'", in a string to their corresponding HTML entities.

function convert(str) {
  // &colon;&rpar;
  str = str.replace("&", "&amp;")
    .replace("<", "&lt;")
    .replace(">", "&gt;")
    .replace("'", "&lsquo;");
  return str;
}

convert('Dolce & Gabbana');