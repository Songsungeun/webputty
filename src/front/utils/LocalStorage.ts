export default class LocalStorage {
    findOneL(key: string) {
        const value = localStorage.getItem(key);
        return value;
    }

    findAll() {
        const list = { ...localStorage };
        return list;
    }

    findAllArray() {
        let localData = this.findAll();
        let keys = Object.keys(this.findAll());
        return keys.map(key => {
            return localData[key];
        });
    }

    getLength() {
        return Object.keys(this.findAll()).length;
    }

    setItem(key: string, value: string) {
        if (!value) return;
        const convertJson = JSON.stringify(value);
        localStorage.setItem(key, convertJson);
    }
}