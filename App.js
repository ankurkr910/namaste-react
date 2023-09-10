import React from "react"
import ReactDOM from "react-dom/client"

const node1 = React.createElement('h1',{id:"child"},"i am parent node 🐥 ")
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(node1)
