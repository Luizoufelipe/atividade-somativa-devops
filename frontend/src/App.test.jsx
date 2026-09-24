import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Suíte de Testes - MP3 Player', () => {
    
    it('Deve renderizar o cabeçalho e os menus principais', () => {
        render(<App />);
        expect(screen.getByText('MP3 Player')).toBeInTheDocument();
        expect(screen.getByText('Início')).toBeInTheDocument();
    });

    it('Deve exibir a mensagem de orientação inicial quando não houver músicas', () => {
        render(<App />);
        expect(screen.getByText(/Clique em "Nova Playlist"/i)).toBeInTheDocument();
    });

    it('Deve exibir aviso na barra de controle quando nenhuma música foi clicada', () => {
        render(<App />);
        expect(screen.getByText('Nenhuma música selecionada')).toBeInTheDocument();
    });

    it('Deve existir um botão capaz de acionar a seleção de arquivos', () => {
        render(<App />);
        const botaoNovaPlaylist = screen.getByText('Nova Playlist');
        expect(botaoNovaPlaylist).toBeInTheDocument();
    });

    it('Deve conter um input oculto configurado para aceitar diretórios (webkitdirectory)', () => {
        const { container } = render(<App />);
        const inputFicheiro = container.querySelector('input[type="file"]');
        expect(inputFicheiro).toBeInTheDocument();
        expect(inputFicheiro.style.display).toBe('none');
        expect(inputFicheiro.getAttribute('webkitdirectory')).toBe('true');
    });
});