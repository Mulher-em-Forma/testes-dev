import { useParams } from 'react-router-dom';
import CharacterInfo from '../../components/CharacterInfo';
import useFetch from '../../hooks/useFetch';
import './characterPage.css';

export default function CharacterPage() {
    const { id } = useParams();
    const { data: character, isLoading, error } = useFetch(`http://localhost:3000/characters/${id}`);

    return (
        <main className='main-content'>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
            {character && <CharacterInfo character={character} />}
        </main>
    )
}