/**
 * @jest-environment jsdom
 */

import { getData } from './../ts/services/movieservice';

beforeEach (() => {
    document.body.innerHTML="";
});

