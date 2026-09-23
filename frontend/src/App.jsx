import { useState, useRef } from 'react';
import './App.css';
import { FiHome, FiPlusSquare, FiSearch } from 'react-icons/fi';
import { 
    Screen, Header, Button, SideMenu, 
    MainContent, ControlBar, PlaylistCard 
} from './components';

export default function App() {
    const [musicas, setMusicas] = useState([]);
    const [musicaAtual, setMusicaAtual] = useState(null);
    const inputPastaRef = useRef(null);

    const processarPasta = (evento) => {
        const ficheiros = Array.from(evento.target.files);
        
        const ficheirosAudio = ficheiros.filter(ficheiro => ficheiro.type.startsWith('audio/'));

        const listaMapeada = ficheirosAudio.map((ficheiro, index) => ({
            id: index,
            nome: ficheiro.name.replace(/\.[^/.]+$/, ""), // Remove a extensão (.mp3) do nome visual
            url: URL.createObjectURL(ficheiro) // Cria o endereço em memória para a tag <audio>
        }));

        setMusicas(listaMapeada);
    };

    return (
        <Screen>
            <input
                type="file"
                webkitdirectory="true"
                directory="true"
                multiple
                ref={inputPastaRef}
                style={{ display: 'none' }}
                onChange={processarPasta}
            />

            <SideMenu>
                <Button>
                    <FiHome aria-hidden="true" /><span>Início</span>
                </Button>
                
                <Button onClick={() => inputPastaRef.current.click()}>
                    <FiPlusSquare aria-hidden='true' /><span>Nova Playlist</span>
                </Button>
            </SideMenu>

            <Header>
                <Button>MP3 Player</Button>
                <Button aria-label='Procurar'>
                    <FiSearch aria-hidden="true" />
                </Button>
            </Header>

            <MainContent>
                {musicas.length === 0 ? (
                    <p style={{ gridColumn: '1/-1', color: 'var(--cor-texto-secundario)' }}>
                        Clique em "Nova Playlist" e selecione uma pasta do seu computador.
                    </p>
                ) : (
                    musicas.map((musica) => (
                        <div 
                            key={musica.id} 
                            onClick={() => setMusicaAtual(musica)} 
                            style={{ cursor: 'pointer' }}
                        >
                            <PlaylistCard
                                title={musica.nome} 
                                trackCount="Local"
                            />
                        </div>
                    ))
                )}
            </MainContent>
            
            <ControlBar>
                {musicaAtual ? (
                    <audio 
                        controls 
                        autoPlay
                        style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
                        src={musicaAtual.url} // O browser lê os dados binários da memória
                    />
                ) : (
                    <p style={{ color: 'var(--cor-texto-secundario)', margin: '0 auto' }}>
                        Nenhuma música selecionada
                    </p>
                )}
            </ControlBar>
        </Screen>
    );
}