/**
 * @jest-environment jsdom
 */

import { init } from './../ts/movieApp';
import { getData } from "./../ts/services/__mocks__/serviceMock";
import { handleSubmit } from './../ts/movieApp';
import { createHtml } from './../ts/movieApp';
import { displayNoResult } from './../ts/movieApp';
import { IMovie } from "./../ts/models/Movie";


beforeEach (() => {
    document.body.innerHTML="";
});

jest.mock("./../services/movieservice.ts");

test("should....", async() => {                                                      // Test 3
    //arrange



    //act
    await init();



    //assert
    let form = document.getElementsByTagName ("movie-container")[0];
    expect(form).toBe([]);
});



test ("should reject when input field is empty", async () => {                        // Test 4
    await expect(getData("")).rejects.toThrowError("Something went wrong");
});

test ("should return false (mock) movie", async () => {                               // Test 5
    expect(await getData("Titanic")).toEqual([
        {
            Title: "Titanic",
            imdbID: "tt0120338",
            Type: "drama",
            Poster: "...",
            Year: "1997",
        },
    ]);    
});

