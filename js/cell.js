class Cell {
	constructor(fieldElement) {
		this.element = createAndAppend({
			className: 'game__cell',
			parentElement: fieldElement
		});

		if (Math.random() > 0.8) {
			this.value = Math.random() > 0.5 ? 4 : 2;
		}

		this.element.onclick = function(e) {
			this.merge();
		}.bind(this);

		// this.element.onclick = this.merge.bind(this); alternative variant
	}

	get value() {
		return this._value || 0;
	}

	set value(value) {
		this._value = value;
		this.element.innerHTML = value == 0 ? '' : value;
	}

	clear() {
		this.value = '';
	}

	merge() {
		this.value *= 2;
	}
}