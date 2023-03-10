import './_black/piano-note_black.css';
import './piano-note.css';

function PianoNoteBlack(props) {

    return (
        <button className='piano-note piano-note_black' id={props.pos}>
            {props.pos} {props.note}
        </button>    
    )
}

export default PianoNoteBlack;