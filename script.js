// ==========================================
// SISTER'S DAY GREETING CARD
// Part 1 - Elements + Pages
// ==========================================

// ---------- ELEMENTS ----------

const music = document.getElementById("bgMusic");

const landing = document.getElementById("landing");
const cardSection = document.getElementById("cardSection");

const cover = document.getElementById("cover");
const inside = document.getElementById("inside");

const photo = document.getElementById("photo");
const title = document.getElementById("title");
const message = document.getElementById("message");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const pageNumber = document.getElementById("pageNumber");

// ---------- VARIABLES ----------

let current = 0;
let musicStarted = false;
let celebrated = false;

// ---------- PAGES ----------

const pages = [

    {
        title: "Dear Riya ❤️",

        photo: "assets/photos/1.jpeg",

        text: `Every Sister's Day, I've always loved giving you a handmade paper greeting card—something you could hold, keep, and smile at whenever you found it again.

But this year is a little different...`
    },

    {
        title: "A Little Surprise 💌",

        photo: "assets/photos/2.jpeg",

        text: `Instead of paper and colors, I wanted to create something in a new way.

So I made this online greeting card, not because it is more modern, but because it carries the same love that every handmade card always carried.`
    },

    {
        title: "From My Heart ❤️",

        photo: "assets/photos/3.jpeg",

        text: `Every word,

every colour,

every little detail,

is simply my way of telling you how much you mean to me.`
    },

    {
        title: "Love Never Changes ❤️",

        photo: "assets/photos/4.jpeg",

        text: `A card is never about the paper it's written on.

Whether it's made with pens and glitter or designed on a screen,

the love behind it always remains exactly the same.`
    },

    {
        title: "Thank You ❤️",

        photo: "assets/photos/5.jpeg",

        text: `Thank you for being the wonderful little sister who fills our home with laughter,

mischief,

and countless beautiful memories.`
    },

    {
        title: "Growing Up 🌸",

        photo: "assets/photos/6.jpeg",

        text: `Watching you grow has been one of my greatest joys.

I hope you always stay kind,

brave,

curious,

and true to yourself.`
    },

    {
        title: "Dream Big ✨",

        photo: "assets/photos/7.jpeg",

        text: `May your dreams take you to amazing places.

May your smile never fade.

May happiness always stay with you.`
    },

    {
        title: "Always Remember ❤️",

        photo: "assets/photos/8.jpeg",

        text: `No matter where life takes us,

you'll always have your brother standing beside you.

Always.`
    },

    {
        title: "Happy Sister's Day 💖",

        photo: "assets/photos/9.jpeg",

        text: `To my little sister,

sweet Riya dear,

You fill our home with joy and cheer.

Your giggles sparkle,

your smile's so bright,

You make each ordinary day feel light.`
    },

    {
        title: "🌈",

        photo: "assets/photos/10.jpeg",

        text: `Like a rainbow dancing after rain,

You chase away each little pain.

With dreams so big,

and heart so kind,

You're one of the sweetest souls I'll ever find.`
    },

    {
        title: "Forever Together ❤️",

        photo: "assets/photos/11.jpeg",

        text: `We'll laugh together,

tease and play,

making memories every day.

Through every season,

I'll stand beside you all the way.`
    },

    {
        title: "❤️ Forever My Little Sister ❤️",

        photo: "assets/photos/12.jpeg",

        text: `Happy Sister's Day,

my dearest Riya.

You'll always be my little sister.

With all my love,

❤️ Romi ❤️`
    }

];

// ==========================================
// PART 2 - Music & Opening Animation
// ==========================================

// ---------- PLAY MUSIC ----------

function playMusic() {

    if (musicStarted) return;

    music.play().catch(() => { });

    musicStarted = true;

}

// ---------- OPEN ENVELOPE ----------

function openEnvelope() {

    playMusic();

    landing.style.opacity = "0";

    landing.style.pointerEvents = "none";

    setTimeout(() => {

        landing.style.display = "none";

        cardSection.style.display = "flex";

    }, 700);

}

// ---------- BUTTON EVENTS ----------

document.getElementById("openEnvelope").addEventListener("click", openEnvelope);

document.getElementById("envelope").addEventListener("click", openEnvelope);

// ---------- OPEN CARD ----------

cover.addEventListener("click", () => {

    cover.style.transition = ".6s";

    cover.style.transform = "scale(.96)";

    cover.style.opacity = "0";

    setTimeout(() => {

        cover.style.display = "none";

        inside.style.display = "block";

        loadPage();

    }, 600);

});

// ---------- START MUSIC ON FIRST TOUCH ----------

document.body.addEventListener("click", playMusic, { once: true });

// ---------- LOADER ----------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }, 1500);

    }

});

// ==========================================
// PART 3 - Pages
// ==========================================

function loadPage() {

    // Fade Out
    photo.style.opacity = 0;
    title.style.opacity = 0;
    message.style.opacity = 0;

    setTimeout(() => {

        // Change Content
        title.innerHTML = pages[current].title;

        photo.src = pages[current].photo;

        message.innerText = pages[current].text;

        // Page Number
        if (pageNumber) {

            pageNumber.innerHTML =
                (current + 1) + " / " + pages.length;

        }

        // Previous Button
        if (current === 0) {

            prev.style.opacity = "0";

            prev.style.pointerEvents = "none";

        }

        else {

            prev.style.opacity = "1";

            prev.style.pointerEvents = "auto";

        }

        // Next Button
        if (current === pages.length - 1) {

            next.innerHTML = "❤️ Read Again";

        }

        else {

            next.innerHTML = "Next ▶";

        }

        // Fade In
        photo.style.opacity = 1;

        title.style.opacity = 1;

        message.style.opacity = 1;

        // Celebrate once
        if (current === pages.length - 1 && !celebrated) {

            celebrate();

            celebrated = true;

        }

    }, 250);

}

// ==========================================
// NEXT
// ==========================================

next.addEventListener("click", () => {

    if (current === pages.length - 1) {

        celebrated = false;

        current = 0;

        loadPage();

        return;

    }

    current++;

    loadPage();

});

// ==========================================
// PREVIOUS
// ==========================================

prev.addEventListener("click", () => {

    if (current > 0) {

        current--;

        loadPage();

    }

});

// ==========================================
// PART 4 - Celebration Effects
// ==========================================

function celebrate() {

    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            createHeart();
            createPetal();
            createConfetti();

        }, i * 120);

    }

}

function randomX() {

    return Math.random() * window.innerWidth;

}

// ---------- HEART ----------

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left = randomX() + "px";

    heart.style.animationDuration = (4 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

// ---------- PETAL ----------

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = randomX() + "px";

    petal.style.animationDuration = (5 + Math.random() * 2) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 7000);

}

// ---------- CONFETTI ----------

function createConfetti() {

    const confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left = randomX() + "px";

    confetti.style.background =
        `hsl(${Math.random() * 360},90%,60%)`;

    confetti.style.animationDuration =
        (4 + Math.random() * 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {

        confetti.remove();

    }, 7000);

}