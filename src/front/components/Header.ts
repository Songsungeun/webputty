export default class Header {
    // SECTION - Header
    section = document.createElement('header');

    constructor(target: HTMLElement) {
        this.section.className = 'header';
        target.appendChild(this.section);
        this.render();
    }

    render() {

        const headerItem = document.createElement('div');
        headerItem.classList.add('header_itemBox', 'releative', 'items-center', 'flex-nowrap', 'flex-row', 'flex');

        const TitleBox = document.createElement('h4');
        TitleBox.classList.add('header_item');
        TitleBox.innerText = 'Web Putty';
        headerItem.appendChild(TitleBox);

        const ipInput = document.createElement('input');
        ipInput.placeholder = 'IP Address';
        ipInput.classList.add('header_item', 'bg-gray1', 'ip_input');
        headerItem.appendChild(ipInput);

        const connectBtn = document.createElement('button');
        connectBtn.classList.add('header_item', 'connect_btn');
        connectBtn.innerText = 'Connect!';
        headerItem.appendChild(connectBtn);

        this.section.appendChild(headerItem);
    }

    // !SECTION
}