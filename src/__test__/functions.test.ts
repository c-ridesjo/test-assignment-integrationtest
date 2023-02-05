/**
 * @jest-environment jsdom
 */

import { movieSort } from './../ts/functions';
import { IMovie } from './../ts/models/Movie';
//import { movies } from "./../ts/services/__mocks__/serviceMock";

/*beforeEach (() => {
    document.body.innerHTML="";
});*/

test ("should sort movies by title", () => {
    //Arrange
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
            Title: "Men in black 3",
            imdbID: "tt1409024",
            Type: "movie",
            Poster: "N/A",
            Year: "2012",
        },
    ];

    //Act
    const result = movieSort(movies, true);

    //Assert
    expect(result[0].Title).toBe("Men in black");
    expect(result[1].Title).toBe("Men in black II");
    expect(result[2].Title).toBe("Men in black 3");
});

test ("should sort movies by title, descending", () => {

    //Arrange
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
            Title: "Men in black 3",
            imdbID: "tt1409024",
            Type: "movie",
            Poster: "N/A",
            Year: "2012",
        },
    ];

    //Act
    const result = movieSort(movies, false);

    //Assert
    expect(result[0].Title).toBe("Men in black 3");
    expect(result[1].Title).toBe("Men in black II");
    expect(result[2].Title).toBe("Men in black");
});

