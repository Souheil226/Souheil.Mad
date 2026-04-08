
const words = ["Programmer", "Web Developer", "Helpful", "Student"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    // speed t3 remove
    document.getElementById("typewriter").textContent = currentWord.substring(0, j - 3);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) i = 0;
    }
  } else {
    // speed t3 schreiben
    document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  
  // التحكم في سرعة الحركة (بالميلي ثانية)
  const speed = isDeleting ? 200 : 200;
  setTimeout(type, speed);
}

window.onload = type;
