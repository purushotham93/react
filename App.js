// import { ReactDOM } from 'react-dom';
// import { ReactDOM } from 'react-dom';
const heading = React.createElement("h1", {id: 'Heading', message:"Hello World"}, "Hello From React");
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)