import React from 'react';
import ReactDOM from 'react-dom';
import NewSynth from './NewSynth';
import Tone from './Tone';
import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAKgb0Yho807S4Xp9TvDY3TmALygoJMqXY",
  authDomain: "newsynthmaker.firebaseapp.com",
  databaseURL: "https://newsynthmaker.firebaseio.com",
  projectId: "newsynthmaker",
  storageBucket: "",
  messagingSenderId: "1788412398"
};
firebase.initializeApp(config);


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
    this.triggerNoteC5 = this.triggerNoteC5.bind(this);
    this.triggerNoteD5 = this.triggerNoteD5.bind(this);
    this.triggerNoteE5 = this.triggerNoteE5.bind(this);
    this.triggerNoteF5 = this.triggerNoteF5.bind(this);
    this.triggerNoteG5 = this.triggerNoteG5.bind(this);
    this.triggerNoteA5 = this.triggerNoteA5.bind(this);
    this.triggerNoteB5 = this.triggerNoteB5.bind(this);
    this.triggerNoteC6 = this.triggerNoteC6.bind(this);
    this.removeSynth = this.removeSynth.bind(this);
    
  }
  componentDidMount() {
    const dbRef = firebase.database().ref('types');
    const synthArray = [];
    dbRef.on('value', (snapshot)=> {
      const data = snapshot.val();
      console.log(data);
      for(let item in data) {
        data[item].key = item;
        synthArray.push(data[item])
      }
    })
    this.setState ({
      types: synthArray
    })
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
    // const typeClone = Array.from(this.state.types);
    const sine = {
      value: this.sineChoice.value
    }
    const dbRef = firebase.database().ref('types')

    dbRef.push(sine)

    this.setState({
      type: ''
    })
  }
  handleSubmitForTriangle(e) {
    e.preventDefault();
    // const typeClone = Array.from(this.state.types);
    const triangle = {
      value: this.triangleChoice.value
    }
    const dbRef = firebase.database().ref('types')

    dbRef.push(triangle)

    this.setState({
      type: ''
    })
  }
  handleSubmitForSquare(e) {
    e.preventDefault();
    // const typeClone = Array.from(this.state.types);
    const square = {
      value: this.squareChoice.value
    }
    const dbRef = firebase.database().ref('types')

    dbRef.push(square)

    this.setState({
      type: ''
    })
  }
  handleSubmitForSawtooth(e) {
    e.preventDefault();
    // const typeClone = Array.from(this.state.types);

    const sawtooth = {
      value: this.sawtoothChoice.value
    }
    const dbRef = firebase.database().ref('types')

    dbRef.push(sawtooth)

    this.setState({
      type: ''
    })
  }
  triggerNoteC5(pickedType) {
    console.log(pickedType.value);
    const typeChosen = pickedType.value
    let synth = new Tone.Synth({
      Oscillator: {
        type: typeChosen
      }
    })

    // const typeChosen = type.value

    // const newTone = new Tone.Synth().Oscillator()

    // newTone.typeChosen.triggerAttackRelease('C5', '32n').toMaster()
    

    synth.triggerAttackRelease('C5', '32n').toMaster()

  }
  triggerNoteD5(pickedType) {
    console.log(pickedType.value);
    const typeChosen = pickedType.value
    let synth = new Tone.Synth({
      Oscillator: {
        type: typeChosen
      }
    })
    
    // const typeChosen = type.value

    // const newTone = new Tone.Synth().Oscillator()

    // newTone.typeChosen.triggerAttackRelease('D5', '32n').toMaster()

    synth.triggerAttackRelease('D5', '32n').toMaster()

  }
  triggerNoteE5(pickedType) {
    console.log(pickedType.value);
    const typeChosen = pickedType.value
    let synth = new Tone.Synth({
      Oscillator: {
        type: typeChosen
      }
    })
    
    // const typeChosen = type.value

    // const newTone = new Tone.Synth().Oscillator()

    // newTone.typeChosen.triggerAttackRelease('E5', '32n').toMaster()

    synth.triggerAttackRelease('E5', '32n').toMaster()

  }
  triggerNoteF5(pickedType) {
    console.log(pickedType.value);
    const typeChosen = pickedType.value
    let synth = new Tone.Synth({
      Oscillator: {
        type: typeChosen
      }
    })
    
    // const typeChosen = type.value

    // const newTone = new Tone.Synth().Oscillator()

    // newTone.typeChosen.triggerAttackRelease('F5', '32n').toMaster()

    synth.triggerAttackRelease('F5', '32n').toMaster()

  }
  triggerNoteG5(pickedType) {
    console.log(pickedType.value);
    const typeChosen = pickedType.value
    let synth = new Tone.Synth({
      Oscillator: {
        type: typeChosen
      }
    })
    
    // const typeChosen = type.value

    // const newTone = new Tone.Synth().Oscillator()

    // newTone.typeChosen.triggerAttackRelease('G5', '32n').toMaster()

    synth.triggerAttackRelease('G5', '32n').toMaster()

  }
  triggerNoteA5(pickedType) {
    console.log(pickedType.value);
    const typeChosen = pickedType.value
    let synth = new Tone.Synth({
      Oscillator: {
        type: typeChosen
      }
    })

    // const typeChosen = type.value

    // const newTone = new Tone.Synth().Oscillator()

    // newTone.typeChosen.triggerAttackRelease('A5', '32n').toMaster()
    

    synth.triggerAttackRelease('A5', '32n').toMaster()

  }
  triggerNoteB5(pickedType) {
    console.log(pickedType.value);
    const typeChosen = pickedType.value
    let synth = new Tone.Synth({
      Oscillator: {
        type: typeChosen
      }
    })

    // const typeChosen = type.value

    // const newTone = new Tone.Synth().Oscillator()

    // newTone.typeChosen.triggerAttackRelease('B5', '32n').toMaster()
    

    synth.triggerAttackRelease('B5', '32n').toMaster()

  }
  triggerNoteC6(pickedType) {
    console.log(pickedType.value);
    const typeChosen = pickedType.value
    let synth = new Tone.Synth({
      Oscillator: {
        type: typeChosen
      }
    })

    // newTone.typeChosen.triggerAttackRelease('C6', '32n').toMaster()
    

    synth.triggerAttackRelease('C6', '32n').toMaster()

  }
  removeSynth(keyToRemove) {
    const dbRef = firebase.database().ref(keyToRemove.value);
    console.log(dbRef);
    // firebase.database().ref(`types/${keyToRemove}`).remove();
    dbRef.remove();

  }
  render() {
    return (
      <div className="main">
        <h1 className="title">SYNTHMAKER</h1>
        <div className="wrapper">
          <div className="forms">
            <div>
              <form className="form" action="" onSubmit={this.handleSubmitForSawtooth}>
                Sawtooth<input type="checkbox" name="oscillator" value="sawtooth" ref={ref => this.sawtoothChoice = ref} />
                <input type="submit" value="Add Synth!" />
              </form>
            </div>
            <div>
              <form className="form" action="" onSubmit={this.handleSubmitForSine}>
                Sine<input type="checkbox" name="oscillator" value="sine" ref={ref => this.sineChoice = ref} />
                <input type="submit" value="Add Synth!" />
              </form>
            </div>
            <div>
              <form className="form" action="" onSubmit={this.handleSubmitForTriangle}>
                Triangle<input type="checkbox" name="oscillator" value="triangle" ref={ref => this.triangleChoice = ref} />
                <input type="submit" value="Add Synth!" />
              </form>
            </div>
            <div>
              <form className="form" action="" onSubmit={this.handleSubmitForSquare}>
                Square<input type="checkbox" name="oscillator" value="square" ref={ref => this.squareChoice = ref} />
                <input type="submit" value="Add Synth!" />
              </form>
            </div>
            
            
            
          </div>
          <section className="synths">
            {this.state.types.map((typePicked) => {
              return <NewSynth 
                pickedType={typePicked.value}
                triggerNoteC5={this.triggerNoteC5}
                triggerNoteD5={this.triggerNoteD5}
                triggerNoteE5={this.triggerNoteE5}
                triggerNoteF5={this.triggerNoteF5}
                triggerNoteG5={this.triggerNoteG5}
                triggerNoteA5={this.triggerNoteA5}
                triggerNoteB5={this.triggerNoteB5}
                triggerNoteC6={this.triggerNoteC6}
                removeSynth={this.removeSynth}
                firebaseKey={typePicked.key}/>
            }

            )}
          </section>
          {/* <footer>
            <h5>CLINT LEE ©</h5>
          </footer> */}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
