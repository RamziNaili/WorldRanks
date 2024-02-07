import { create } from 'zustand';

export enum RegionsName {
  Africa = 'Africa',
  Americas = 'Americas',
  Asia = 'Asia',
  Europe = 'Europe',
  Antarctic = 'Antarctic',
  Oceania = 'Oceania',
}

export enum SortType {
  population = 'population',
  area = 'area',
  name = 'name',
}

type Filter = {
  sortBy: SortType;
  regions: RegionsName[];
  UnitedStates: boolean;
  Independed: boolean;
};

type InitialState = Filter;

type Actions = {
  setFilter: (filter: InitialState) => void;
  setRegions: (region: RegionsName) => void;
  setUnitedStates: () => void;
  setIndepended: () => void;
  setSortBy: (sortBy: SortType) => void;
};

const initialState: InitialState = {
  sortBy: SortType.population,
  regions: [],
  UnitedStates: false,
  Independed: false,
};

export const useFilterStore = create<InitialState & Actions>((set) => ({
  ...initialState,
  setFilter: (filter) => set({ ...filter }),
  setRegions: (region: RegionsName) => {
    set((state) => {
      const regions = state.regions;
      if (regions.includes(region)) {
        return {
          ...state,
          regions: regions.filter((id: RegionsName) => id !== region),
        };
      }
      return {
        ...state,
        regions: [...regions, region],
      };
    });
  },
  setUnitedStates: () =>
    set((state) => ({ ...state, UnitedStates: !state.UnitedStates })),
  setIndepended: () =>
    set((state) => ({ ...state, Independed: !state.Independed })),
  setSortBy: (sortBy: SortType) => {
    set((state) => ({ ...state, sortBy }));
  },
  reset: () => set({ ...initialState }),
}));
