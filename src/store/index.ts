import { create } from "zustand";

const useStore = create((set) => ({
  collapsed: false,
  updateCollapsed: (newStatus: Boolean) => set({ collapsed: newStatus }),
}));

export default useStore;
