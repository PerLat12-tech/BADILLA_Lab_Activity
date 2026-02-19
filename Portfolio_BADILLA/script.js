// Typing effect for home section
const typingText = document.querySelector(".typing");
const words = ["Web Developer", "Designer", "Programmer"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {
    if(wordIndex >= words.length) wordIndex = 0;
    currentWord = words[wordIndex];

    if(isDeleting){
        typingText.textContent = currentWord.substring(0, charIndex--);
        if(charIndex < 0){
            isDeleting = false;
            wordIndex++;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex++);
        if(charIndex > currentWord.length){
            isDeleting = true;
        }
    }
    setTimeout(type, isDeleting ? 100 : 200);
}

if(typingText) type();

// Function to handle lab card click if needed
function openLab(labNumber){
    if(labNumber === 1) window.location.href = "missionlog.html";
    if(labNumber === 2) window.location.href = "profilecard.html";
    if(labNumber === 3) window.location.href = "todoList.html";
}

// Explore button
function explore() {
    window.location.href = "crew.html";
}