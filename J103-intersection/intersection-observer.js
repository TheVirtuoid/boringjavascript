const seeLennox = document.getElementById('see-lennox');
const iCanSeeLennox = "Oh, there he is!";
const iCannotSeeLennox = "I CANNOT SEE LENNOX!";

seeLennox.classList.remove('yes');
seeLennox.classList.add('no');
seeLennox.textContent = iCannotSeeLennox;

const optionsForLennox = {
	root: document.getElementById('story'),
	threshold: 1
}

const showHideLennox = (lennoxEntries, observer) => {
	lennoxEntries.forEach((entry) => {
		if (entry.isIntersecting) {
			seeLennox.classList.remove('no');
			seeLennox.classList.add('yes');
			seeLennox.textContent = iCanSeeLennox
		} else {
			seeLennox.classList.remove('yes');
			seeLennox.classList.add('no');
			seeLennox.textContent = iCannotSeeLennox;
		}
	});
}

const lennoxObserver = new IntersectionObserver(showHideLennox, optionsForLennox);
const lennox = document.getElementById('lennox');
lennoxObserver.observe(lennox);