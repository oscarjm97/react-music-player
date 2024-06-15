import { PlayerControls } from './components/PlayerControls'
import { TrackList } from './components/TrackList'
import { MusicPlayerProvider } from './contexts/MusicPlayerContext'

function App() {
    return (
        <MusicPlayerProvider>
            <div className='container'>
                <TrackList />
                <PlayerControls />
            </div>
        </MusicPlayerProvider>
    )
}

export default App
