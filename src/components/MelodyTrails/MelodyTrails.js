import BottomAreaMelody from './BottomAreaMelody/BottomAreaMelody';
import MainAreaMelody from './MainAreaMelody/MainAreaMelody';
import TopAreaMelody from './TopAreaMelody/TopAreaMelody';
import './melody-trails.css';


function MelodyTrails(props) {

    return (
        <section className="melody-trails">
            
            <TopAreaMelody />

            <MainAreaMelody /> 

            <BottomAreaMelody />

        </section>
    )
}

export default MelodyTrails;