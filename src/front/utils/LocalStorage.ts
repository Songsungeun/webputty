export default class LocalStorage {
    findOne(key: string) {
        const value = localStorage.getItem(key);
        return value;
    }

    findAll() {
        const list = { ...localStorage };
        return list;
    }

    setItem(key: string, value: string) {
        if (!value) return;
        const convertJson = JSON.stringify(value);
        localStorage.setItem(key, convertJson);
    }
}