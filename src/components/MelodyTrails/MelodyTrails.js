import BottomAreaMelody from './BottomAreaMelody/BottomAreaMelody';
import MainAreaMelody from './MainAreaMelody/MainAreaMelody';
import TopAreaMelody from './TopAreaMelody/TopAreaMelody';
import logoMelodyTrails from '../../images/logoMelodyTrails.png';
import iconMenuPlay from '../../images/logos/menu-play.svg';
import iconMenuLyrics from '../../images/logos/menu-lyrics.svg';
import iconMenuMusicNote from '../../images/logos/menu-musicNote.svg';
import iconMenuRecord from '../../images/logos/menu-record.svg';
import './melody-trails.css';
import './__menu/melody-trails__menu.css';
import './__logo/melody-trails__logo.css';
import './__menu-icons/melody-trails__menu-icons.css';
import './__menu-icon/melody-trails__menu-icon.css';
import { useState } from 'react';

function MelodyTrails(props) {

    const [isMenuOpen, setMenuOpen] = useState(false);

    function handleMenuButton() {
        console.log('Button menu was clicked.');
        setMenuOpen(!isMenuOpen);
    }

    return (
        <section className="melody-trails">
            
            <TopAreaMelody />

            <MainAreaMelody /> 

            <BottomAreaMelody />

            <div className='melody-trails__menu-icons'>
                <button className="melody-trails__menu" onClick={handleMenuButton}>
                    <img className="melody-trails__logo" src={logoMelodyTrails} alt="Melody Trails's logo" />
                </button>
                {
                    isMenuOpen ?
                    <div>
                        <button 
                            className='melody-trails__menu-icon'
                            style={{'position': 'absolute', 'top': '24px', 'left': '24px'}}
                        >
                            פלייבק
                            <img src={iconMenuMusicNote} alt='Listen to palyback' />
                        </button>
                        <button 
                            className='melody-trails__menu-icon'
                            style={{'position': 'absolute', 'top': '48px', 'left': '148px'}}
                        >
                            ליווי
                            <img src={iconMenuPlay} alt='Play with soundtrack' />
                        </button>
                        <button 
                            className='melody-trails__menu-icon'
                            style={{'position': 'absolute', 'bottom': '24px', 'right': '24px'}}
                        >
                            הקלטה
                            <img src={iconMenuRecord} alt='Record playing' />
                        </button>
                        <button 
                            className='melody-trails__menu-icon'
                            style={{'position': 'absolute', 'bottom': '148px', 'right': '48px'}}
                        >
                            מילים
                            <img src={iconMenuLyrics} alt='Play with lyrics' />
                        </button>
                    </div>
                     
                :
                ""
                }
            </div>

        </section>
    )
}

export default MelodyTrails;