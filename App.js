// HTML

// <div id="root">
//     <div id="parent">
//         <div id="child">
//             <h1>I am Satakshi</h1>
//             <h2>I am a Working Professional</h2>
//         </div>
//         <div id="child2">
//             <h1>This is a Test Message</h1>
//             <h2>I am learning React</h2>
//         </div>
//     </div>
// </div>

const parent = React.createElement(
    "div", { id: "parent" },
    React.createElement("div", { id: "child" },[
        React.createElement("h1", {}, "I am Satakshi"), 
        React.createElement("h2", {}, "I am a Working Professional")
    ]),
    React.createElement("div", { id: "child2" },[
        React.createElement("h1", {}, "This is a Test Message"), 
        React.createElement("h2", {}, "I am learning React")
    ])
);

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from Javascript !!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);