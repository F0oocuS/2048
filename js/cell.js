class Cell {
	constructor(fieldElement, game) {
		this.game = game;

		this.element = createAndAppend({
			className: 'game__cell',
			parentElement: fieldElement
		});

		if (Math.random() > 0.8) {
			this.spawn();
		}
	}

	get value() {
		return this._value || 0;
	}

	set value(value) {
		this._value = value;
		this.element.innerHTML = value == 0 ? '' : value;
		this.element.setAttribute('data-color', value);
	}

	clear() {
		this.value = '';
	}

	merge(cell) {
		this.value += cell.value;
		this.game.onCellMerge(this);
		cell.clear();
	}

	isSameTo(cell) {
		return this.value == cell.value;
	}

	spawn() {
		this.value = Math.random() > 0.5 ? 4 : 2;
	}

	get isEmpty() {
		return this.value == 0;
	}
}