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
      filter: '',
      types: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleSubmitType = this.handleSubmitType.bind(this);
    this.triggerNote = this.triggerNote.bind(this);
    this.removeSynth = this.removeSynth.bind(this);
    // this.sequencerStop = this.sequencerStop.bind(this);
    // this.synthSequencer = this.synthSequencer.bind(this);

  }
  componentDidMount(e) {
    window.addEventListener('keydown', function (e) {
      console.log(e.keyCode);
    })

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

  handleChangeFilter(e) {
    const filter = e.target.value;
    console.log(filter);

    this.setState({
      filter: filter
    })
  }

  handleChangeType(e) {
    const type = e.target.value;
    console.log(type);
    
    this.setState({
      type: type
    })
  }

  handleSubmitType(e) {
    e.preventDefault();
    const type = {
      value: this.typeChoice.value,
      filter: this.filterChoice.value
    }
    console.log(type);
    const dbRef = firebase.database().ref('types')
    const dbRefRemove = firebase.database().ref()

    dbRefRemove.remove();
    dbRef.push(type);
    console.log(dbRef);
  }


  triggerNote(pickedType, key, pickedFilter) {
    const typeChosen = pickedType
    const filterChosen = pickedFilter
    

    const synth = new Tone.MonoSynth({ 
      oscillator: { 
        type: typeChosen 
      },
      filter: {
        type: filterChosen
      },
      envelope: {
        attack: 0.005,
        decay: 0.003
      }
    })

    synth.triggerAttackRelease(key, '32n').toMaster()
  }

  // addDistortion() {
  //   var distortion = new Tone.Distortion(0.4).toMaster();
  //   synth.connect(distortion);
  // }

  // sequencerStop(e) {
  //   e.preventDefault();
  //   Tone.Transport.stop();
  // }
  // synthSequencer(pickedType, pickedFilter) {
  //   const sequencerType = pickedType
  //   const sequencerFilter = pickedFilter

  //   const synths = [
  //     new Tone.MonoSynth(),
  //     new Tone.MonoSynth(),
  //     new Tone.MonoSynth(),
  //     new Tone.MonoSynth(),
  //     new Tone.MonoSynth(),
  //     new Tone.MonoSynth(),
  //     new Tone.MonoSynth(),
  //     new Tone.MonoSynth()
  //   ]

  //   synths[0].oscillator.type = sequencerType;
  //   synths[1].oscillator.type = sequencerType;
  //   synths[2].oscillator.type = sequencerType;
  //   synths[3].oscillator.type = sequencerType;
  //   synths[4].oscillator.type = sequencerType;
  //   synths[5].oscillator.type = sequencerType;
  //   synths[6].oscillator.type = sequencerType;
  //   synths[7].oscillator.type = sequencerType;

  //   synths[0].filter.type = sequencerFilter;
  //   synths[1].filter.type = sequencerFilter;
  //   synths[2].filter.type = sequencerFilter;
  //   synths[3].filter.type = sequencerFilter;
  //   synths[4].filter.type = sequencerFilter;
  //   synths[5].filter.type = sequencerFilter;
  //   synths[6].filter.type = sequencerFilter;
  //   synths[7].filter.type = sequencerFilter;
    

  //   synths.forEach(synth => synth.toMaster());

  //   const container = document.querySelector("#sequencer");

  //   const rows = container.querySelectorAll('div.checkboxlayer2 > div'),
  //         notes = ['C5','D5','E5','F5','G5','A5','B5','C6']
  //   let index = 0;

  //   Tone.Transport.scheduleRepeat(repeat, '8n');
  //   Tone.Transport.start();

  //   function repeat(time) {
  //     let step = index % 8;
  //     for (let i = 0; i < rows.length; i++) {
  //       let synth = synths[i],
  //           note = notes[i],
  //           row = rows[i],
  //           input = row.querySelector(`input:nth-child(${step + 1})`);
  //       if (input.checked)
  //       synth.triggerAttackRelease(note, '8n', time);
  //     }
  //     index++;
  //     Tone.currentTime = 0;
  //   }
  // }

  removeSynth(keyToRemove) {
    const dbRef = firebase.database().ref(`types/${keyToRemove}`)
    dbRef.remove();
  }

  render() {
    return (
      <body>
        <header className="main">
          <div className="titleWrapper">
            <h1 className="title">SYNTHMAKER</h1>
          </div>
          <div className="wrapper">
            <div className="forms">
              <form action="" onSubmit={this.handleSubmitType}>
                <div className="select-style">
                  <h5 className="select-title">Type</h5>
                  <select name="types" id="" ref={ref => this.typeChoice = ref} onChange={this.handleChangeType}>
                    <option value="sawtooth" >Sawtooth</option>
                    <option value="sine" >Sine</option>
                    <option value="triangle" >Triangle</option>
                    <option value="square" >Square</option>
                  </select>
                </div>
                <div className="select-style">
                  <h5 className="select-title">Filter</h5>
                  <select name="filters" id="" ref={ref => this.filterChoice = ref} onChange={this.handleChangeFilter}>
                    <option value="lowpass">Lowpass</option>
                    <option value="highpass">Highpass</option>
                    <option value="bandpass">Bandpass</option>
                    <option value="lowshelf">Lowshelf</option>
                    <option value="highshelf">Highshelf</option>
                    <option value="notch">Notch</option>
                    <option value="allpass">Allpass</option>
                    <option value="peaking">Peaking</option>
                  </select>
                </div>
                <input type="submit" value="Play Synth!"/>
              </form>
            </div>
            <section>
              {this.state.types.map((typePicked) => {
                return <NewSynth
                  key={typePicked.key}
                  pickedFilter={typePicked.filter}
                  pickedType={typePicked.value}
                  triggerNote={this.triggerNote}
                  synthSequencer={this.synthSequencer}
                  sequencerStop={this.sequencerStop}
                  removeSynth={this.removeSynth}
                  firebaseKey={typePicked.key} />
                }
              )}
            </section>
          </div>
        </header>
        <footer>
          © Made by Clint Lee
        </footer>
      </body>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));