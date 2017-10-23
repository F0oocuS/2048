class Game {
	constructor(parentElement, size = 4) {
		let gameFieldElement = createAndAppend({
			className: 'game',
			parentElement
		});

		let headerElement = createAndAppend({
			className: 'game__header',
			parentElement: gameFieldElement
		});

		this.rating = 0;

		headerElement.innerHTML = 'Rating: ' + this.rating;

		let fieldElement = createAndAppend({
			className: 'game__field',
			parentElement: gameFieldElement
		});

		for (let i = 0; i < size; i++) {
			for (let k = 0; k < size; k++) {
				new Cell(fieldElement);
			}
		}

	}
}