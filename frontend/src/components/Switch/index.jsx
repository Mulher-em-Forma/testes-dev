import './switch.css';
import { useContext } from 'react';
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { ThemeContext } from '../../App';

export default function Switch() {
    const [isDark, setIsDark] = useContext(ThemeContext);

    const handleCheckState = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark-theme');
    }

    return (
        <label htmlFor="checkbox" className="switch">
            <input
                id="checkbox"
                type="checkbox"
                checked={isDark}
                onChange={() => handleCheckState()}
            />
            <div className='slider'>
                {
                    isDark ?
                        <IoMoon color='white' size='32px' />
                        :
                        <IoSunny color='black' size='32px' />
                }
            </div>
        </label>
    )
}