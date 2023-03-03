function visualization_of_chords() {
    const song = {
        name: 'Скрябін - Мовчати',
        words: ['Давай виключим світло і', 'будем', 'мовчати', 'Про то, шо не можна', 'словами', 'сказати', 'Не можна писати,', 'неможливо', 'зіграти,', 'А тільки мовчати', 'тихенько', 'мовчати.'],
        chords: ['Am', 'G', 'Dm', 'F', 'Em', 'Am', 'Am', 'G', 'Dm', 'F', 'Em', 'Am']
    }
    const searchBody = document.querySelector(".col__article");
    const createDivChords = document.createElement("div");
    createDivChords.setAttribute("class", 'chords');
    searchBody.append(createDivChords);

    const searchChordsDiv = document.querySelector(".chords");

    function createDiv(text, clas) {
        const createDiv = document.createElement("div");
        createDiv.setAttribute("class", clas);
        createDiv.innerHTML = text;
        searchChordsDiv.append(createDiv);
    }
    createDiv(song.name, 'nameSong');

    for (let j = 0; j < song.words.length; j++) {
        let p = "<b>" + song.chords[j] + "</b> <br>" + song.words[j];
        createDiv(p, 'divWordsChords');
    }
}


///////////////////////////////// optional part ///////////////////////////////////////////
function cssAndDesc() {
    const style = `
    .chords {
        width: 300px;
        height: 200px;
        border: 1px dotted;
        padding: 10px;
    }

    .nameSong {
        text-decoration: underline;
    }

    .divWordsChords {
        display: inline-block;
        margin: 5px 5px 0px 0px;
    }`;

    const description = 'Script for displaying chords on the lyrics. <a href="https://codepen.io/korobka_dv/pen/ZEjVrLr" target=_blanc>https://codepen.io/korobka_dv/pen/ZEjVrLr</a>';

    addCssAndDescription(style, description);
}
cssAndDesc();
visualization_of_chords();



