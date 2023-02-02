/**
 * @jest-environment jsdom
 */

import { init } from './../ts/movieApp';
import { handleSubmit } from './../ts/movieApp';
import { createHtml } from './../ts/movieApp';
import { displayNoResult } from './../ts/movieApp';
import { IMovie } from "./../ts/models/Movie";

beforeEach (() => {
    document.body.innerHTML="";
});

jest.mock("./../services/movieservice.ts");

test("should....", async() => {
    //arrange





    //act
    await init();





    //assert
    let form = document.getElementsByTagName ("movie-container")[0];
    expect(form).toBe([]);
});