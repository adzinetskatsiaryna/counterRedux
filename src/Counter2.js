import React from 'react';
import './App.css';
import style from './counter2.module.css'
import Display from "./Display";
import Input from "./Input";
import Button from "./Button";
import {
    ADD_COUNTER,
    ADD_MAX_VALUE,
    ADD_MIN_VALUE, addCounterAC, addMaxValueAC, addMinValueAC,
    ON_SHOW_SETTINGS,
    onSowSettingsAC,
    RESET_COUNTER, resetCounterAC,
    SET_CHANGE, setChangeCounterAC
} from "./reducer";
import {connect} from "react-redux";

class Counter2 extends React.Component {
    // state = {
    //     counter: 0,
    //     maxValue: 5,
    //     minValue: 0,
    //     onSet: false,
    //     onShow: false
    // };

    addMaxValue=(e)=>{
        let newMaxValue=Number(e.currentTarget.value);
        // this.setState({
        //     maxValue: newMaxValue,
        //     onSet: false
        // })
        this.props.addMaxValue(newMaxValue, false)
    };

    addMinValue=(e)=>{
        let newMinValue = Number(e.currentTarget.value);
        // this.setState({
        //     minValue: newMinValue,
        //     onSet: false
        // })
        this.props.addMinValue(newMinValue, false)
    };

    setChange = ()=>{
        // this.setState({
        //     counter: this.state.minValue,
        //     onSet: true
        // })
        this.props.setChangeCounter(this.props.minValue, true, true)
    };

    addCounter = ()=>{
        // if(this.state.counter<this.state.maxValue){
        //     this.setState({counter: this.state.counter +1})
        // }
        if(this.props.counter<this.props.maxValue){
            this.props.addCounter(this.props.counter + 1)
        }
    };

    resetCounter = ()=>{
        // this.setState({counter: this.state.minValue})
        this.props.resetCounter(this.props.minValue)
    };

    onSowSettings = ()=>{
        // this.setState({onShow: !this.state.onShow})
        this.props.onSowSettings(!this.props.onShow)
    };

    render = () => {

        let disabledAddButton = this.props.onSet===false || this.props.counter===this.props.maxValue;
        let disabledResetButton = this.props.onSet===false || this.props.counter===this.props.minValue;
        let disabledSetButton = this.props.onSet === true || this.props.maxValue < 0 || this.props.minValue < 0 || this.props.minValue>=this.props.maxValue;
        let errorInput = this.props.minValue < 0
            || this.props.maxValue < 0
            || this.props.minValue >= this.props.maxValue ? style.errorInput : style.input;

        return (
            <div className={style.counter}>

                {!this.props.onShow && <div className={style.settings}>
                    <div className={style.inputWrapper}>
                        <Input
                            title={'MAX Value'}
                            value={this.props.maxValue}
                            onChange={this.addMaxValue}
                            className={errorInput}
                        />
                        <Input
                            title={'MIN Value'}
                            value={this.props.minValue}
                            onChange={this.addMinValue}
                            className={errorInput}
                        />
                    </div>
                    <Button
                        title={'SET'}
                        onClick={this.setChange}
                        disabled={disabledSetButton}
                    />
                </div>}

                {this.props.onShow && <div className={style.displayWrapper}>
                    <Display
                        counter={this.props.counter}
                        maxValue={this.props.maxValue}
                        minValue={this.props.minValue}
                        onSet={this.props.onSet}
                    />
                    <div className={style.buttonWrapper}>
                        <Button
                            title={'ADD'}
                            onClick={this.addCounter}
                            disabled={disabledAddButton}
                        />
                        <Button
                            title={'RESET'}
                            onClick={this.resetCounter}
                            disabled={disabledResetButton}
                        />
                        <Button
                            title={'ONSET'}
                            onClick={this.onSowSettings}
                            disabled={false}
                        />
                    </div>
                </div>}

            </div>

        );
    }
}

const mapStateToProps = (state)=>{
    return(
        {
            counter: state.counter,
            maxValue: state.maxValue,
            minValue: state.minValue,
            onSet: state.onSet,
            onShow: state.onShow
        }
    )
};

const mapDispatchToProps = (dispatch)=>{
    return{
        addMaxValue:(newMaxValue, status)=>{
            // const action = {
            //     type: ADD_MAX_VALUE,
            //     maxValue: newMaxValue,
            //     onSet: status
            // };
            const action = addMaxValueAC(newMaxValue, status);
            dispatch(action)
        },

        addMinValue:(newMinValue, status)=>{
            // const action={
            //     type: ADD_MIN_VALUE,
            //     minValue: newMinValue,
            //     onSet: status
            // };
            const action = addMinValueAC(newMinValue, status);
            dispatch(action)
        },

        setChangeCounter: (counter, onSet, onShow)=>{
            // const action = {
            //     type: SET_CHANGE,
            //     counter: counter,
            //     onSet: onSet,
            //     onShow: onShow
            // };
            const action=setChangeCounterAC(counter, onSet, onShow)
            dispatch(action)
        },

        addCounter: (counter)=>{
            // const action = {
            //     type: ADD_COUNTER,
            //     counter: counter
            // };
            const action = addCounterAC(counter);
            dispatch(action)
        },

        resetCounter: (counter)=>{
            // const action={
            //     type: RESET_COUNTER,
            //     counter: counter
            // };
            const action = resetCounterAC(counter);
            dispatch(action)
        },

        onSowSettings: (status)=>{
            // const action={
            //     type: ON_SHOW_SETTINGS,
            //     onShow: status
            // };
            const action = onSowSettingsAC(status);
            dispatch(action)
        }

    }
};

export default connect (mapStateToProps, mapDispatchToProps) (Counter2);

