const rows = document.querySelectorAll(".row"); 
let currentRow = 0;
let currentTile = 0;

const database = ["Abuse", "Adult", "Agent", "Anger", "Apple", "Award", "Basis", "Beach", "Birth", "Block", "Blood", "Board", "Brain", "Bread", "Break", "Brown", "Buyer", "Cause", "Chain", "Chair", "Chest", "Chief", "Child", "China", "Claim", "Class", "Clock", "Coach", "Coast", "Court", "Cover", "Cream", "Crime", "Cross", "Crowd", "Crown", "Cycle", "Dance", "Death", "Depth", "Doubt", "Draft", "Drama", "Dream", "Dress", "Drink", "Drive", "Earth", "Enemy", "Entry", "Error", "Event", "Faith", "Fault", "Field", "Fight", "Final", "Floor", "Focus", "Force", "Frame", "Frank", "Front", "Fruit", "Glass", "Grant", "Grass", "Green", "Group", "Guide", "Heart", "Henry", "Horse", "Hotel", "House", "Image", "Index", "Input", "Issue", "Japan", "Jones", "Judge", "Knife", "Laura", "Layer", "Level", "Lewis", "Light", "Limit", "Lunch", "Major", "March", "Match", "Metal", "Model", "Money", "Month", "Motor", "Mouth", "Music", "Night", "Noise", "North", "Novel", "Nurse", "Offer", "Order", "Other", "Owner", "Panel", "Paper", "Party", "Peace", "Peter", "Phase", "Phone", "Piece", "Pilot", "Pitch", "Place", "Plane", "Plant", "Plate", "Point", "Pound", "Power", "Press", "Price", "Pride", "Prize", "Proof", "Queen", "Radio", "Range", "Ratio", "Reply", "Right", "River", "Round", "Route", "Rugby", "Scale", "Scene", "Scope", "Score", "Sense", "Shape", "Share", "Sheep", "Sheet", "Shift", "Shirt", "Shock", "Sight", "Simon", "Skill", "Sleep", "Smile", "Smith", "Smoke", "Sound", "South", "Space", "Speed", "Spite", "Sport", "Squad", "Staff", "Stage", "Start", "State", "Steam", "Steel", "Stock", "Stone", "Store", "Study", "Stuff", "Style", "Sugar", "Table", "Taste", "Terry", "Theme", "Thing", "Title", "Total", "Touch", "Tower", "Track", "Trade", "Train", "Trend", "Trial", "Trust", "Truth", "Uncle", "Union", "Unity", "Value", "Video", "Visit", "Voice", "Waste", "Watch", "Water", "While", "White", "Whole", "Woman", "World", "Youth", "Alcon", "Aught", "Hella", "One’s", "Ought", "Thame", "There", "Thine", "Thine", "Where", "Which", "Whose", "Whoso", "Yours", "Yours", "Admit", "Adopt", "Agree", "Allow", "Alter", "Apply", "Argue", "Arise", "Avoid", "Begin", "Blame", "Break", "Bring", "Build", "Burst", "Carry", "Catch", "Cause", "Check", "Claim", "Clean", "Clear", "Climb", "Close", "Count", "Cover", "Cross", "Dance", "Doubt", "Drink", "Drive", "Enjoy", "Enter", "Exist", "Fight", "Focus", "Force", "Guess", "Imply", "Issue", "Judge", "Laugh", "Learn", "Leave", "Let’s", "Limit", "Marry", "Match", "Occur", "Offer", "Order", "Phone", "Place", "Point", "Press", "Prove", "Raise", "Reach", "Refer", "Relax", "Serve", "Shall", "Share", "Shift", "Shoot", "Sleep", "Solve", "Sound", "Speak", "Spend", "Split", "Stand", "Start", "State", "Stick", "Study", "Teach", "Thank", "Think", "Throw", "Touch", "Train", "Treat", "Trust", "Visit", "Voice", "Waste", "Watch", "Worry", "Would", "Write", "Above", "Acute", "Alive", "Alone", "Angry", "Aware", "Awful", "Basic", "Black", "Blind", "Brave", "Brief", "Broad", "Brown", "Cheap", "Chief", "Civil", "Clean", "Clear", "Close", "Crazy", "Daily", "Dirty", "Early", "Empty", "Equal", "Exact", "Extra", "Faint", "False", "Fifth", "Final", "First", "Fresh", "Front", "Funny", "Giant", "Grand", "Great", "Green", "Gross", "Happy", "Harsh", "Heavy", "Human", "Ideal", "Inner", "Joint", "Large", "Legal", "Level", "Light", "Local", "Loose", "Lucky", "Magic", "Major", "Minor", "Moral", "Naked", "Nasty", "Naval", "Other", "Outer", "Plain", "Prime", "Prior", "Proud", "Quick", "Quiet", "Rapid", "Ready", "Right", "Roman", "Rough", "Round", "Royal", "Rural", "Sharp", "Sheer", "Short", "Silly", "Sixth", "Small", "Smart", "Solid", "Sorry", "Spare", "Steep", "Still", "Super", "Sweet", "Thick", "Third", "Tight", "Total", "Tough", "Upper", "Upset", "Urban", "Usual", "Vague", "Valid", "Vital", "White", "Whole", "Wrong", "Young", "Afore", "After", "Bothe", "Other", "Since", "Slash", "Until", "Where", "While", "Aback", "Abaft", "Aboon", "About", "Above", "Accel", "Adown", "Afoot", "Afore", "Afoul", "After", "Again", "Agape", "Agogo", "Agone", "Ahead", "Ahull", "Alife", "Alike", "Aline", "Aloft", "Alone", "Along", "Aloof", "Aloud", "Amiss", "Amply", "Amuck", "Apace", "Apart", "Aptly", "Arear", "Aside", "Askew", "Awful", "Badly", "Bally", "Below", "Canny", "Cheap", "Clean", "Clear", "Coyly", "Daily", "Dimly", "Dirty", "Ditto", "Drily", "Dryly", "Dully", "Early", "Extra", "False", "Fatly", "Feyly", "First", "Fitly", "Forte", "Forth", "Fresh", "Fully", "Funny", "Gaily", "Gayly", "Godly", "Great", "Haply", "Heavy", "Hella", "Hence", "Hotly", "Icily", "Infra", "Intl.", "Jildi", "Jolly", "Laxly", "Lento", "Light", "Lowly", "Madly", "Maybe", "Never", "Newly", "Nobly", "Oddly", "Often", "Other", "Ought", "Party", "Piano", "Plain", "Plonk", "Plumb", "Prior", "Queer", "Quick", "Quite", "Ramen", "Rapid", "Redly", "Right", "Rough", "Round", "Sadly", "Secus", "Selly", "Sharp", "Sheer", "Shily", "Short", "Shyly", "Silly", "Since", "Sleek", "Slyly", "Small", "So-So", "Sound", "Spang", "Srsly", "Stark", "Still", "Stone", "Stour", "Super", "Tally", "Tanto", "There", "Thick", "Tight", "Today", "Tomoz", "Truly", "Twice", "Under", "Utter", "Verry", "Wanly", "Wetly", "Where", "Wrong", "Wryly", "Abaft", "Aboon", "About", "Above", "Adown", "Afore", "After", "Along", "Aloof", "Among", "Below", "Circa", "Cross", "Furth", "Minus", "Neath", "Round", "Since", "Spite", "Under", "Until", "Aargh", "Adieu", "Adios", "Alack", "Aloha", "Avast", "Bakaw", "Basta", "Begad", "Bless", "Blige", "Brava", "Bravo", "Bring", "Chook", "Damme", "Dildo", "Ditto", "Frick", "Fudge", "Golly", "Gratz", "Hallo", "Hasta", "Havoc", "Hella", "Hello", "Howay", "Howdy", "Hullo", "Huzza", "Jesus", "Kapow", "Loose", "Lordy", "Marry", "Mercy", "Night", "Plonk", "Psych", "Quite", "Salve", "Skoal", "Sniff", "Sooey", "There", "Thiam", "Thwap", "Tough", "Twirp", "Viola", "Vivat", "Wacko", "Wahey", "Whist", "Wilma", "Wirra", "Woops", "Wowie", "Yecch", "Yeeha", "Yeesh", "Yowch", "Zowie"];

