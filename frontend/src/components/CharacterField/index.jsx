import './characterField.css';

export default function CharacterField({ title, value }) {
    return (
        <div className='character-field'>
            <p className='character-field-title'>{title.replace(/([A-Z])/g, ' $1').trim().toLowerCase()}:</p>
            <p className='character-field-value'>{value}</p>
        </div>
    )
}