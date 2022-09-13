const expandArrow = '&#129095';
const collapseArrow = '&#129093';

export default class VirtuoidAnimal extends HTMLElement {

	#animal;
	#name;
	#type;
	#description;

	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['name', 'type', 'description'];
	}

	static get template() {
		return `
<header>
		<span class="name"></span>
		<span class="type"></span>
		<span class="toggle collapsed">${expandArrow}</span>
</header>
<article class="hide"></article>
		`;
	}

	static get styles() {
		return `
	.animal {
			background-color: #99a2e2;
			border-radius: .5rem;
			box-shadow: 0 0 5px 2px grey;
			width: 20rem;
			margin: 1rem;
	}
	
	.animal header {
			background-color: white;
			border-radius: .5rem .5rem 0 0;
			padding: .5rem 1rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-weight: bold;
			align-items: center;
	}
	
	.animal.collapsed header {
			border-radius: .5rem;
	}
	
	.animal header span.type {
			font-weight: normal;
	}
	
	.animal article {
			padding: .5rem 1rem;
	}
	
	.animal article.hide {
			display: none;
	}
	
	.animal span.toggle {
			cursor: pointer;
	}

		`;
	}

	#processClick(event) {
		const toggle = event.target;
		const animal = toggle.closest('div.animal');
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

	connectedCallback() {
		const shadowRoot = this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'

		const div = document.createElement('div');
		div.classList.add('animal', 'collapsed');
		div.innerHTML = VirtuoidAnimal.template;
		div.addEventListener('click', this.#processClick);

		const styles = document.createElement('style');
		styles.textContent = VirtuoidAnimal.styles;

		this.#animal = div;
		this.attributeChangedCallback('name', null, this.#name);
		this.attributeChangedCallback('type', null, this.#type);
		this.attributeChangedCallback('description', null, this.#description);
		shadowRoot.append(styles, div);

	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch(name) {
			case 'name':
				this.#name = newValue;
				if (this.#animal) {
					this.#animal.querySelector('span.name').textContent = this.#name;
				}
				break;
			case 'type':
				this.#type = newValue;
				if (this.#animal) {
					this.#animal.querySelector('span.type').textContent = this.#type;
				}
				break;
			case 'description':
				this.#description = newValue;
				if (this.#animal) {
					this.#animal.querySelector('article').textContent = this.#description;
				}
				break;
		}
	}
}

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