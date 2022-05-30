import { row, col, css } from '../utils';

class Block {
	constructor(value, options) {
		this.value = value;
		this.options = options;
	}

	toHTML() {
		throw new Error('Метод toHTML должен быть реализован');
	}
}

export class TitleBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
        const { tag = 'h1', styles } = this.options;
	    const content = `<${tag}> ${this.value} </${tag}`;
	    return row(col(content), css(styles));
	}
}

export class TextBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const p = `<p>${this.value}</p>`;
	    const styles = this.options.styles;
	    return row(col(p), css(styles));
	}
}

export class ColumnsBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const html = this.value.map(col).join('');
	    const styles = this.options.styles;
	    return row(html, css(styles));
	}
}

export class ImageBlock extends Block {
	constructor(value, options) {
		super(value, options);
	}

	toHTML() {
		const { imageStyles, alt='', styles} = this.options;
	    const img = `<img src = "${this.value}" alt = ${alt} style = "${css(imageStyles)}">`;
	    return row(img, css(styles));
	}
}