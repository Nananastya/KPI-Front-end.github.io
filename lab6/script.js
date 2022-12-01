const cardContainer = document.getElementsByClassName("cards")[0];
const btnAdd = document.querySelector(".add");
const btnDelete = document.querySelector(".delete");
const json = "https://randomuser.me/api";

function addCard() {
	fetch(json)
		.then((response) => {
			return response.json();
		})
		.then((response) => {
			const data = response.results[0];
			const card = new Card(
				data.picture,
				data.name,
				data.location.country,
				data.location.postcode,
				data.phone
			);
			card.createCard();
		});
}

function deleteCards() {
	Array.from(cardContainer.children).forEach(child => cardContainer.removeChild(child));
}

class Card {
	constructor(picture, name, country, postcode, phone) {
		this.picture = picture;
		this.name = name;
		this.country = country;
		this.postcode = postcode;
		this.phone = phone;
	}
    
	createCard() {
		let cardInfo = document.createElement("div");
		cardInfo.classList.add("card");
		let img = document.createElement("img");
		img.src = this.picture.medium;
		cardInfo.appendChild(img);
		let info = document.createElement("div");
		info.innerHTML = `
		<span>${this.name.title} ${this.name.first} ${this.name.last}</span>
		<span>Country:  ${this.country}</span>
		<span>Postcode: ${this.postcode}</span>
		<span>Phone:  ${this.phone}</span>`;
		cardInfo.appendChild(info);
		cardContainer.appendChild(cardInfo);
	}
}

btnAdd.addEventListener("click", () => {
	addCard();
});
btnDelete.addEventListener("click", () => {
	deleteCards();
});
