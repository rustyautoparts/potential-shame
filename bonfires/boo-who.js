// EXERCISE
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool !== null) {
    var boowho = bool.toString();
    if (boowho === "true" || boowho === "false") {
      return true;
    }
  }
  return false;
}

boo(null);
