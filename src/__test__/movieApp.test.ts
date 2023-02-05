/**
 * @jest-environment jsdom
 */

import axios from 'axios';

//import { init } from './../ts/movieApp';
import { getData } from "../ts/services/__mocks__/movieservice";
import { movies } from "../ts/services/__mocks__/movieservice";
//import { handleSubmit } from './../ts/movieApp';
//import { createHtml } from './../ts/movieApp';
//import { displayNoResult } from './../ts/movieApp';
import { IMovie } from "./../ts/models/Movie";
import * as movieApp from './../ts/movieApp';

jest.mock("axios", () => ({                                        
    get: async (url: string) => {
        return new Promise ((resolve, reject) => {
            if (!url.endsWith("error")) {
                resolve({data: { Search: movies } });
            }
            else {
                reject ();
            }
        });
    },
}));


beforeEach (() => {
    document.body.innerHTML="";
});

jest.mock("./../ts/services/movieservice.ts");

/* test("should....", async() => {                                                      // Test 3
    //arrange



    //act
    await init();



    //assert
    let form = document.getElementsByTagName ("movie-container")[0];
    expect(form).toBe([]);
});

*/

test ("should reject when input field is empty", async () => {                        // Test 4
    await expect(getData()).rejects.toThrowError("Something went wrong");
});

test ("should return false (mock) movie", async () => {                               // Test 5
    expect(await getData()).toEqual([
        {
            Title: "Titanic",
            imdbID: "tt0120338",
            Type: "drama",
            Poster: "...",
            Year: "1997",
        },
    ]);    
});

test("should call handleSubmit when form is submitted", () => {
    document.body.innerHTML = ` <form id="searchForm">
    <input type="text" id="searchText" placeholder="Skriv titel här" />
    <button type="submit" id="search>Sök</button>"
    </form>
    <div id="movie-container"></div>`

    let spyOnHandleSubmit = jest.spyOn(movieApp, "handleSubmit").mockReturnValue(new Promise<void>((resolve) => 
    resolve()
));

movieApp.init();

let searchForm = document.querySelector("form") as HTMLFormElement;
searchForm.submit();

expect (spyOnHandleSubmit).toHaveBeenCalledTimes(1);
spyOnHandleSubmit.mockRestore();
});