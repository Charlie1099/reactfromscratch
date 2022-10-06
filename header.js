
/* 
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container) 
*/

//
const element = {
    // type is a string that will specifies what node type is being created / just like the tagName you pass to document.createElement
    type: "h1",
    // props is an object with keys and values from the jsx attributes
    props: {
        title: "foo",
        children: "Hello!"
    },
}

const container = document.getElementById("root");
// creating the a node uising the element type for the h1
const node = document.createElement(element.type)
//assignin the element props to that node for the title
node["title"] = element.props.title
// makeing the node for the children in this case a text node
const text = document.createTextNode("")
text["nodeValue"] = element.props.children

node.appendChild(text)
container.appendChild(node)



