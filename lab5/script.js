const form = document.forms.data;
const formFullName = form.full_name;
const formPhone = form.phone;
const formID_card = form.ID_card;
const formFaculty = form.faculty;
const formBirthday = form.birthday;
let btn = document.querySelector('.btn');
let spans = document.querySelectorAll('.form span');

function right(name) {
	document.getElementsByName(name)[0].style.borderColor = 'green';
}

function wrong(name) {
	document.getElementsByName(name)[0].style.borderColor = 'red';
}

function checkWrong(name) {
	if (document.getElementsByName(name)[0].style.borderColor === 'red') return true;
	else return false;
}

function alertData() {
	if (checkWrong('full_name') || formFullName.value === "") {
		wrong('full_name');
		return false;
	} 
	else if (checkWrong('phone') || formPhone.value === "") {
		wrong('phone');
		return false;
	} 
	else if (checkWrong('ID_card') || formID_card.value === "") {
		wrong('ID_card');
		return false;
	} 
	else if (checkWrong('faculty') || formFaculty.value === "") {
		wrong('faculty');
		return false;
	} 
	else if (formBirthday.value === "") {
		wrong('birthday');
		return false;
	} 
	else {
		spans.forEach(el => el.innerText = el.innerText.substr(0, el.innerText.indexOf(":") + 1));
		spans[1].innerText += ` ${formFullName.value}`;
		spans[2].innerText += ` ${formPhone.value}`;
		spans[3].innerText += ` ${formID_card.value}`;
		spans[4].innerText += ` ${formFaculty.value}`;
		spans[5].innerText += ` ${formBirthday.value}`;
		spans.forEach(el => el.style.display = 'block');
	}
}


spans.forEach(el => el.style.display = 'none');

formFullName.addEventListener('input', () => {
	if (formFullName.value.length < 7 || !/^[A-ЯІЇЄ'][А-ЯІЇЄа-яіїє']+ [A-ЯІЇЄ]\.[A-ЯІЇЄ]\.$/.test(formFullName.value)) {
		wrong('full_name');
	} 
	else {
		right('full_name');
	}
});

formPhone.addEventListener('input', () => {
	if (!/[(]\d{3}[)][-]\d{3}[-]\d{2}[-]\d{2}/.test(formPhone.value)) {
		wrong('phone');
	} 
	else {
		right('phone');
	}
});

formID_card.addEventListener('input', () => {
	if (formID_card.value.length != 10 || !/[А-ЯІЇ'][А-ЯІЇ']\s[№]\d{6}/.test(formID_card.value) || /[ЁЪЭЬЫ]/.test(formID_card.value)) {
		wrong('ID_card');
	} 
	else {
		right('ID_card');
	}
});

formFaculty.addEventListener('input', () => {
	if (formFaculty.value.length < 2 || !/^[A-ЯІЇЄ]+$/.test(formFaculty.value)) {
		wrong('faculty');
	} 
	else {
		right('faculty');
	}
});

formBirthday.addEventListener('click', () => {
	formBirthday.addEventListener('mouseout', () =>{
		if (formBirthday.value === "") {
			wrong('birthday');
		} 
		else {
			right('birthday');
		}
	});
});



btn.addEventListener('click', (event) => {
	event.preventDefault();
	return alertData(this.form);
});

// TASK 2

let inputColor = document.querySelector('.color');
let tableTds = document.querySelectorAll('table td');
let tdVariant = tableTds[7];

function getRandomColor() {
    let vars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += vars[Math.floor(Math.random() * 16)];
    }
    return color;
};

tdVariant.addEventListener('mouseover', (event) => {
	event.target.style.backgroundColor = `${getRandomColor()}`;
});


tdVariant.addEventListener('click', (event) => {
	event.target.style.backgroundColor = `${inputColor.value}`;
	if(inputColor.value === '#000000'){
		event.target.style.color = '#ffffff';
	}
	else {
		event.target.style.color = '#000000';
	}
});

tdVariant.addEventListener('dblclick', () => {
	for (let i = 1; i <= tableTds.length; i++) {
		if (i%2 != 0){
			tableTds[i].style.backgroundColor = `${inputColor.value}`;
			if(inputColor.value === '#000000'){
				tableTds[i].style.color = '#ffffff';
			}
			else {
				tableTds[i].style.color = '#000000';
			}
		}
	}
});
