
/* 
first line is JSX. JSX will use babel to call the ceate elememnt and passes the tag name, props and children as prams
const element = <h1 title="foo">Hello</h1>

const container = document.getElementById("root")

ReactDOM.render(element, container) 
*/

// This replaces the JSX With valid JavaScript
const element1 = {
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
const node = document.createElement(element1.type)
//assignin the element props to that node for the title
node["title"] = element1.props.title
// makeing the node for the children in this case a text node
const text = document.createTextNode("")
text["nodeValue"] = element1.props.children

node.appendChild(text)
container.appendChild(node)

/*  This is what is being transformed to JavaScript
 const element = (
     <div id="foo">
      <a>bar</a>
      <b />
    </div>
  )
  const container = document.getElementById("root")
   ReactDOM.render(element, container)
*/

/* 
Step One 
Create the createElement Function
We will do this by taking the JSX and transforming it to JS so we can see the create element calls.

An element is an Object with type and props so we need to create that object
*/
//rest opertor for children so it will always be an array
function createElement(type, props, ...children){
  return{
    type,
    props: {
      // spred operator to allow for quickly copying of as part or all of an array or obj into another
      ...props,
      children: children.map(child =>
        typeof child === "object"
        ? child
        : createTextElement(child)
        ),
    },
  }
}

function createTextElement(text){
  return {
    type: "TEXT_ELEMENT",
    props:{
      nodeValue: text,
      children: [],
    }
  }
}

function render(elememnt, container) {
  const dom = document.createElement(element.type)

  elememnt.props.children.forEach(child => 
    render(child, dom)  
  );

  container.appendChild(dom)
}

const Didact = {
  createElement,
  
}


// const elememnt = Didact.createElement(
//   "div",
//   { id: "foo" },
//   Didact.createElement("a", null, "bar"),
//   Didact.createElement("b")
// )

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
)


