import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

export function TrackList() {
    const { currentTrack, trackList, isPlaying, playTrack } = useMusicPlayer();

    return (
        <>
            {trackList.map((track, index) => (
                <div className="box" key={index}>
                    <button className="button" onClick={() => playTrack(index)}>
                        <FontAwesomeIcon icon={currentTrack.index === index && isPlaying ? faPause : faPlay} />
                    </button>
                    <div className='song-title'>
                        {track.name}
                    </div>
                </div>
            ))}
        </>
    );
}
