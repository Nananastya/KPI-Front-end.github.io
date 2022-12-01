import React from "react";

export default function Image() {
	let link1 =
		"https://static4.depositphotos.com/1027798/376/i/600/depositphotos_3763579-stock-photo-lviv-lvov-ukraine.jpg";
	let link2 = "https://vsviti.com.ua/wp-content/uploads/2015/03/CityLvov13.jpg";
	let counter = 1;
	function CreateAddImg(link) {
		const photos = document.querySelector(".photos");
		const newImg = document.createElement("img");
		newImg.src = link;
		newImg.width = 400;
		newImg.height = parseInt(
			getComputedStyle(photos.querySelector("img")).height
		);
		newImg.marginLeft = 100;
		photos.appendChild(newImg);
	}
	function AddBtn() {
		console.log(counter);
		if (counter === 2) {
			CreateAddImg(link2);
			counter++;
		} else if (counter === 1) {
			CreateAddImg(link1);
			counter++;
		} else {
			alert("Це максимальна кількість доступних зображень!");
		}
	}
	function RemoveBtn() {
		const photos = document.querySelector(".photos");
		if (counter > 1) {
			counter--;
			photos.removeChild(photos.lastChild);
		} else {
			alert("Перше фото видалити не можна! Фото містить важливе посилання!");
		}
	}
	function ZoomInBtn() {
		let imgs = document.querySelectorAll(".photos img");
		for (let i = 0; i < imgs.length; i++) {
			if (imgs[i].width > 599) {
				alert("Це максимальне доступне збільшення!");
				break;
			}
			imgs[i].width += 100;
			imgs[i].height += 50;
		}
	}
	function ZoomOutBtn() {
		let imgs = document.querySelectorAll(".photos img");
		for (let i = 0; i < imgs.length; i++) {
			if (imgs[i].width < 400) {
				alert("Це максимальне доступне зменшення!");
				break;
			}
			imgs[i].width -= 100;
			imgs[i].height -= 50;
		}
	}

	return (
		<>
			<div className="buttons">
				<button className="btn" onClick={AddBtn}>
					Додати
				</button>
				<button className="btn" onClick={ZoomInBtn}>
					Збільшити
				</button>
				<button className="btn" onClick={ZoomOutBtn}>
					Зменшити
				</button>
				<button className="btn" onClick={RemoveBtn}>
					Видалити
				</button>
			</div>
		</>
	);
}
