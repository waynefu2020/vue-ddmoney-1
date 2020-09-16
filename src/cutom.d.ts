type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}

type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: string;
}

type Tag = {
    id: string;
    name: string;
}

type tagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';
    update: (id: string, name: string) => 'success' | 'duplicated' | 'notFound';
    remove: (id: string) => boolean;
    save: () => void;
}

interface Window {
    store: {
        tagList: Tag[];
        createTag: (name: string) => void;
        findTag: (id: string) => Tag;
        updateTag: (id: string, name: string) => 'success' | 'duplicated' | 'notFound';
        removeTag: (id: string) => boolean;
        recordList: RecordItem[];
        createRecord: (record) => void;
    };
}
