import './App.css'
import { 
    Screen, 
    Header,
    Button, 
    SideMenu, 
    MainContent,
    ControlBar
 } from './components'


 function App() {
    return (
        <Screen>

                <SideMenu>
                    <Button>Início</Button>
                    <Button>Nova Playlist</Button>
                </SideMenu>

                <Header>
                    <Button>MP3 Player</Button>
                    <Button>Procurar</Button>
                </Header>

                <MainContent/>
                
                <ControlBar>
                    <Button aria-label="Música anterior" className='control-button'>{'<'}</Button>
                    <Button aria-label="Pausar" className='control-button'>||</Button>
                    <Button aria-label="Próxima música" className='control-button'>{'>'}</Button>
                </ControlBar>

            </Screen>
    )
 }

export default App
