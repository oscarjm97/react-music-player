import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

export function PlayerControls() {
    const { currentTrack, isPlaying, playPreviousTrack, playNextTrack, togglePlay } = useMusicPlayer();

    return (
        <>
            <div className="box controls has-background-grey-dark">
                <div className="current-track has-text-light">
                    {currentTrack.name}
                </div>
                <div>
                    <button
                        className="button has-text-light has-background-grey-dark"
                        onClick={playPreviousTrack}
                        disabled={currentTrack.index === null}>
                        <FontAwesomeIcon icon={faStepBackward} />
                    </button>
                    <button
                        className="button has-text-light has-background-grey-dark"
                        onClick={togglePlay}
                        disabled={currentTrack.index === null}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                    <button
                        className="button has-text-light has-background-grey-dark"
                        onClick={playNextTrack}
                        disabled={currentTrack.index === null}>
                        <FontAwesomeIcon icon={faStepForward} />
                    </button>
                </div>
            </div>
        </>
    );
}
