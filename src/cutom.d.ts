type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAt?: Date;
}

type Tag = {
    id: string;
    name: string;
}

type tagListModel = {
    data: tag[];
    fetch: () => tag[];
    create: (name: string) => 'success' | 'duplicated';
    update: (id: string, name: string) => 'success' | 'duplicated' | 'notFound';
    remove: (id: string) => boolean;
    save: () => void;
}

interface Window {
    tagList: Tag[];
}
