import React from 'react';
import './App.css';
import style from './counter.module.css'

class Display extends React.Component {

    render = () => {

        let styleError = this.props.maxValue < 0
        || this.props.minValue < 0
        || this.props.minValue >= this.props.maxValue ? style.error : '';

        let styleMaxError = this.props.counter === this.props.maxValue ? style.error : ''

        return (
            <div className={style.display}>
                <span className={styleMaxError}>
                    {
                        (this.props.maxValue < 0 || this.props.minValue < 0 || this.props.minValue >= this.props.maxValue)
                            ? <span  className={styleError}>incorrect value!!!</span>
                            : (!this.props.onSet)
                            ? <span className={style.enter}>Enter value end press set</span>
                            : <span>{this.props.counter}</span>
                    }
                </span>
            </div>
        );
    }
}


export default Display;
