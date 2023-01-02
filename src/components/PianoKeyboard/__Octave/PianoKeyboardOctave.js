import './piano-keyboard__ocatve.css';
import './_black/piano-keyboard_black.css';
import './_white/piano-keyboard_white.css';
import PianoNoteWhite from './PianoNote/PianoNoteWhite';
import PianoNoteBlack from './PianoNote/PianoNoteBlack';
import PianoNoteNone from './PianoNote/PianoNoteNone';
import { useEffect, useState } from 'react';

function PianoKeyboardOctave(props) {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        setNotes(['C', 'C# / Db', 'D', 'D# / Eb', 'E', 'F', 'F# / Gb', 'G', 'G# / Ab', 'A', 'A# / Bb', 'B'])
    }, [])
    
    return(
        <div className="piano-keyboard__octave">
            
            <div className="piano-keyboard_white">
                {
                    notes.map((note, i) => (
                        [0, 2, 4, 5, 7, 9, 11].includes(i) ?
                        <PianoNoteWhite
                            key={i}
                            note={note} 
                            pos={i}
                        /> : ""
                    ))
                }
            </div>

            <div className="piano-keyboard_black">
                {
                    notes.map((note, i) => (
                        [1, 3, 6, 8, 10].includes(i) ?
                        <PianoNoteBlack
                            key={i}
                            note={note} 
                            pos={i}
                        />  
                        : 
                        i === 4 ?
                            <PianoNoteNone 
                                key={i}
                                note={'none'}
                                pos={'NA'}
                            />
                        :
                            ""  
                    ))
                }
            </div>
            
        </div>
    )
}

export default PianoKeyboardOctave;