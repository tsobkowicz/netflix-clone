export interface Film {
  description: string;
  genre: string;
  maturity: number;
  slug: string;
  title: string;
  id: string;
  docId: string;
}

export interface Series {
  description: string;
  genre: string;
  maturity: number;
  slug: string;
  title: string;
  id: string;
  docId: string;
}

export interface FilmObj {
  title: string;
  data: Film[];
}

export interface SeriesObj {
  title: string;
  data: Series[];
}

export interface SelectionMap {
  series: SeriesObj[];
  films: FilmObj[];
}

export interface Profile {
  displayName: string | undefined | null;
  photoURL: string | undefined | null;
}
