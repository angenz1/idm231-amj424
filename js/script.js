/* ---- Constants ----- */

const zodiac_signs = [
  {
    id: "tree-trunks",
    name: "Tree Trunks",
    sound: "tree_trunks.mp3",
    description:
      "Chatty and charming, Tree Trunks is a classic Gemini. Friendly and social, she can be surprisingly intense when provoked. Don't underestimate this sweet old lady!",
  },
  {
    id: "lady-rainicorn",
    name: "Lady Rainicorn",
    sound: "lady_rainicorn.mp3",
    description:
      "Lady Rainicorn's beauty and peaceful nature make her a beloved Libra. She values friendship and harmony above all else. Though from a dangerous species, her charm and grace win out.",
  },
  {
    id: "princess-bubblegum",
    name: "Princess Bubblegum",
    sound: "princess_bubblegum.mp3",
    description:
      "Princess Bubblegum embodies Capricorn ambition and loyalty. She rules the Candy Kingdom with compassion, hard work, and an uncompromising attitude. While sometimes seen as cold, she simply has a kingdom to run.",
  },
  {
    id: "peppermint-butler",
    name: "Peppermint Butler",
    sound: "peppermint_butler.mp3",
    description:
      "Mysterious and connected to the supernatural, Peppermint Butler shares the elusive nature of a Pisces. Beneath his cheerful exterior lies a complex and secretive personality. Don't be fooled by his friendly demeanor; there's more to him than meets the eye.",
  },
  {
    id: "ice-king",
    name: "Ice King",
    sound: "ice_king.mp3",
    description:
      "Ice King's hard exterior hides the sensitive soul of a Cancer. Misunderstood and lonely, he acts out in misguided attempts to find love. His moods and insecurity make him a social outcast.",
  },
  {
    id: "lemongrab",
    name: "Lemongrab",
    sound: "lemongrab.mp3",
    description:
      "Lemongrab is a possessive and vindictive Scorpio. A bitter creation of Princess Bubblegum, he's obsessed with power and control. His irrationality and unpredictability often lead to unfortunate consequences.",
  },
  {
    id: "flame-princess",
    name: "Flame Princess",
    sound: "flame_princess.mp3",
    description:
      "Bold, passionate, and prone to outbursts, Flame Princess is a classic Aries. Her fiery emotions make her unpredictable, but she has a good heart. Don't get in the way of this ambitious princess.",
  },
  {
    id: "lumpy-space-princess",
    name: "Lumpy Space Princess",
    sound: "lumpy_space_princess.mp3",
    description:
      "Lumpy Space Princess craves attention and drama like a true Leo. Arrogant and sassy, she thinks the world revolves around her. This bratty princess embodies the prideful side of the Lion.",
  },
  {
    id: "finn",
    name: "Finn",
    sound: "finn.mp3",
    description:
      "Finn's boundless optimism and love of adventure mark him as a Sagittarius. He bravely protects the Candy Kingdom with unmatched enthusiasm. Always ready for the next quest, Finn's heroic spirit never wavers.",
  },
  {
    id: "bmo",
    name: "BMO",
    sound: "bmo.mp3",
    description:
      "BMO's quirky personality and love of technology make him a true Aquarius. Eccentric and inventive, his mind is full of strange ideas. This lovable robot marches to the beat of his own drum.",
  },
  {
    id: "jake",
    name: "Jake",
    sound: "jake.mp3",
    description:
      "Jake loves the good life, enjoying food, relaxation, and adventure – classic Taurus traits. He's loyal and laid-back but can be stubborn and a little selfish. This magical dog loves the finer things.",
  },
  {
    id: "marceline",
    name: "Marceline",
    sound: "marceline.mp3",
    description:
      "Marceline's independence and self-reliance are the hallmarks of a Virgo. She craves control but can be self-destructive and withdrawn. This complex vampire queen can be critical and uptight, especially when things don't go her way.",
  },
];

/* ----- Zodiac Input ----- */

function getSign() {
  let astrological_sign;
  const getBirthdayDate = document.getElementById("date-selection");
  const getBirthdaySubmitButton = document.getElementById("find-out-now");
  getBirthdaySubmitButton.addEventListener("click", () => {
    const birthdayDate = new Date(getBirthdayDate.value);
    const month = birthdayDate.getUTCMonth() + 1;
    const day = birthdayDate.getUTCDate();
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      astrological_sign = "bmo";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      astrological_sign = "finn";
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      astrological_sign = "lemongrab";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      astrological_sign = "lady-rainicorn";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      astrological_sign = "marceline";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      astrological_sign = "lumpy-space-princess";
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      astrological_sign = "ice-king";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      astrological_sign = "tree-trunks";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      astrological_sign = "jake";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      astrological_sign = "flame-princess";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      astrological_sign = "peppermint-butler";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      astrological_sign = "princess-bubblegum";
    }
    if (astrological_sign) {
      getCharacterDescription(astrological_sign);
      playCharacterAudio(astrological_sign);
      getBirthdayDate.value = "";
    } else {
      console.log("missing sign");
    }
  });
}
getSign();

/* ----- Audio Sounds ----- */

function playCharacterAudio(characterId) {
  const character = getCharacter(characterId);
  const sound = character.sound;
  const audioElement = document.getElementById("audio-sound");
  audioElement.setAttribute("src", `sounds/${sound}`);
  audioElement.play();
}

/* ----- Character Descriptions ----- */

function getCharacterDescription(characterId) {
  const character = getCharacter(characterId);
  const zodiacInput = document.getElementById("zodiacInput");
  const description = character.description;
  const element = document.querySelector(".zodiac-input");
  element.style.display = "none";
  closeChar.style.display = "flex";
  zodiacInput.innerHTML = description;
}

function selectChar() {
  zodiac_signs.forEach((character) => {
    const id = character.id;
    const characterButton = document.getElementById(id);
    characterButton.addEventListener("click", (event) => {
      const characterId = event.target.id || event.target.parentElement.id;
      getCharacterDescription(characterId);
      playCharacterAudio(characterId);
    });
  });
}

function getCharacter(characterId) {
  const findCharacterInObject = zodiac_signs.filter((zodiac_signs) => {
    return zodiac_signs.id === characterId;
  });
  return findCharacterInObject[0];
}
selectChar();

closeHelp();
const closeChar = document.querySelector(".zodiac-description");
closeChar.style.display = "none";

function closeOverlay() {
  const closeOverlayButton = document.querySelector(".exit-description");
  closeOverlayButton.addEventListener("click", () => {
    document.querySelector(".zodiac-description").style.display = "none";
    document.querySelector(".zodiac-input").style.display = "block";
  });
}
closeOverlay();

/* ----- Help Button / Instructions ----- */

function closeHelp() {
  const instructions = document.querySelector(".instructions");
  const showButton = document.getElementById("help-button");
  const closeButton = document.querySelector(".exit-instructions");

  showButton.addEventListener("click", () => {
    instructions.showModal();
  });

  closeButton.addEventListener("click", () => {
    instructions.close();
  });
}

/* ----- Initialize on Load ----- */

function initializePage() {
  selectChar();
  closeHelp();
  getSign();
}
document.addEventListener("DOMContentLoaded", initializePage);
