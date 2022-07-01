const row = document.querySelector(".row");

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
        nbViews:"1,3 M de vues",
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

function createNewVideo(src, title, author, nbViews){
    const col = document.createElement("div");
    col.classList.add("col");
    row.appendChild(col); 

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("shadow-sm");
    col.appendChild(card); 

    const imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.src = src;
    imgCard.style.width="100%";
    imgCard.style.height= "205px";
    card.appendChild(imgCard);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody); 

    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    cardBody.appendChild(cardText); 

    const cardTitle = document.createElement("h5");
    cardTitle.innerHTML = title;
    cardText.appendChild(cardTitle);

    const cardParagraph = document.createElement("p");
    cardParagraph.innerHTML = author + "<br>" + nbViews;
    cardText.appendChild(cardParagraph);
}

for(let i = 0; i< videos.length; i++){
    createNewVideo(videos[i].src, videos[i].title, videos[i].author, videos[i].nbViews);
}

//-----------------------------------------------------------------------------------------------------------------------//

//ÉTAPES EN POO
/*

1 - CRÉER LA CLASSE
2 - INSTANCIER LES OBJETS DEPUIS LA CLASSE (avec les NEW)
3 - FAIRE UN TABLEAU
4 - ENVOYER LES OBJETS INSTANCIÉS DANS LE TABLEAU
5 - BOUCLER SUR LE TABLEAU (la boucler sert à injecter les objets du tableau dans le HTML)

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