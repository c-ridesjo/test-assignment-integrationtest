import axios from "axios";
import { IOmdbResponse } from "../../models/IOmdbResponse";
import { IMovie } from "../../models/Movie";

/* export const getData = async (searchText: string): Promise<IMovie[]> => {
    return axios
      .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=" + searchText)
      .then((data) => {
        return data.data.Search;
      })
      .catch(() => {
        return [];
      });
  };    */  
  
  //mocken ska ha samma deklaration som den riktiga funktionen - kopierat den hit från movieservice.ts


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