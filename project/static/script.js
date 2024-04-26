const words = ["brainstorming", "innovating", "coding", "creating", "working", "developing"];
let currentWordIndex = 0;
let lightsCount = 0;

function updateWord() {
    const wordContainer = document.getElementById("dynamic-word");
    wordContainer.innerHTML = words[currentWordIndex]; // Directly change the word
    currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(updateWord, 3000); // Change word every 3 seconds

function createLight() {
    if (lightsCount < 3) {
        const light = document.createElement("div");
        light.className = "light";
        light.style.width = `${Math.random() * 200 + 100}px`;
        light.style.height = light.style.width;
        light.style.top = `${Math.random() * window.innerHeight}px`;
        light.style.left = `${Math.random() * window.innerWidth}px`;
        document.getElementById("light-container").appendChild(light);
        lightsCount++;

        setTimeout(() => {
            light.remove();
            lightsCount--;
        }, 5000);
    }
}

setInterval(createLight, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const cursorLight = document.createElement("div");
    cursorLight.className = "cursor-light";
    document.body.appendChild(cursorLight);

    document.addEventListener("mousemove", function(e) {
        cursorLight.style.left = `${e.pageX - 50}px`; // Center the light on the cursor
        cursorLight.style.top = `${e.pageY - 50}px`;
    });
});