import './_white/piano-note_white.css';
import './piano-note.css';
import { useEffect, useRef } from 'react';

function PianoNoteWhite(props) {

    const audioCtx = useRef(new AudioContext());
    const oscillator = useRef(audioCtx.current.createOscillator());

    useEffect(() => {
        oscillator.current.type = 'sine';
        oscillator.current.frequency.value = 440;
        oscillator.current.connect(audioCtx.current.destination);

        // return () => {
        //     oscillator.current.stop();
        // }
    }, []);

    function handlePlayNote() {
        console.log(`Play ${props.pos} ${props.note}\n${audioCtx}`);
        oscillator.current.start();
        setTimeout(() => {
            oscillator.current.stop();
        }, 1000)
    }

    return (
        <button 
            className='piano-note piano-note_white' 
            id={props.pos}
            onClick={handlePlayNote}
        >
            {props.pos} {props.note}
        </button>
    )
}

export default PianoNoteWhite;