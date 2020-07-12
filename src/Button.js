import React from 'react';
import './App.css';
import style from './counter.module.css'

class Button extends React.Component {
    render = () => {
        return (
            <button
                onClick={this.props.onClick}
                disabled={this.props.disabled}
            >{this.props.title}</button>
        );
    }
}


export default Button;
