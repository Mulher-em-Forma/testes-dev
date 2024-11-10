import './characterInfo.css';
import CharacterField from '../CharacterField/';

export default function CharcaterInfo({ character }) {
    const invalidKeys = ['image', 'name', 'id'];

    return (
        <div className='character-info-wrapper'>
            <div className='character-info'>
                <h2 className='character-info-title'>{character.name}</h2>
                <div className='character-info-content'>
                    <img className='character-info-img' src={character.image} alt={`${character.name}'s photo`} />
                    <ul className='character-info-list'>
                        {Object.keys(character).map((key, index) => {
                            const invalidKey = invalidKeys.find(k => k === key);
                            if (invalidKey) return null;

                            if (typeof character[key] !== 'object' || !Array.isArray(character[key])) {
                                return (
                                    <CharacterField key={index} title={key} value={character[key]} />
                                )
                            }
                        })}
                        {character.seasons.map((season, index) => {
                            return <CharacterField key={index} title={`season ${season.number} appearances`} value={season.appearances} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}