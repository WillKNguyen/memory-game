import './App.css';
import React, {Component} from 'react';

class App extends Component {
  mapper = null;

  constructor(props){
    super(props);
    this.state = {
      arr: [1,2,3,4,5,6,7,8,9,10,11,12],
      new_arr: [],
      score: 0,
      highscore: 0,
    };
    this.mapper = {
      1: '/assets/tn_bn-flag.gif',
      2: '/assets/tn_au-flag.gif',
      3: '/assets/tn_en-flag.gif',
      5: '/assets/tn_fr-flag.gif',
      6: '/assets/tn_gg-flag.gif',
      7: '/assets/tn_hu-flag.gif',
      4: '/assets/tn_ja-flag.gif',
      8: '/assets/tn_le-flag.gif',
      9: '/assets/tn_mt-flag.gif',
      10: '/assets/tn_pe-flag.gif',
      11: '/assets/tn_sn-flag.gif',
      12: '/assets/tn_ts-flag.gif',
    };
  }
  checkscore = (e) => {
    let value = e.target.className;
    console.log(value);
    const arr = this.randomizeArray(this.state.arr);
    // const arr = (this.state.arr);
    if (!this.state.new_arr.includes(value)){
      const newScore = this.state.score + 1;
      this.setState({
        arr: arr,
        new_arr: this.state.new_arr.concat(value),
        score: newScore,
        highscore: this.state.highscore <= newScore ? newScore : this.state.highscore
      });
    } 
    else{
      this.setState(prevState => ({
        ...prevState,
        new_arr: [],
        score: 0,
      }));
    }
  };

  randomizeArray(arr){
    return arr.sort(() => Math.random() - 0.5);
  }

  render(){
    return(
      <div>
        <h1>Wait, have I been to that country already?</h1>
        <h3>The score resets if you select the same flag twice</h3>
        <div className='flags'>
          {this.state.arr.map(item => {
            const source = this.mapper[item];
            return (
              <img src={source} className={item} onClick={this.checkscore} alt={this.mapper[item]}></img>
            )
          })}
        </div>
        <h3>Score: {this.state.score}</h3>
        <h3>High Score: {this.state.highscore}</h3>
      </div>
    )
  }
}

export default App;
