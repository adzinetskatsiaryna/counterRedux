import React from 'react';
import './App.css';
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";


class App extends React.Component {

    state={
        onShow: false
    };
    onShowHandler = ()=>{
        this.setState({onShow:!this.state.onShow})
    };

  render = () => {

    return (
        <div className="App">
            <button onClick={this.onShowHandler} className='showButton'>select counter</button>
            {this.state.onShow === true && <Counter1 />}
            {this.state.onShow === false && <Counter2 />}
        </div>
    );
  }
}

export default App;
