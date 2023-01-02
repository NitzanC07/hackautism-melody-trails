import './_black/piano-note_black.css';
import './piano-note.css';

function PianoNoteBlack(props) {

    return (
        <button className='piano-note piano-note_black'>
            {props.pos}
        </button>    
    )
}

export default PianoNoteBlack;