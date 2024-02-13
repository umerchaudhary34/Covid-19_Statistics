import {create} from 'zustand';

const useCasesStore = create(set => ({
  allCases: [],
  globalCases: (data: any) => {
    set({allCases: data});
  },
}));

export default useCasesStore;
