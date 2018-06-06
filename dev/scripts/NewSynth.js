import React from 'react';

const NewSynth = (props) => {
    return (
        <div className="checkboxes" id="sequencer">
            <i className="fas fa-times" onClick={() => props.removeSynth(props.firebaseKey)}></i>
            <div className="checkboxlayer1">
                <div className="checkboxlayer2">
                    <div>
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} />
                    </div>
                    <div>
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} />
                    </div>
                    <div>
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} />
                    </div>
                    <div>
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} />
                    </div>
                    <div>
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} />
                    </div>
                    <div>
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} />
                    </div>
                    <div>
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} />
                    </div>
                    <div>
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} />
                    </div>
                </div>
                <input type="submit" value="PLAY" onClick={() => props.synthSequencer(props.pickedType, props.pickedFilter)} />
                <input type="submit" value="STOP" onClick={(e) => props.sequencerStop(e)} />
            </div>
        </div>
    )
}

export default NewSynth;