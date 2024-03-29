import '../src/index.css';

import {initialPageLoad} from '../src/initialPageLoad';

import { homepage } from './homepage';
import { menupage } from './menupage';
import { aboutpage } from './aboutpage';


function clearPageAndDisplayAnotherTag(){
    const content = document.querySelector("#content");
    content.textContent = "";
    if (this.id === "home-btn"){
        homepage();
    }
    else if (this.id === "menu-btn"){
        menupage();
    }
    else{
        aboutpage();
    }
};


initialPageLoad();

// event listeners
const homePageBtn = document.querySelector("#home-btn");
const menuPageBtn = document.querySelector("#menu-btn");
const aboutPageBtn = document.querySelector("#about-btn");
homePageBtn.addEventListener("click", clearPageAndDisplayAnotherTag);
menuPageBtn.addEventListener("click", clearPageAndDisplayAnotherTag);
aboutPageBtn.addEventListener("click", clearPageAndDisplayAnotherTag);

