// react.createElement creates an object with props and children
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "hello World from react"
);
console.log("heading", heading); //object

// example of nested element

//  ‹div id="parent">
// ‹div id="child">
// <h1>I'm h1 tags/h1>
// </div>
// </div>
// * ReactElement (Object) = creates HTML(Browser Understands)
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "I'm an h1 tag")
    )
);

//if have to create sibling elements then we can pass the array of elements in child method.
// const siblings = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         { id: "child" },
//         [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]));

//example of structure to create the nested child elements.
// const nestedElement = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag"),
//     ]),
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//render method will take object and convert it into heading tag and put in DOM.
root.render(parent);
