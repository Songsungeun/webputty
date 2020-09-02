export default class Header {
    section = document.createElement('header');

    constructor(target: HTMLElement) {
        this.section.className = 'header';
        target.appendChild(this.section);
        this.render();
    }

    render() {
        const leftArea = document.createElement('div');
        this.section.appendChild(leftArea);
    }
}