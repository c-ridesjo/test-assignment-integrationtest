/**
 * @jest-environment jsdom
 */

import { IMovie } from './../ts/models/Movie';
import { getData } from './../ts/services/movieservice';
import * as movieApp from './../ts/movieApp';
import * as movieservice from './../ts/services/movieservice';

beforeEach (() => {
    document.body.innerHTML="";
});

const movies: IMovie[] = [
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
        Title: "Men in black III",
        imdbID: "tt1409024",
        Type: "movie",
        Poster: "N/A",
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
                resolve ({data: {Search: movies}});
            }
        });
    },
}));

test ("should get data correctly", async() => {               
    // Arrange
    const searchTitle = "Men in black";
        
    // Act
    let data = await getData (searchTitle);

    //Assert
    expect(data[0].imdbID).toBe(movies[0].imdbID);       
});

test ("should get error getting data", async() => { 
    try {
        let data = await getData("error");
    }
    catch { (error: any) => {
        expect (error.length).toBe(0);
    }
}});

test ("should call getData correctly", async () => {            

    //Arrange
    document.body.innerHTML = ` 
    <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" />
        <button type="submit" id="search>Sök</button>"
    </form>
    <div id="movie-container"></div>
    `;

    const searchText = document.getElementById("searchText") as HTMLInputElement;
    searchText.value = "Men in black";
    const getDataSpy = jest.spyOn(movieservice, "getData").mockReturnValue(Promise.resolve([]));

    //Act
    await movieApp.handleSubmit();

    //Assert
    expect(getDataSpy).toBeCalledWith("Men in black");
    getDataSpy.mockRestore();
});

