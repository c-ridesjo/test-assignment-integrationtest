import axios from "axios";
import { IOmdbResponse } from "../../models/IOmdbResponse";
import { IMovie } from "../../models/Movie";

export const getData = async (searchText: string): Promise<IMovie[]> => {
    return axios
      .get<IOmdbResponse>("http://omdbapi.com/?apikey=416ed51a&s=" + searchText)
      .then((data) => {
        return data.data.Search;
      })
      .catch(() => {
        return [];
      });
  };     
  
  //mocken ska ha samma deklaration som den riktiga funktionen - kopierat den hit från movieservice.ts