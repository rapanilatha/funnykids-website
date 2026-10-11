 /* ---------- SPEAK FUNCTION ---------- */
function speakHindi(text) {
  speechSynthesis.cancel(); // stop previous
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "hi-IN";
  msg.rate = 0.9;
  msg.pitch = 1;
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
   { l: "त्ज्ञ", w: "ज्ञान", img: "book2.png" },
  
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
  { l: "कै", w: "कैची", img: "scissors.png" },
  { l: "को", w: "कोयल", img: "bird.png" },
  { l: "कौ", w: "कौआ", img: "crow.png" }
];

/* ---------- CREATE CARDS ---------- */
function loadCards(list, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;
  container.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="letter"><b>${item.l}</b></div>
  <img src="../images/${item.img}" alt="">
      <div class="word"><b>${item.w}</b></div>
    `;

    card.onclick = () => speakHindi(item.w);
    container.appendChild(card);
  });
}

/* ---------- LOAD ON PAGE ---------- */
document.addEventListener("DOMContentLoaded", () => {
  loadCards(HINDI_VOWELS, "vowels");
  loadCards(HINDI_CONSONANTS, "consonants");
  loadCards(BARAKHADI, "barakhadi");
});

/* ---------- SPEAK ONE BY ONE ---------- */
function speakList(list) {
  let i = 0;
  speechSynthesis.cancel();

  function next() {
    if (i < list.length) {
      const msg = new SpeechSynthesisUtterance(list[i].w);
      msg.lang = "hi-IN";
      msg.rate = 0.9;
      msg.onend = next;
      speechSynthesis.speak(msg);
      i++;
    }
  }
  next();
}

function playVowels() {
  speakList(HINDI_VOWELS);
}

function playConsonants() {
  speakList(HINDI_CONSONANTS);
}

function playBarakhadi() {
  speakList(BARAKHADI);
}
