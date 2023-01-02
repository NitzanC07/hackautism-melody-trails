import './piano-keyboard.css';
import PianoKeyboardOctave from './__Octave/PianoKeyboardOctave';


function PianoKeyboard(props) {

    return (
        <div className="piano-keyboard">

            <PianoKeyboardOctave />
            <PianoKeyboardOctave />
            <PianoKeyboardOctave />
                
        </div>
    )
}

export default PianoKeyboard;

