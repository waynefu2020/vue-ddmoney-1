import tagStore from '@/store/tagSotre';
import recordStore from '@/store/recordStore';

const store = {
    ...tagStore,
    ...recordStore
};

export default store;