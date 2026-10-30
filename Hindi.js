
 

/* ---------- SPEAK FUNCTION ---------- */

function speakHindi(text) {
    if (!text || !("speechSynthesis" in window)) return;

    speechSynthesis.cancel();

    const voices = speechSynthesis.getVoices();

    const selectedVoice = voices.find(v =>
        v.name.includes("स्वरा") && v.lang === "hi-IN"
    );

    console.log("Selected Hindi voice:", selectedVoice?.name);

    const msg = new SpeechSynthesisUtterance(text);

    if (selectedVoice) {
        msg.voice = selectedVoice;
    }

    msg.lang = "hi-IN";
    msg.rate = 1;
    msg.pitch = 1;
    msg.volume = 1;

    speechSynthesis.speak(msg);
}
/* ---------- HINDI VOWELS ---------- */
 const HINDI_VOWELS = [
  { l: "अ", w: "अनार", img: "pomegranate.png" },
  { l: "आ", w: "आम", img: "mango.png" },
  { l: "इ", w: "इमली", img: "tamarind.png" },
  { l: "ई", w: "ईख", img: "sugarcane.png" },
  { l: "उ", w: "उल्लू", img: "owl.png" },
  { l: "ऊ", w: "ऊँट", img: "camel1.png" },
  { l: "ऋ", w: "ऋषि", img: "sage.png" },
  { l: "ए", w: "एक", img: "one.png" },
  { l: "ऐ", w: "ऐनक", img: "glasses.png" },
  { l: "ओ", w: "ओखली", img: "mortar.png" },
  { l: "औ", w: "औरत", img: "woman.png" },
  { l: "अं", w: "अंगूर", img: "grapes.png" },
  { l: "अः", w: "दुःख", img: "sad.png" }
];

/* ---------- HINDI CONSONANTS ---------- */
const HINDI_CONSONANTS = [
  { l: "क", w: "कबूतर", img: "pigeon.png" },
  { l: "ख", w: "खरगोश", img: "rabbit.png" },
  { l: "ग", w: "गाय", img: "cow.png" },
  { l: "घ", w: "घड़ी", img: "clock.png" },
  { l: "ङ", w: "कम प्रयोग", img: "letter4.png" },
  { l: "च", w: "चम्मच", img: "spoon.png" },
  { l: "छ", w: "छाता", img: "umbrella.png" },
  { l: "ज", w: "जहाज", img: "ship.png" },
  { l: "झ", w: "झंडा", img: "flag.png" },
  { l: "ञ", w: "कम प्रयोग", img: "letter5.png" },
  { l: "ट", w: "टमाटर", img: "tomato.png" },
  { l: "ठ", w: "ठेला", img: "trolley.png" },
  { l: "ड", w: "डमरू", img: "drum.png" },
  { l: "ढ", w: "ढोल", img: "band.png" },
  { l: "ण", w: "कम प्रयोग", img: "letter6.png" },
  { l: "त", w: "तितली", img: "butterfly.png" },
  { l: "थ", w: "थैला", img: "handbag.png" },
  { l: "द", w: "दरवाजा", img: "door.png" },
  { l: "ध", w: "धनुष", img: "arrow.png" },
   { l: "न", w: "नाव", img: "boat.png" },
  { l: "प", w: "पतंग", img: "kite.png" },
  { l: "फ", w: "फूल", img: "flower.png" },
  { l: "ब", w: "बतख", img: "duck.png" },
  { l: "भ", w: "भालू", img: "bear.png" },
  { l: "म", w: "मछली", img: "fish.png" },
  { l: "य", w: "योग", img: "meditation.png" },
  { l: "र", w: "रसगुल्ला", img: "sweet.png" },
  { l: "ल", w: "लड्डू", img: "laddu.png" },
  { l: "व", w: "विमान", img: "aeroplane.png" },
  { l: "श", w: "शेर", img: "lion.png" },
  { l: "ष", w: "षट्कोण", img: "rhombus.png" },
  { l: "स", w: "सेब", img: "apple.png" },
  { l: "ह", w: "हाथी", img: "elephant.png" },
  { l: "क्ष", w: "क्षीर", img: "milk.png" },
  { l: "त्र", w: "त्रिशूल", img: "trident.png" },
   { l: "ज्ञ", w: "ज्ञान", img: "book2.png" },
  
];

/* ---------- BARAKHADI (EXAMPLE) ---------- */
const BARAKHADI = [
{ l: "क", w: "कमल", img: "lotus.png" },
{ l: "का", w: "काला", img: "black.png" },
  { l: "कि", w: "किताब", img: "book.png" },
  { l: "की", w: "कील", img: "nail.png" },
  { l: "कु", w: "कुत्ता", img: "dog.png" },
  { l: "कू", w: "कूड़ा", img: "trash.png" },
  { l: "के", w: "केला", img: "banana.png" },
  { l: "कै", w: "कैंची", img: "scissors.png" },
  { l: "को", w: "कोयल", img: "bird.png" },
  { l: "कौ", w: "कौआ", img: "crow.png" }
];
/* ---------- PLAY ALL BUTTON FUNCTIONS ---------- */

function playVowels() {
    const text = HINDI_VOWELS.map(item => item.w).join("। ");
    speakHindi(text);
}

function playConsonants() {
    const text = HINDI_CONSONANTS.map(item => item.w).join("। ");
    speakHindi(text);
}

function playBarakhadi() {
    const text = BARAKHADI.map(item => item.w).join("। ");
    speakHindi(text);
}

  
/* ---------- CREATE CARDS ---------- */
function loadCards(list, elementId) {
  const container = document.getElementById(elementId);

  if (!container) {
    console.error("Container not found:", elementId);
    return;
  }

  container.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const letter = document.createElement("div");
    letter.className = "letter";
    letter.innerHTML = `<b>${item.l}</b>`;

    const img = document.createElement("img");
    img.src = `./images/${item.img}`;
    img.alt = item.w;

    img.onerror = () => {
      console.error("Image not found:", img.src);
    };

    const word = document.createElement("div");
    word.className = "word";
    word.innerHTML = `<b>${item.w}</b>`;

    card.appendChild(letter);
    card.appendChild(img);
    card.appendChild(word);

    card.onclick = () => speakHindi(item.w);

    container.appendChild(card);
  });
}

/* ---------- LOAD ALL HINDI CARDS ---------- */
document.addEventListener("DOMContentLoaded", () => {
  loadCards(HINDI_VOWELS, "vowels");
  loadCards(HINDI_CONSONANTS, "consonants");
  loadCards(BARAKHADI, "barakhadi");
});
