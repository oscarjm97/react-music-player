import { useContext } from 'react';
import { MusicPlayerContext } from '../contexts/MusicPlayerContext';

export function useMusicPlayer() {
    const [data, setData] = useContext(MusicPlayerContext);

    const playTrack = (newTrackIndex) => {
        if (data.currentTrackIndex === newTrackIndex) {
            togglePlay();
        } else {
            data.audioPlayer.pause();
            data.audioPlayer = new Audio(data.tracks[newTrackIndex].file);
            data.audioPlayer.play();
            setData({ ...data, currentTrackIndex: newTrackIndex, isPlaying: true });
        }
    }

    const togglePlay = () => {
        if (data.isPlaying) {
            data.audioPlayer.pause();
        } else {
            data.audioPlayer.play();
        }
        setData({ ...data, isPlaying: !data.isPlaying });
    }

    const playPreviousTrack = () => {
        const newTrackIndex =
            data.currentTrackIndex === 0
                ? (data.tracks.length - 1)
                : (data.currentTrackIndex - 1);
        playTrack(newTrackIndex);
    }

    const playNextTrack = () => {
        const newTrackIndex =
            data.currentTrackIndex === (data.tracks.length - 1)
                ? 0
                : (data.currentTrackIndex + 1);
        playTrack(newTrackIndex);
    }

    return {
        playTrack,
        togglePlay,
        playPreviousTrack,
        playNextTrack,
        trackList: data.tracks,
        currentTrack: {
            index: data.currentTrackIndex,
            name: data.tracks[data.currentTrackIndex]?.name
        },
        isPlaying: data.isPlaying
    }
}
