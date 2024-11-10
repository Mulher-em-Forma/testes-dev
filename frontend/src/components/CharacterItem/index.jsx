import './characterItem.css';
import { Link } from 'react-router-dom';
import CharacterField from '../CharacterField';

export default function CharacterItem({ character }) {
    const characterKeys = ['gender', 'status', 'location', 'totalSeasonAppearances', 'seasons'];

    return (
        <Link to={`/${character.id}`} className='character-item-wrapper'>
            <li className='character-item'>
                <h2 className='character-name'>{character.name}</h2>
                <img src={character.image} alt={`photo of ${character.name}`} />
                {Object.keys(character).map((key, index) => {
                    const foundKey = characterKeys.find(k => k === key);
                    if (foundKey && foundKey === 'seasons') {
                        return (
                            <div key={index}>
                                {character.seasons.map((season, index) => {
                                    return <CharacterField key={index} title={`season ${season.number} appearances`} value={season.appearances} />
                                })}
                            </div>
                        )
                    } else if (foundKey && foundKey === 'location') {
                        return <CharacterField key={index} title='last seen' value={character[key]} />
                    } else if (foundKey) {
                        return <CharacterField key={index} title={key} value={character[key]} />
                    }
                })}
            </li>
        </Link>
    )
}