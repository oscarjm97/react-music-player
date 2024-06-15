import { createContext, useState } from 'react';
import LostChameleon from '../assets/LostChameleon.mp3';
import Rock from '../assets/TheHipsta.mp3';
import Tobu from '../assets/Tobu.mp3';

export const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
    const [data, setData] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
                name: 'Lost Chameleon - Genesis',
                file: LostChameleon,
            },
            {
                name: 'The Hipsta - Shaken Soda',
                file: Rock,
            },
            {
                name: 'Tobu - Such Fun',
                file: Tobu,
            },
        ],
        currentTrackIndex: null,
        isPlaying: false,
    });

    return (
        <MusicPlayerContext.Provider value={[data, setData]}>
            {children}
        </MusicPlayerContext.Provider>
    );
}
