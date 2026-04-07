// مصفوفة تحتوي على الكلمات التي تريدها أن تظهر
const words = ["Programmer", "Web Developer", "Java Enthusiast", "Student"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    // سرعة الحذف
    document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) i = 0;
    }
  } else {
    // سرعة الكتابة
    document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  
  // التحكم في سرعة الحركة (بالميلي ثانية)
  const speed = isDeleting ? 100 : 200;
  setTimeout(type, speed);
}
// تشغيل الدالة عند تحميل الصفحة
window.onload = type;





