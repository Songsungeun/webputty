import { DataManagement } from "../data/DataManagement";

interface IOpenTerminalEventList {
    save: HTMLInputElement,
    con: HTMLButtonElement,
    nick: HTMLInputElement,
    ip: HTMLInputElement
}

// SECTION - Header
export default class Header {
    section = document.createElement('header');
    onClick: Function
    isSave: boolean = false;

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
        headerItem.appendChild(ipInput);

        // NOTE - 접속버튼 생성 및 이벤트 등록
        const connectBtn = document.createElement('button');
        connectBtn.classList.add('header_item', 'connect_btn');
        connectBtn.innerText = 'Connect!';

        headerItem.appendChild(connectBtn);

        // NOTE - 닉네임으로 저장 체크
        const nickNamebox = document.createElement('div');
        nickNamebox.classList.add('nickname');

        const saveCheck = document.createElement('input');
        saveCheck.type = 'checkbox';

        const nickName = document.createElement('input');
        nickName.placeholder = 'Save as Server Name';
        nickName.classList.add('header_item', 'bg-floral', 'nickname_input');

        const connectEventList: IOpenTerminalEventList = {
            save: saveCheck,
            con: connectBtn,
            nick: nickName,
            ip: ipInput
        }
        this.addConnectEvent(connectEventList);

        // HTML Append Child (saveNickNameCheck, saveNickNameInput) => nickNamebox => headerItem 
        nickNamebox.appendChild(saveCheck);
        nickNamebox.appendChild(nickName);
        headerItem.appendChild(nickNamebox);

        this.section.appendChild(headerItem);
    }

    // TODO - 리팩토링 필요.
    addConnectEvent(openEventList: IOpenTerminalEventList) {
        let { save, con, nick, ip } = openEventList;

        // NOTE - Terminal Open Event 필요한 Element들 Add Event
        save.addEventListener('click', () => { this.isSave = save.checked; });

        con.addEventListener('click', () => { this.onClick(ip.value, this.isSave, nick.value) });

        nick.addEventListener('keypress', (ev) => {
            // servername 영역에서 enter 이벤트 발생시에는 ip 적혀있는지 체크
            if (ev.key === 'Enter') {
                if (!ip.value) {
                    alert('IP를 입력해주세요.');
                    return;
                }
                this.onClick(ip.value, this.isSave, nick.value)
            }
        });

        ip.addEventListener('keypress', (ev) => {
            if (ev.key === 'Enter') this.onClick(ip.value, this.isSave, nick.value);
        });
    }
}
// !SECTION