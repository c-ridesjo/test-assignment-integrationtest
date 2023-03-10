/**
 * @jest-environment jsdom
 */

import { getData } from "../ts/services/__mocks__/movieservice";
import { movies } from "../ts/services/__mocks__/movieservice";
import { IMovie } from "./../ts/models/Movie";
import * as movieApp from './../ts/movieApp';
import * as movieservice from './../ts/services/movieservice';

jest.mock("./../ts/services/movieservice.ts");

beforeEach (() => {
    document.body.innerHTML="";
});

test ("should call createHtml correctly", async () => {                         

    //Arrange
    const movies: IMovie[] = [
        {
            Title: "Men in black",
            imdbID: "tt0119654",
            Type: "movie",
            Poster: "N/A",
            Year: "1997",
        },
    ];

    document.body.innerHTML = `<div id="movie-container"></div>`;
    const container = document.getElementById("movie-container") as HTMLDivElement;

    //Act 
    movieApp.createHtml(movies, container);

    //Assert  
    expect(container.innerHTML).toContain("Men in black");
});

test ("should call createHtml if movies are found", async () => {                      

    //Arrange
    document.body.innerHTML = ` 
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <div id="movie-container"></div>`;    

    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "Men in black";
    const createHtmlMock = jest.spyOn(movieApp, "createHtml");
    const movies: IMovie[] = [
        {
            Title: "Men in black",
            imdbID: "tt0119654",
            Type: "movie",
            Poster: "N/A",
            Year: "1997",
        },
    ];

    const getDataMock = jest.spyOn(movieservice, "getData").mockReturnValue(Promise.resolve(movies));
   
    //Act
    await movieApp.handleSubmit();

    //Assert
    expect(getDataMock).toBeCalledTimes(1);
    expect(createHtmlMock).toBeCalledTimes(1);

    getDataMock.mockRestore();
    createHtmlMock.mockRestore();
});
 
test ("should call displayNoResult if movies are not found", async () => {         

    //Arrange
    document.body.innerHTML = ` 
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <div id="movie-container"></div>
        `;  

    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "";
    const getDataMock = jest.spyOn(movieservice, "getData").mockReturnValue(Promise.reject());
    const displayNoResultMock = jest.spyOn(movieApp, "displayNoResult");

    //Act
    await movieApp.handleSubmit();

    //Assert
   
    expect(getDataMock).toBeCalledTimes(1);
    expect(displayNoResultMock).toBeCalledTimes(1);

    getDataMock.mockRestore();
    displayNoResultMock.mockRestore();
});
 
test ("should display message", async () => {                                   

    //Arrange
    document.body.innerHTML = `<div id="movie-container"></div>`;
    const container = document.getElementById("movie-container") as HTMLDivElement;

    //Act
    movieApp.displayNoResult(container);

    //Assert
    expect(container.innerHTML).toContain("Inga sökresultat");
});

