/**
 * @jest-environment jsdom
 */

import { IMovie } from './../ts/models/Movie';
import { getData } from './../ts/services/movieservice';

beforeEach (() => {
    document.body.innerHTML="";
});

test ("should get data correctly", async() => {
    let data = await getData ("test")
}),

test ("should get error getting data", async() => {
    try {
        let data = await getData ("error");
    }
    catch (error:any) {
        expect (error.lenght).toBe(0);
    }
});


/*const movies: IMovie[] = [
    {
        Title: "Men in black",
        imdbID: "tt0119654",
        Type: "movie",
        Poster: "...",
        Year: "1997",
    },
    {
        Title: "Men in black II",
        imdbID: "tt0120912",
        Type: "movie",
        Poster: "...",
        Year: "2002",
    },
    {
        Title: "Men in black 3",
        imdbID: "tt1409024",
        Type: "movie",
        Poster: "...",
        Year: "2012",
    },
];

jest.mock("axios", () => ({
    get: async (url: string) => {
        return new Promise ((resolve, reject) => {
            if (url.endsWith("error")) {
                reject([]);
            }
            else {
                resolve (movies);
            }
        });
    }
}));
*/
