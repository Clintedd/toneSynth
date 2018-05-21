import React from 'react';
import ReactDOM from 'react-dom';
import NewSynth from './NewSynth';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      type: '',
      types: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForSawtooth = this.handleSubmitForSawtooth.bind(this);
    this.handleSubmitForSine = this.handleSubmitForSine.bind(this);
    this.handleSubmitForSquare = this.handleSubmitForSquare.bind(this);
    this.handleSubmitForTriangle = this.handleSubmitForTriangle.bind(this);
    this.triggerNote = this.triggerNote.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    console.log('changing');
    console.log(this);

    // const synth = new Tone.Synth({
    //   Oscillator: {
    //     Type: this.
    //   }
    // })

  }
  // handleChangeForSawtooth(e) {
  //   e.preventDefault();
  //   const typeClone = Array.from(this.state.types);
  //   const sawtooth = {
  //     value: this.sawtoothChoice.value
  //   }

  //   typeClone.push(sawtooth)
    
  //   this.setState({
  //     types: typeClone
  //   })
  // }
  handleSubmitForSine(e) {
    e.preventDefault();
    const typeClone = Array.from(this.state.types);
    const sine = {
      value: this.sineChoice.value
    }

    typeClone.push(sine)

    this.setState({
      type: '',
      types: typeClone
    })
  }
  handleSubmitForTriangle(e) {
    e.preventDefault();
    const typeClone = Array.from(this.state.types);
    const triangle = {
      value: this.triangleChoice.value
    }

    typeClone.push(triangle)

    this.setState({
      type: '',
      types: typeClone
    })
  }
  handleSubmitForSquare(e) {
    e.preventDefault();
    const typeClone = Array.from(this.state.types);
    const square = {
      value: this.squareChoice.value
    }

    typeClone.push(square)

    this.setState({
      type: '',
      types: typeClone
    })
  }
  handleSubmitForSawtooth(e) {
    e.preventDefault();
    const typeClone = Array.from(this.state.types);

    const sawtooth = {
      value: this.sawtoothChoice.value
    }

    typeClone.push(sawtooth)

    this.setState({
      type: '',
      types: typeClone
    })
  }
  triggerNote(type) {
    console.log(type.value);
    // synth = new Tone.Synth({
    //   Oscillator
    // })
  }
  render() {
    return (
      <div>
        {/* <form action="" onSubmit={this.handleSubmit}>
          <select name="oscillator" id="oscillatorChoice" onChange={this.handleChange}>
            <option value="sawtooth" onChange={this.handleChangeForSawtooth}  ref={ref => this.sawtoothChoice = ref}>sawtooth</option>
          </select>
            <option value="sine" onChange={this.handleChange} ref={ref => this.sineChoice = ref}>sine</option>
            <option value="triangle" onChange={this.handleChange} ref={ref => this.triangleChoice = ref}>triangle</option>
            <option value="square" onChange={this.handleChange} ref={ref => this.squareChoice = ref}>square</option>
          <input type="submit" value="Make a Synth!"/>
        </form> */}
        <form action="" onSubmit={this.handleSubmitForSawtooth}>
          Sawtooth<input type="radio" name="oscillator" value="sawtooth" onChange={this.onChangeOscillator} ref={ref => this.sawtoothChoice = ref} />
          <input type="submit" value="Make a Synth!" />
        </form>
        <form action="" onSubmit={this.handleSubmitForSine}>
          Sine<input type="radio" name="oscillator" value="sine" onChange={this.onChangeOscillator} ref={ref => this.sineChoice = ref} />
          <input type="submit" value="Make a Synth!" />
        </form>
        <form action="" onSubmit={this.handleSubmitForTriangle}>
          Triangle<input type="radio" name="oscillator" value="triangle" onChange={this.onChangeOscillator} ref={ref => this.triangleChoice = ref} />
          <input type="submit" value="Make a Synth!" />
        </form>
        <form action="" onSubmit={this.handleSubmitForSquare}>
          Square<input type="radio" name="oscillator" value="square" onChange={this.onChangeOscillator} ref={ref => this.squareChoice = ref} />
          <input type="submit" value="Make a Synth!" />
        </form>
        <section className="synths">
          {this.state.types.map((type, i) => {
            return (
              <NewSynth 
              key={i}
              type={type}
              triggerNote={this.triggerNote}/>
            )
          }

          )}
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
