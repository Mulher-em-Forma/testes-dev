import './home.css';
import CharacterList from '../../components/CharacterList';
import useFetch from '../../hooks/useFetch';

export default function HomePage() {
    const { data: characters, isLoading, error } = useFetch('http://localhost:3000/characters/');

    return (
        <main className='main-content'>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            {characters && <CharacterList characters={characters} />}
        </main>
    )
}