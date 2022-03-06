import { GenreResponseProps } from "../App";

import "../styles/header.scss";

interface HeaderProps {
    selectedGenre: GenreResponseProps;
}

export function Header({ selectedGenre }: HeaderProps) {
    return (
        <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    );
};
