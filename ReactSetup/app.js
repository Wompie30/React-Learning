import React from "react";
import ReactDOM from "react-dom/client";

//React element => React element initially is an Objet => On rendering the react element 
//becomes an HTML element

//const heading = React.createElement("h1", {}, "Hello ji Hello! 🚀");

//JSX 

const jsxHeading = <h1> Hello ji hello from JSX! 🚀</h1>

// Functional component in React 
const HeadingComponent = () => (
    <div className="Heading">
         <h1>Hello Ji Hello From Functional Component! 🍍🚀</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>); 