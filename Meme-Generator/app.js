const memegen = document.querySelector('.meme-gen',  '.meme-btn');
const memeimg = document.querySelector('.meme-gen img ');
const memetitle = document.querySelector('.meme-gen',  '.meme-title');
const memeauthor = document.querySelector('.meme-gen',  '.meme-author');


const updateDetails = (url , title, author) => {
 memeimg.setAttribute("src", url);
 memetitle.innerHTML = title;
 memeauthor.innerHTML = 'Meme By : ${author}'; 
};


const GenMeme = ()=> {
fetch("https://meme-api.com/gimme/wholesomememes")
.then((response) => response.json())
.then((data) => {
 updateDetails(data.url, data.title, data.author);
});

};

genMemeBtn.addEvenetListener("click" , GenMeme);