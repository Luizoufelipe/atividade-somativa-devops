import './App.css'
import {
    FiHome,
    FiPlusSquare,
    FiSearch,
    FiSkipBack,
    FiPlay,
    FiSkipForward,
    FiShuffle,
    FiRepeat
} from 'react-icons/fi'
import { 
    Screen, 
    Header,
    Button, 
    SideMenu, 
    MainContent,
    ControlBar,
    PlaylistCard
 } from './components'


 function App() {

    const playlists = [
        { title: 'Favoritas', trackCount: 12 },
        { title: 'Rock', trackCount: 25 },
        { title: 'Pop', trackCount: 18 },
        { title: 'Relax', trackCount: 9 },
        { title: 'Para estudar', trackCount: 31 }
    ]

    return (
        <Screen>

                <SideMenu>
                    <Button>
                        <FiHome aria-hidden="true" />
                        <span>Início</span>
                    </Button>
                    
                    <Button>
                        <FiPlusSquare aria-hidden='true' />
                        <span>Nova Playlist</span>
                    </Button>
                </SideMenu>

                <Header>
                    <Button>MP3 Player</Button>
                    <Button aria-label='Procurar' >
                        <FiSearch aria-hidden="true" />
                    </Button>
                </Header>

                <MainContent>
                    {playlists.map((playlist) => (
                        <PlaylistCard
                            key={playlist.title}
                            title={playlist.title}
                            trackCount={playlist.trackCount}
                        />
                    ))}
                </MainContent>
                
                <ControlBar>
                    <Button aria-label="Modo aleatório" className='control-button'>
                        <FiShuffle aria-hidden="true" />
                    </Button>

                    <Button aria-label="Música anterior" className='control-button'>
                        <FiSkipBack aria-hidden="true" />
                    </Button>

                    <Button aria-label="Reproduzir" className='control-button'>
                        <FiPlay aria-hidden="true" /> 
                    </Button>

                    <Button aria-label="Próxima música" className='control-button'>
                        <FiSkipForward aria-hidden="true" />
                    </Button>

                    <Button aria-label="Repetir música" className='control-button'>
                        <FiRepeat aria-hidden="true" />
                    </Button>

                </ControlBar>

            </Screen>
    )
 }

export default App
