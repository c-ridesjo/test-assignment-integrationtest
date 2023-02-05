/**
 * @jest-environment jsdom
 */

import { IMovie } from './../ts/models/Movie';
import { getData } from './../ts/services/movieservice';

//jest.mock("./../ts/services/movieservice");

/*beforeEach (() => {
    document.body.innerHTML="";
});*/

/*jest.mock("axios", () => ({                       // Mocka axios i __mock__ (Länk till mock i övriga testfiler)                 
    get: async (url: string) => {
        return new Promise ((resolve, reject) => {
            if (!url.endsWith("error")) {
                resolve({data: { Search: movies } });
            }
            else {
                reject ([{}]);
            }
        });
    },
}));*/

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

test ("should get data correctly", async() => {                 // Test 1 - fungerar
    // Arrange
    let searchTitle = "Men in black";
        
    // Act
    let data = await getData (searchTitle);
  //  console.log(data);

    //Assert
    expect(data[0].imdbID).toBe(movies[0].imdbID);         // Testar att ID:t stämmer och att jag fått rätt resultat
    //console.log("found data: " + data[0].imdbID + "  expected data: " + movies[0].imdbID);
});

test ("should get error getting data", async() => {             // Test 2 - fungerar
    //Arrange
       const myList: IMovie[] = [];

    //Act
        let data = await getData ("");
        console.log("det här är den data jag fick" + data);

    //Assert
        expect (data).toBe(undefined);
}); 

