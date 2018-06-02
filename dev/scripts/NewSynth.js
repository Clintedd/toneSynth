import React from 'react';

const NewSynth = (props) => {
    return (
        <div className="checkboxes">
            <i className="fas fa-times" onClick={() => props.removeSynth(props.firebaseKey)}></i>
            <div className="checkboxlayer1">
                <div className="checkboxlayer2">
                    <div>
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5')} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5')} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5')} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5')} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5')} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5')} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5')} />
                        <input type="checkbox" id="C5" onChange={() => props.triggerNote(props.pickedType, 'C5')} />
                    </div>
                    <div>
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5')} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5')} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5')} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5')} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5')} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5')} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5')} />
                        <input type="checkbox" id="D5" onChange={() => props.triggerNote(props.pickedType, 'D5')} />
                    </div>
                    <div>
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5')} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5')} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5')} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5')} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5')} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5')} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5')} />
                        <input type="checkbox" id="E5" onChange={() => props.triggerNote(props.pickedType, 'E5')} />
                    </div>
                    <div>
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5')} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5')} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5')} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5')} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5')} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5')} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5')} />
                        <input type="checkbox" id="F5" onChange={() => props.triggerNote(props.pickedType, 'F5')} />
                    </div>
                    <div>
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5')} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5')} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5')} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5')} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5')} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5')} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5')} />
                        <input type="checkbox" id="G5" onChange={() => props.triggerNote(props.pickedType, 'G5')} />
                    </div>
                    <div>
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5')} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5')} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5')} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5')} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5')} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5')} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5')} />
                        <input type="checkbox" id="A5" onChange={() => props.triggerNote(props.pickedType, 'A5')} />
                    </div>
                    <div>
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5')} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5')} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5')} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5')} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5')} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5')} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5')} />
                        <input type="checkbox" id="B5" onChange={() => props.triggerNote(props.pickedType, 'B5')} />
                    </div>
                    <div>
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6')} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6')} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6')} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6')} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6')} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6')} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6')} />
                        <input type="checkbox" id="C6" onChange={() => props.triggerNote(props.pickedType, 'C6')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewSynth;