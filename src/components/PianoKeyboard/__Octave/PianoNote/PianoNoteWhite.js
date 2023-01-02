import './_white/piano-note_white.css';
import './piano-note.css';

function PianoNoteWhite(props) {

    return (
        <button className='piano-note piano-note_white'>
            {props.pos}
        </button>
    )
}

export default PianoNoteWhite;