import "./header.css";
import Switch from "../Switch";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../App";

export default function Header() {
    const { id } = useParams();
    const [isDark,] = useContext(ThemeContext);

    return (
        <header className="header">
            <div>
                {id && (
                    <button className="back-btn">
                        <Link to='..' className="back-btn-link">
                            <FaArrowLeft color={isDark ? 'yellow' : 'black'} />
                        </Link>
                    </button>
                )}
            </div>
            <h1 className="header-title">Rick and Morty Characters</h1>
            <Switch />
        </header>
    )
}