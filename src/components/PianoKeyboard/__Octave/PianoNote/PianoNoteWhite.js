import './_white/piano-note_white.css';
import './piano-note.css';

function PianoNoteWhite(props) {

    return (
        <button 
            className='piano-note piano-note_white' 
            id={props.pos}
        >
            {props.pos} {props.note}
        </button>
    )
}

export default PianoNoteWhite;