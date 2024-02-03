// React element is nothing but a JS object.
// ReactElement(JS Object) => HTML(Browser understands using ReactDOM)

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { style: { color: "cyan" } }, "Namaste React!"),
  React.createElement(
    "p",
    {},
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit odio quae, cupiditate rem perferendis reiciendis ut quod voluptatum fugiat delectus alias suscipit voluptate. Nemo itaque ex quis velit assumenda temporibus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit odio quae, cupiditate rem perferendis reiciendis ut quod voluptatum fugiat delectus alias suscipit voluptate. Nemo itaque ex quis velit assumenda temporibus."
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(heading);
