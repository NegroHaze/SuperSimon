import './styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu.js'

const App = (props) => {
    return (
        <div><Menu/></div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);