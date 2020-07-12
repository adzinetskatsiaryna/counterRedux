import React from 'react';
import './App.css';
import style from './counter.module.css'

class Input extends React.Component {
    render = () => {
        return (
            <div>
                <span>{this.props.title}</span>
                <input
                    type='number'
                    value={this.props.value}
                    autoFocus={true}
                    onChange={this.props.onChange}
                    className={this.props.className}
                />
            </div>
        );
    }
}


export default Input;
