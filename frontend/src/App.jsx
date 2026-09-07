import { Component } from 'react'
import './App.css'
import { 
    Screen, 
    Header,
    Button, 
    SideMenu, 
    MainContent
 } from './components'


class App extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        return(
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

            </Screen>
        )
    }
}

export default App
