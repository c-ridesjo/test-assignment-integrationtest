import { IMovie } from "../../models/Movie";

export const movies: IMovie[] = [
  {
    Title: "Men in black",
    imdbID: "tt0119654",
    Type: "movie",
    Poster: "N/A",
    Year: "1997",
  },
  {
    Title: "Men in black II",
    imdbID: "tt0120912",
    Type: "movie",
    Poster: "N/A",
    Year: "2002",
  },
  {
    Title: "Men in black 3",
    imdbID: "tt1409024",
    Type: "movie",
    Poster: "N/A",
    Year: "2012",
  },
];

export async function getData(): Promise<IMovie[]> {
  return new Promise((resolve, reject) => {
    if (movies.length > 0) {
      resolve(movies);
    }
    else {
      reject("Inga filmer hittades");
    }
  });
}