const truths = [
    "Apa dosa terbesar mu?",
    "Pernahkah kamu berinteraksi dengan makhluk yang sudah tidak bernyawa?",
    "pertanyaan ketiga",
];

const nextHTMLPageTruth = "Index.html"; 

let currentTruthIndex = -1;

function getNextTruth() {
    currentTruthIndex = (currentTruthIndex + 1) % truths.length;
    return truths[currentTruthIndex];
}

function showTruthAndMoveOn() {
    const questionContainer = document.getElementById("question");
    questionContainer.textContent = `Truth: ${getNextTruth()}`;
    
    setTimeout(() => {
        window.location.href = nextHTMLPageTruth;
    }, 5000);
}
