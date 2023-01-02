import './_none/piano-note_none.css';
import './piano-note.css';

function PianoNoteNone(props) {

    return (
        <button className='piano-note piano-note_none'>
            {props.note} {props.pos}
        </button>    
    )
}

export default PianoNoteNone;