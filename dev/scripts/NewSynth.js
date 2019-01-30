import React from 'react';

const NewSynth = (props) => {
		return (
				<div className="checkboxes" id="sequencer">
						<div className="synth-UI">
								<div className="synth-info">
										<p>Type: </p>
										<p>{props.pickedType}</p>
										<p>Filter: </p>
										<p>{props.pickedFilter}</p>
								</div>
								<i className="fas fa-times closebutton" onClick={() => props.removeSynth(props.firebaseKey)}></i>
						</div>
						<div className="checkboxlayer1">
								<div className="checkboxlayer2">
										<div>
												<label className="check-button check-button-wt" htmlFor="B41">
														<input
																type="checkbox"
																id="B41"
																onChange={() => props.triggerNote(props.pickedType, 'B4', props.pickedFilter)}
														/>

												</label>
										</div>
										<div>
												<label className="check-button check-button-wt" htmlFor="C51"><input type="checkbox" id="C51" onChange={() => props.triggerNote(props.pickedType, 'C5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-bk" htmlFor="C#51"><input type="checkbox" id="C#51" onChange={() => props.triggerNote(props.pickedType, 'C#5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-wt" htmlFor="D51"><input type="checkbox" id="D51" onChange={() => props.triggerNote(props.pickedType, 'D5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-bk" htmlFor="D#51"><input type="checkbox" id="D#51" onChange={() => props.triggerNote(props.pickedType, 'D#5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-wt" htmlFor="E51"><input type="checkbox" id="E51" onChange={() => props.triggerNote(props.pickedType, 'E5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-wt" htmlFor="F51"><input type="checkbox" id="F51" onChange={() => props.triggerNote(props.pickedType, 'F5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-bk" htmlFor="F#51"><input type="checkbox" id="F#51" onChange={() => props.triggerNote(props.pickedType, 'F#5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-wt" htmlFor="G51"><input type="checkbox" id="G51" onChange={() => props.triggerNote(props.pickedType, 'G5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-bk" htmlFor="G#51"><input type="checkbox" id="G#51" onChange={() => props.triggerNote(props.pickedType, 'G#5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-wt" htmlFor="A51"><input type="checkbox" id="A51" onChange={() => props.triggerNote(props.pickedType, 'A5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-bk" htmlFor="A#51"><input type="checkbox" id="A#51" onChange={() => props.triggerNote(props.pickedType, 'A#5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-wt" htmlFor="B51"><input type="checkbox" id="B51" onChange={() => props.triggerNote(props.pickedType, 'B5', props.pickedFilter)} /></label>
										</div>
										<div>
												<label className="check-button check-button-wt" htmlFor="C61"><input type="checkbox" id="C61" onChange={() => props.triggerNote(props.pickedType, 'C6', props.pickedFilter)} /></label>
										</div>
								</div>
								{/* <input type="submit" value="PLAY" onClick={() => props.synthSequencer(props.pickedType, props.pickedFilter)} />
								<input type="submit" className="stopButton" value="STOP" onClick={(e) => props.sequencerStop(e)} /> */}
						</div>
				</div>
		)
}

export default NewSynth;