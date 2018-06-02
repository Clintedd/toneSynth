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
    this.handleSubmitType = this.handleSubmitType.bind(this);
    this.handleSubmitForSawtooth = this.handleSubmitForSawtooth.bind(this);
    this.handleSubmitForSine = this.handleSubmitForSine.bind(this);
    this.handleSubmitForSquare = this.handleSubmitForSquare.bind(this);
    this.handleSubmitForTriangle = this.handleSubmitForTriangle.bind(this);
    this.triggerNote = this.triggerNote.bind(this);
    // this.triggerNoteC5 = this.triggerNoteC5.bind(this);
    // this.triggerNoteD5 = this.triggerNoteD5.bind(this);
    // this.triggerNoteE5 = this.triggerNoteE5.bind(this);
    // this.triggerNoteF5 = this.triggerNoteF5.bind(this);
    // this.triggerNoteG5 = this.triggerNoteG5.bind(this);
    // this.triggerNoteA5 = this.triggerNoteA5.bind(this);
    // this.triggerNoteB5 = this.triggerNoteB5.bind(this);
    // this.triggerNoteC6 = this.triggerNoteC6.bind(this);
    this.removeSynth = this.removeSynth.bind(this);

  }
  componentDidMount() {
    const dbRef = firebase.database().ref('types');
    dbRef.on('value', (snapshot) => {
      const synthArray = [];
      const data = snapshot.val();
      for (let item in data) {
        data[item].key = item;
        synthArray.push(data[item])
      }
        this.setState({
          types: synthArray
        })
    })
  }
  handleChange(e) {
    e.preventDefault();
    

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

  handleSubmitType(e) {
    e.preventDefault();
    const type = {
      value: this.typeChoice.value
    }
    const dbRef = firebase.database().ref('types')

    dbRef.push(type)

  }

  handleSubmitForSine(e) {
    e.preventDefault();
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
  triggerNote(pickedType, key) {
    const typeChosen = pickedType
    const synth = new Tone.MonoSynth({ oscillator: { type: typeChosen } })

    // const typeChosen = type.value

    // const newTone = new Tone.Synth().Oscillator()

    // newTone.typeChosen.triggerAttackRelease('C5', '32n').toMaster()


    synth.triggerAttackRelease(key, '32n').toMaster()

  }

  removeSynth(keyToRemove) {
    // const dbRef = firebase.database().ref(keyToRemove.value);
    // console.log(keyToRemove.value);
    // console.log(dbRef);
    const dbRef = firebase.database().ref(`types/${keyToRemove}`)
    dbRef.remove();

  }
  render() {
    return (
      <div className="main">
        <h1 className="title">SYNTHMAKER</h1>
        <div className="wrapper">
          <div className="forms">
            <div>
              <form action="" onSubmit={this.handleSubmitType}>
                <select name="types" id="">
                  <option value="sawtooth" ref={ref => this.typeChoice = ref} >Sawtooth</option>
                  <option value="sine" ref={ref => this.typeChoice = ref}>Sine</option>
                  <option value="triangle" ref={ref => this.typeChoice = ref} >Triangle</option>
                  <option value="square" ref={ref => this.typeChoice = ref}>Square</option>
                </select>
                <input type="submit" value="Add Synth!"/>
              </form>
            </div>
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
                triggerNote={this.triggerNote}
                // triggerNoteC5={this.triggerNoteC5}
                // triggerNoteD5={this.triggerNoteD5}
                // triggerNoteE5={this.triggerNoteE5}
                // triggerNoteF5={this.triggerNoteF5}
                // triggerNoteG5={this.triggerNoteG5}
                // triggerNoteA5={this.triggerNoteA5}
                // triggerNoteB5={this.triggerNoteB5}
                // triggerNoteC6={this.triggerNoteC6}
                removeSynth={this.removeSynth}
                firebaseKey={typePicked.key} />
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