const allWords = database;
let todaysWord;
let isGameOver;
let countWrongWords;

window.onload = (event) => {
    console.log('The page has fully loaded');
    todaysWord = getTodaysWord().toUpperCase(); // pridobimo danasnjo besedo
    console.log("Pravilna beseda: ", todaysWord);
    isGameOver = false;
    countWrongWords = 0;
};


// Poslušamo tipkovnico
document.addEventListener("keydown", (e) => {
    if (isGameOver)
        return;

    const key = e.key;

    // Dovoljene so samo črke A–Z
    if (/^[a-zA-ZčšžČŠŽ]$/.test(key) && currentTile < 5 && !isGameOver) {
        const tile = rows[currentRow].children[currentTile];
        tile.textContent = key.toUpperCase();
        currentTile++;
    }

    // Brisanje črk
    if (key === "Backspace" && currentTile > 0) {
        currentTile--;
        const tile = rows[currentRow].children[currentTile];
        tile.textContent = "";
    }

    // ENTER -> preverimo, ali je vrstica polna
    if (key === "Enter" && !isGameOver) {
        if (currentTile === 5) {
            let word = "";

            // Sestavimo besedo iz črk
            for (let i = 0; i < 5; i++) {
                word += rows[currentRow].children[i].textContent;
            }

            console.log("Vnesena beseda:", word);

            // tukaj se bo preverilo besedo z todaysWord
            checkWord(word);

            // pojdi na naslednjo vrstico (če obstaja)
            if (currentRow < 5) {
                currentRow++;
                currentTile = 0;
            }
        } else {
            alert("Vrstica mora biti popolnoma izpolnjena!");
        }
    }

    if ((countWrongWords == 6) || isGameOver) {
        isGameOver = true;
        document.getElementById("message").textContent = "Konec igre!";
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Igraj še enkrat");
        var c = x.classList.add("button");
        x.appendChild(t);
        document.body.appendChild(x);
        x.addEventListener("click", function() {
            window.location.reload();
        });
    }

});


function getTodaysWord() {
    let word = allWords[Math.floor(Math.random()*allWords.length)];
    return word;
}

function checkWord(word) {

    let isWordCorrect = true;

    for (let i=0; i<5; i++){
        const tile = rows[currentRow].children[i];  // pridobimo trenutni tile
        // console.log(i, " ++ word[", word[i], "], todaysWord[", todaysWord[i], "]");

        if(word[i] == todaysWord[i]) {
            // obarvaj v ZELENO
            tile.style.backgroundColor = 'green';
            tile.style.color = 'white';
            console.log(word[i], " ZELENO")
        } else {
            console.log("Beseda ni pravilna!")
            if (todaysWord.includes(word[i])) {
                // obarvaj RUMENO
                tile.style.backgroundColor = 'orange';
                tile.style.color = 'black';
                console.log(word[i], " RUMENO")
            }
            //tile.style.backgroundColor = 'gray';
            //tile.style.color = 'white';
            isWordCorrect = false;
        }
    }

    if (isWordCorrect) {
        isGameOver = true;
        console.log("Čestitke, zmagal si!");
    } else {
        countWrongWords++;
    }

}
