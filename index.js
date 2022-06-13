const videos = [
    {
        src:"img/img10.png",
        title:"Les Bobos",
        author:"PalmaShow",
        nbViews:"7,1 M de vues",
    },
    {
        src:"img/img1.png",
        title:"Apprendre JavaScript",
        author:"Javascript Lab",
        nbViews:"1,4 M de vues",
    },
    {
        src:"img/img2.png",
        title:"Fous rires cultes",
        author:"INA",
        nbViews:"2,1 M de vues",
    },
    {
        src:"img/img3.png",
        title:"Les vendeurs Ikéa",
        author:"Palmashow",
        nbViews:"17 M de vues",
    },
    {
        src:"img/img4.png",
        title:"Versez l'oeuf dans du lait",
        author:"Lezzet",
        nbViews:"24 M de vues",
    },
    {
        src:"img/img5.png",
        title:"CSS menu Isometric Hover",
        author:"Online Tutorials",
        nbViews:"1,1 M de vues",
    },
    {
        src:"img/img6.png",
        title:"Paranormal",
        author:"Arte",
        nbViews:"3,4 M de vues",
    },
    {
        src:"img/img7.png",
        title:"La discipline personnelle",
        author:"Livres utiles",
        nbViews:"2,3 M de vues",
    },
    {
        src:"img/img8.png",
        title:"Le rendez-vous de Paul",
        author:"Jérémy Ferrari",
        nbViews:"3,7 M de vues",
    },
    {
        src:"img/img9.png",
        title:"Le Flambeau",
        author:"Canal +",
        nbViews:"6,9 M de vues",
    },
];
//-----------------------------------------------------------------------------------------------------------------------//

const row = document.querySelector(".row");

function createNewVideo(src, title, author, nbViews){ // On peut aussi envoyer en paramètre un objet
    const col = createColumn();
    const card = createCard(col);
    createImgCard(src, card);    
    const cardBody = createCardBody(card);  
    const cardText = createCardText(cardBody);
    createCardTitle(title, cardText);
    createCardParagraph(author, nbViews, cardText);
}

for(let i = 0; i< videos.length; i++){
    createNewVideo(videos[i].src, videos[i].title, videos[i].author, videos[i].nbViews);
    
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
    //return imgCard;
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
    //return cardTitle;
}

function createCardParagraph(authorVideo, nbViewsVideo, element){
    const cardParagraph = document.createElement("p");
    cardParagraph.innerHTML = authorVideo + "<br>" + nbViewsVideo;
    element.appendChild(cardParagraph);
}
//-----------------------------------------------------------------------------------------------------------------------//
/*ÉTAPES EN POO
1 - CRÉER LA CLASSE
2 - INSTANCIER LES OBJETS DEPUIS LA CLASSE (avec les NEW)
3 - FAIRE UN TABLEAU
4 - ENVOYER LES OBJETS INSTANCIÉS DANS LE TABLEAU
5 - BOUCLER SUR LE TABLEAU (la boucle sert à injecter les objets du tableau dans le HTML)
*/

/* EXPLICATIONS RETURN
let result = 2;
function sum1(a) { // ici on est dans le cas d'un side effect car la fonction modifie une variable extérieure
    result = result + a;
    // pas de return = return undefined;
}
function sum2(a) {
    return result + a;
}

result = sum2(25); // 27

function createDomElement(element){
    return document.createElement(element);
}
row.appendChild(createDomElement("div"));
*/