import { create } from 'zustand';

export type SearchBarStore = {
  search: string;
};

type InitialState = SearchBarStore;

type Actions = {
  setSearch: (search: string) => void;
};

const initialState: InitialState = {
  search: '',
};

export const useSearchBarStore = create<InitialState & Actions>((set) => ({
  ...initialState,
  setSearch: (search) => set({ search }),
  reset: () => set({ ...initialState }),
}));
