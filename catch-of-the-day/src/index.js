import React from 'react';
import { render } from 'react-dom';
import "./css/style.css";
import Router from "./components/Router.js"


//making componenets



const mountDiv = document.querySelector('#main');
render(<Router />, mountDiv)