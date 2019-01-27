import React from 'react';

const NewSynth = (props) => {
    return (
        <div className="checkboxes" id="sequencer">
            <i className="fas fa-times" onClick={() => props.removeSynth(props.firebaseKey)}></i>
            <div className="checkboxlayer1">
                <div className="checkboxlayer2">
                    <div>
                        <label className="check-button check-button-c1" htmlFor="C51"><input type="checkbox" id="C51" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c1" htmlFor="C52"><input type="checkbox" id="C52" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c1" htmlFor="C53"><input type="checkbox" id="C53" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c1" htmlFor="C54"><input type="checkbox" id="C54" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c1" htmlFor="C55"><input type="checkbox" id="C55" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c1" htmlFor="C56"><input type="checkbox" id="C56" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c1" htmlFor="C57"><input type="checkbox" id="C57" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c1" htmlFor="C58"><input type="checkbox" id="C58" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} /></label>
                    </div>
                    <div>
                        <label className="check-button check-button-d1" htmlFor="D51"><input type="checkbox" id="D51" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-d1" htmlFor="D52"><input type="checkbox" id="D52" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-d1" htmlFor="D53"><input type="checkbox" id="D53" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-d1" htmlFor="D54"><input type="checkbox" id="D54" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-d1" htmlFor="D55"><input type="checkbox" id="D55" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-d1" htmlFor="D56"><input type="checkbox" id="D56" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-d1" htmlFor="D57"><input type="checkbox" id="D57" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-d1" htmlFor="D58"><input type="checkbox" id="D58" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} /></label>
                    </div>
                    <div>
                        <label className="check-button check-button-e1" htmlFor="E51"><input type="checkbox" id="E51" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-e1" htmlFor="E52"><input type="checkbox" id="E52" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-e1" htmlFor="E53"><input type="checkbox" id="E53" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-e1" htmlFor="E54"><input type="checkbox" id="E54" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-e1" htmlFor="E55"><input type="checkbox" id="E55" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-e1" htmlFor="E56"><input type="checkbox" id="E56" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-e1" htmlFor="E57"><input type="checkbox" id="E57" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-e1" htmlFor="E58"><input type="checkbox" id="E58" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} /></label>
                    </div>
                    <div>
                        <label className="check-button check-button-f1" htmlFor="F51"><input type="checkbox" id="F51" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-f1" htmlFor="F52"><input type="checkbox" id="F52" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-f1" htmlFor="F53"><input type="checkbox" id="F53" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-f1" htmlFor="F54"><input type="checkbox" id="F54" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-f1" htmlFor="F55"><input type="checkbox" id="F55" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-f1" htmlFor="F56"><input type="checkbox" id="F56" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-f1" htmlFor="F57"><input type="checkbox" id="F57" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-f1" htmlFor="F58"><input type="checkbox" id="F58" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} /></label>
                    </div>
                    <div>
                        <label className="check-button check-button-g1" htmlFor="G51"><input type="checkbox" id="G51" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-g1" htmlFor="G52"><input type="checkbox" id="G52" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-g1" htmlFor="G53"><input type="checkbox" id="G53" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-g1" htmlFor="G54"><input type="checkbox" id="G54" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-g1" htmlFor="G55"><input type="checkbox" id="G55" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-g1" htmlFor="G56"><input type="checkbox" id="G56" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-g1" htmlFor="G57"><input type="checkbox" id="G57" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-g1" htmlFor="G58"><input type="checkbox" id="G58" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} /></label>
                    </div>
                    <div>
                        <label className="check-button check-button-a1" htmlFor="A51"><input type="checkbox" id="A51" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-a1" htmlFor="A52"><input type="checkbox" id="A52" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-a1" htmlFor="A53"><input type="checkbox" id="A53" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-a1" htmlFor="A54"><input type="checkbox" id="A54" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-a1" htmlFor="A55"><input type="checkbox" id="A55" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-a1" htmlFor="A56"><input type="checkbox" id="A56" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-a1" htmlFor="A57"><input type="checkbox" id="A57" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-a1" htmlFor="A58"><input type="checkbox" id="A58" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} /></label>
                    </div>
                    <div>
                        <label className="check-button check-button-b1" htmlFor="B51"><input type="checkbox" id="B51" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-b1" htmlFor="B52"><input type="checkbox" id="B52" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-b1" htmlFor="B53"><input type="checkbox" id="B53" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-b1" htmlFor="B54"><input type="checkbox" id="B54" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-b1" htmlFor="B55"><input type="checkbox" id="B55" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-b1" htmlFor="B56"><input type="checkbox" id="B56" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-b1" htmlFor="B57"><input type="checkbox" id="B57" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} /></label>
                        <label className="check-button check-button-b1" htmlFor="B58"><input type="checkbox" id="B58" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} /></label>
                    </div>
                    <div>
                        <label className="check-button check-button-c2" htmlFor="C61"><input type="checkbox" id="C61" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c2" htmlFor="C62"><input type="checkbox" id="C62" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c2" htmlFor="C63"><input type="checkbox" id="C63" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c2" htmlFor="C64"><input type="checkbox" id="C64" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c2" htmlFor="C65"><input type="checkbox" id="C65" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c2" htmlFor="C66"><input type="checkbox" id="C66" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c2" htmlFor="C67"><input type="checkbox" id="C67" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} /></label>
                        <label className="check-button check-button-c2" htmlFor="C68"><input type="checkbox" id="C68" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} /></label>
                    </div>
                </div>
                <input type="submit" value="PLAY" onClick={() => props.synthSequencer(props.pickedType, props.pickedFilter)} />
                <input type="submit" className="stopButton" value="STOP" onClick={(e) => props.sequencerStop(e)} />
            </div>
        </div>
    )
}

export default NewSynth;