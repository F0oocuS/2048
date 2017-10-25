class Cell {
	constructor(fieldElement, game) {
		this.game = game;
		this.fieldElement = fieldElement;

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
		if (this.value) {
			this.game.addRating(this.value + cell.value);
		}

		new AnimateCell(cell, this);

		this.value += cell.value;
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

class AnimateCell {
	constructor(fromCell, toCell) {
		this.element = fromCell.element.cloneNode(true);
		this.element.className = 'game__cell animate';
		
		this.element.style.top = fromCell.element.offsetTop + 'px';
		this.element.style.left = fromCell.element.offsetLeft + 'px';

		fromCell.fieldElement.appendChild(this.element);

		this.element.style.top = toCell.element.offsetTop + 'px';
		this.element.style.left = toCell.element.offsetleft + 'px';

		setTimeout(function() {
			fromCell.fieldElement.removeChild(this.element);
		}.bind(this), 200)
	}
}