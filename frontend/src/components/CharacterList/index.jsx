import './characterList.css';
import CharacterItem from '../CharacterItem';

export default function CharacterList({ characters }) {

    return (
        <ul className='character-list'>
            {characters.map(character => {
                return <CharacterItem key={character.id} character={character} />
            })}
        </ul>
    )
}