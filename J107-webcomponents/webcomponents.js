const animals = [
	{ "type": "Cat", "name": "Fluffy", "class": "Mammalia",
		"description": "a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws."
	},
	{ "type": "Dog", "name": "Fido", "class": "Mammalia",
		"description": "a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, nonretractable claws, and a barking, howling, or whining voice"
	},
	{ "type": "Horse", "name": "Mr. Ed", "class": "Mammalia",
		"description": "a large plant-eating domesticated mammal with solid hoofs and a flowing mane and tail, used for riding, racing, and to carry and pull loads."
	},
	{ "type": "Cow", "name": "Betsy", "class": "Mammalia",
		"description": "a fully grown female animal of a domesticated breed of ox, kept to produce milk or beef."
	},
	{ "type": "Coyote", "name": "Wile E.", "class": "Mammalia",
		"description": "a wild dog that resembles the wolf, native to North America."
	},
	{ "type": "Road Runner", "name": "Beep Beep", "class": "Aves",
		"description": "a slender fast-running bird of the cuckoo family, found chiefly in arid country from the southern US to Central America."
	},
	{ "type": "Dolphin", "name": "Flipper",  "class": "Mammalia",
		"description": "a small gregarious toothed whale that typically has a beaklike snout and a curved fin on the back."
	},
	{ "type": "Whale", "name": "Moby Dick", "class": "Mammalia",
		"description": "a very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing."
	},
	{ "type": "Lizard", "name": "Larry", "class": "Reptilia",
		"description": "a reptile that typically has a long body and tail, four legs, movable eyelids, and a rough, scaly, or spiny skin."
	}
];


/*

        <div class="animal" id="abcdefg">
            <header>
                <span class="name">Mr. Tinkles</span>
                <span class="type">Cat/Mammalia</span>
                <span class="toggle" data-id="abcdefg">&#129093;</span> <!-- &#129095 -->
            </header>
            <article>
                a small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.
            </article>
        </div>
 */

const expandArrow = '&#129095';
const collapseArrow = '&#129093';

const buildAnimalList = (animals, animalList) => {
	animals.forEach((animal, index) => {
		const { name, type, description } = animal;
		const animalClass=  animal.class;
		const id = `a${index}`;
		const spanName = `<span class="name">${name}</span>`;
		const spanType = `<span class="type">${type}/${animalClass}</span>`;
		const spanToggle = `<span class="toggle collapsed" data-id="${id}">${expandArrow}</span>`;
		const header = `<header>${spanName}${spanType}${spanToggle}</header>`;
		const article = `<article class="hide">${description}</article>`;
		const div = `<div class="animal collapsed" id="${id}">${header}${article}</div>`;
		animalList.insertAdjacentHTML('beforeend', div);
	});
}

const processArrowClick = (event) => {
	const toggle = event.target;
	const animal = document.getElementById(toggle.getAttribute('data-id'));
	if (animal) {
		const article = animal.querySelector('article');
		const isCollapsed = toggle.classList.contains('collapsed');
		if (isCollapsed) {
			toggle.innerHTML = collapseArrow;
			article.classList.remove('hide');
			toggle.classList.remove('collapsed');
			animal.classList.remove('collapsed');
		} else {
			toggle.innerHTML = expandArrow;
			article.classList.add('hide');
			toggle.classList.add('collapsed');
			animal.classList.add('collapsed');
		}
	}
}

const animalList = document.getElementById('animal-list');

buildAnimalList(animals, animalList);

animalList.addEventListener('click', processArrowClick);
