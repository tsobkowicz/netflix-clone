export interface Film {
  description: string;
  genre: string;
  maturity: string;
  slug: string;
  title: string;
  id: string;
  docId: string;
}

export interface Series {
  description: string;
  genre: string;
  maturity: string;
  slug: string;
  title: string;
  id: string;
  docId: string;
}

interface FilmObj {
  title: string;
  data: Film[];
}

interface SerieObj {
  title: string;
  data: Series[];
}

export interface SelectionMap {
  series: SerieObj[];
  films: FilmObj[];
}

export interface Profile {
  displayName: string | undefined | null;
  photoURL: string | undefined | null;
}
