import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <nav className="navbar is-warning">
            <div className="navbar-brand">
                <a href="/" className="navbar-item">
                    {props.title}
                </a>
            </div>
        </nav>
    );
};

export default Header;
