let firstPar = document.getElementById('first-paragraph');
let secondPar = document.querySelector('#second-paragraph');
let buttons = document.querySelectorAll('.btn');
let photos = document.querySelector('.photos');
let imgs = photos.getElementsByTagName('img');
let link1 = 'https://static4.depositphotos.com/1027798/376/i/600/depositphotos_3763579-stock-photo-lviv-lvov-ukraine.jpg';
let link2 = 'https://vsviti.com.ua/wp-content/uploads/2015/03/CityLvov13.jpg';

function getRandomColor() {
    let vars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += vars[Math.floor(Math.random() * 16)];
    }
    return color;
};

function changeColor(el){
    el.style.color = getRandomColor();
    el.style.backgroundColor = getRandomColor();
}

function zoomIn(el){
    el.width += 100;
    el.height += 50;
}

function zoomOut(el){
    el.width -= 100;
    el.height -= 50;
}

function addImg(el, link){
    let newImg = document.createElement('img');
    newImg.src = link;
    newImg.width = 400;
    newImg.height = 280;
    newImg.marginLeft = 100;
    el.appendChild(newImg);
}

firstPar.addEventListener("click", () => changeColor(firstPar));
secondPar.addEventListener("click", () => changeColor(secondPar));
let counter = 1;
buttons[0].addEventListener("click", () => {
    if (counter === 2){
        addImg(photos, link2);
        counter++;
    }
    else if (counter === 1){
        addImg(photos, link1);
        counter++;
    }
    else{
        alert("Це максимальна кількість доступних зображень!");
    }
});
buttons[1].addEventListener("click", () => {
    for (let i = 0; i < imgs.length; i++){
        if (imgs[i].width > 599){
            alert("Це максимальне доступне збільшення!");
            break;
        }
        zoomIn(imgs[i]);
    }
});
buttons[2].addEventListener("click", () => {
    for (let i = 0; i < imgs.length; i++){
        if (imgs[i].width < 400){
            alert("Це максимальне доступне зменшення!");
            break;
        }
        zoomOut(imgs[i]);
    }
});
buttons[3].addEventListener("click", () => {
    if (counter > 1){
        counter--;
        photos.removeChild(photos.lastChild);
    }
    else{
        alert("Перше фото видалити не можна! Фото містить важливе посилання!");
    }
});