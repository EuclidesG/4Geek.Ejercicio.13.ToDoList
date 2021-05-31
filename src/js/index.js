//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

<link
	href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap"
	rel="stylesheet"></link>;

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
