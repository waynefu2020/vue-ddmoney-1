import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordStore = {
    recordList: [] as RecordItem[],

    createRecord(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createAt = new Date().toISOString();
        this.recordList && this.recordList.push(record2);
        recordStore.saveRecords()
    },
    fetchRecords() {
        this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
        return this.recordList
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
    }
};

recordStore.fetchRecords();

export default recordStore;