export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
  region: string;
  area: number;
  population: number;
  independent: boolean;
  unMember: boolean;
};

export type CountryInfo = {
  flags: {
    png: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  area: number;
  capital: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  continents: string;
  borders: string[];
};

export type CountryNeighbour = {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
};
