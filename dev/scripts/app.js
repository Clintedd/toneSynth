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
    this.sequencerStop = this.sequencerStop.bind(this);
    this.synthSequencer = this.synthSequencer.bind(this);
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
    const synth = new Tone.MonoSynth({ 
      oscillator: { 
        type: typeChosen 
      },
      filter: {
        type: 'highpass'
      } 
    })
    synth.triggerAttackRelease(key, '32n').toMaster()

  }
  sequencerStop(e) {
    e.preventDefault();
    Tone.Transport.stop();
  }
  synthSequencer(pickedType) {
    const sequencerType = pickedType

    const synths = [
      new Tone.MonoSynth(),
      new Tone.MonoSynth(),
      new Tone.MonoSynth(),
      new Tone.MonoSynth(),
      new Tone.MonoSynth(),
      new Tone.MonoSynth(),
      new Tone.MonoSynth(),
      new Tone.MonoSynth()
    ]

    synths[0].oscillator.type = sequencerType;
    synths[1].oscillator.type = sequencerType;
    synths[2].oscillator.type = sequencerType;
    synths[3].oscillator.type = sequencerType;
    synths[4].oscillator.type = sequencerType;
    synths[5].oscillator.type = sequencerType;
    synths[6].oscillator.type = sequencerType;
    synths[7].oscillator.type = sequencerType;

    synths.forEach(synth => synth.toMaster());

    const container = document.querySelector("#sequencer");

    const rows = container.querySelectorAll('div.checkboxlayer2 > div'),
          notes = ['C5','D5','E5','F5','G5','A5','B5','C6']
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, '8n');
    Tone.Transport.start();

    function repeat(time) {
      let step = index % 8;
      for (let i = 0; i < rows.length; i++) {
        let synth = synths[i],
            note = notes[i],
            row = rows[i],
            input = row.querySelector(`input:nth-child(${step + 1})`);
        if (input.checked)
        synth.triggerAttackRelease(note, '8n', time);
      }
      index++;
    }
  }

  removeSynth(keyToRemove) {
    const dbRef = firebase.database().ref(`types/${keyToRemove}`)
    dbRef.remove();

  }

  render() {
    return (
      <div className="main">
        <div className="titleWrapper">
          <h1 className="title">SYNTHMAKER</h1>
        </div>
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
                synthSequencer={this.synthSequencer}
                sequencerStop={this.sequencerStop}
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