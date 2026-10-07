import { Link } from "react-router-dom";

export function Header() {
    return (
        <div>
            <h1>Movies application</h1>
             <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/movies"}>Movies</Link></li>
            </ul>
        </div>
    );
}