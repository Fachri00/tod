const truths = [
    "kapan terakhir kali kamu menangis dan kenapa?",
    "Pernahkah kamu berinteraksi dengan makhluk yang sudah tidak bernyawa?",
    "pertanyaan ketiga",
    
];

const dares = [
    "Akhiri kalimatmu dengan kata Dor selama permainan berlangsung",
    "pertanyaan 2",
    "pertanyaan 3",
  
];

let currentTruthIndex = -1;
let currentDareIndex = -1;

function getNextTruth() {
    currentTruthIndex = (currentTruthIndex + 1) % truths.length;
    return truths[currentTruthIndex];
}

function getNextDare() {
    currentDareIndex = (currentDareIndex + 1) % dares.length;
    return dares[currentDareIndex];
}

function showTruth() {
    const questionContainer = document.getElementById("question");
    questionContainer.textContent = `Truth: ${getNextTruth()}`;
}

function showDare() {
    const questionContainer = document.getElementById("question");
    questionContainer.textContent = `Dare: ${getNextDare()}`;
}

3