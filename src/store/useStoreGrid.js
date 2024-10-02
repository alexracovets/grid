import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useStoreGrid = create(immer((set) => ({
    activeGrids: [],
    setActiveGrids: (data) => set((state) => {
        state.activeGrids = data;
    })
})));

export default useStoreGrid;
