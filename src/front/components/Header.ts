import { DataManagement } from "../data/DataManagement";

// SECTION - Header
export default class Header {
    section = document.createElement('header');
    onClick: Function

    constructor({ target, dataState, onClick }: { target: HTMLElement, dataState: DataManagement, onClick: Function }) {
        this.section.className = 'header';
        this.onClick = onClick;
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

        // NOTE - ip 입력창 생성 및 이벤트 등록
        const ipInput = document.createElement('input');
        ipInput.placeholder = 'IP Address';
        ipInput.classList.add('header_item', 'bg-gray1', 'ip_input');
        ipInput.addEventListener('keypress', (ev) => {
            if (ev.key === 'Enter') this.onClick(ipInput.value);
        });
        headerItem.appendChild(ipInput);

        // NOTE - 접속버튼 생성 및 이벤트 등록
        const connectBtn = document.createElement('button');
        connectBtn.classList.add('header_item', 'connect_btn');
        connectBtn.innerText = 'Connect!';

        // NOTE - Connect Btn 클릭시 Terminal로 ip Addr 전달
        connectBtn.addEventListener('click', () => { this.onClick(ipInput.value) });
        headerItem.appendChild(connectBtn);

        // NOTE - 닉네임으로 저장 체크
        const nickNamebox = document.createElement('div');
        nickNamebox.classList.add('nickname');
        const saveNickNameCheck = document.createElement('input');
        saveNickNameCheck.type = 'checkbox';
        const saveNickNameInput = document.createElement('input');
        saveNickNameInput.placeholder = 'Save as Server Name';
        saveNickNameInput.classList.add('header_item', 'bg-floral', 'nickname_input');
        nickNamebox.appendChild(saveNickNameCheck);
        nickNamebox.appendChild(saveNickNameInput);
        headerItem.appendChild(nickNamebox);

        this.section.appendChild(headerItem);
    }
}
// !SECTION