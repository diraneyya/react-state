import React from 'react';
import ReactDOM from 'react-dom/client';

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

// function Button (props) {
//     return <h1> { props.name } </h1>
// }

function Button(props) {
    
    function onClick() {
        setCount(Math.floor(Math.random() * 10000));
    }

    let [ count, setCount ] = React.useState(0);

    return <button onClick={onClick}> { props.name } { props.emoji } { count }</button>;
}

appRoot.render(
    <Button name="watermelon" emoji="🍉" />
);