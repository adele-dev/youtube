/*ÉTAPES EN POO
1 - CRÉER LA CLASSE
2 - INSTANCIER LES OBJETS DEPUIS LA CLASSE (avec les NEW)
3 - FAIRE UN TABLEAU
4 - ENVOYER LES OBJETS INSTANCIÉS DANS LE TABLEAU
5 - BOUCLER SUR LE TABLEAU (la boucle sert à injecter les objets du tableau dans le HTML)
*/
const row = document.querySelector(".row");
const videosList =[];

class Video {
    constructor(src, title, author, nbViews){
        this.src = src;
        this.title = title;
        this.author = author;
        this.nbViews = nbViews;
        videosList.push(this);
    }

};
const video10 = new Video("img/img10.png", "Les Bobos", "PalmaShow","7,1 M de vues");
const video1 = new Video("img/img1.png", "Apprendre JavaScript", "JavaScript Lab","1,3 M de vues");
const video2 = new Video("img/img2.png", "Fous rires cultes", "INA","7,1 M de vues");
const video3 = new Video("img/img3.png", "Les vendeurs Ikéa", "PalmaShow","17 M de vues");
const video4 = new Video("img/img4.png", "Versez l'oeuf dans du lait", "Lezzet","7,1 M de vues");
const video5 = new Video("img/img5.png", "CSS Menu isometric", "Online tutorials","7,1 M de vues");
const video6 = new Video("img/img6.png", "Paranormal", "Arte","7,1 M de vues");
const video7 = new Video("img/img7.png", "La discipline personnelle", "Livres utiles","3,2 M de vues");
const video8 = new Video("img/img8.png", "Le rendez-vous de Paul", "Jérémy Ferrari","4,1 M de vues");
const video9 = new Video("img/img9.png", "Le Flambeau", "Canal +", "9,2 M de vues");

//-----------------------------------------------------------------------------------------------------------------------//
//On passe tout l'objet video en paramètre au lieu de (src, title, author, nbViews) qu'on récupérera avec video.src, video.title, video.author, video.nbViews)
function createNewVideo(video){
    const col = createColumn();
    const card = createCard(col);
    createImgCard(video.src, card);    
    const cardBody = createCardBody(card);  
    const cardText = createCardText(cardBody);
    createCardTitle(video.title, cardText);
    createCardParagraph(video.author, video.nbViews, cardText);
}
for(let i = 0; i< videosList.length; i++){
    createNewVideo(videosList[i]);    
}

//-----------------------------------------------------------------------------------------------------------------------//
function createColumn(){
    const col = document.createElement("div");
    col.classList.add("col");
    row.appendChild(col); 
    return col;
}

function createCard(element){
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("shadow-sm");
    element.appendChild(card); 
    return card;    
}

function createImgCard(source, element){
    const imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.src = source;
    imgCard.style.width="100%";
    imgCard.style.height= "205px";
    element.appendChild(imgCard);
    // pas besoin de return
}

function createCardBody(element){
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    element.appendChild(cardBody); 
    return cardBody;
}

function createCardText(element){
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    element.appendChild(cardText);
    return cardText;
}

function createCardTitle(titleH5, element){
    const cardTitle = document.createElement("h5");
    cardTitle.innerHTML = titleH5;
    element.appendChild(cardTitle);
}

function createCardParagraph(authorVideo, nbViewsVideo, element){
    const cardParagraph = document.createElement("p");
    cardParagraph.innerHTML = authorVideo + "<br>" + nbViewsVideo;
    element.appendChild(cardParagraph);
}
//----------- RECHERCHE -------------------------------

const inputSearch = document.querySelector("#search");
inputSearch.addEventListener("input", onInput);

function onInput(event){
    const searchValue = event.target.value;
    const videosFiltered = videosList.filter(video => video.title.includes(searchValue));
    //console.log(videosFiltered);

    row.innerHTML="";

    for(let i = 0; i< videosFiltered.length; i++){
        createNewVideo(videosFiltered[i]);    
    }
    
}

