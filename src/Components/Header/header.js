import "./header.css";
import MenuIcon from "../../img/menu.png";
import MainIcon from "../../img/hand-made.png";
import ShopCard from "../../img/basket.png";

const Header = () => {
    return (
        <header className="header">
            <div className="menu-block">
                <div className="menu-btn">
                    <img className="icon" src={MenuIcon} alt="menu icon" />
                </div>
                <ul className="dropdown-menu">
                    <li className="dropdown-item"><a href="#">Bath</a></li>
                    <li className="dropdown-item"><a href="#">Candles</a></li>
                    <li className="dropdown-item"><a href="#">Clay</a></li>
                    <li className="dropdown-item"><a href="#">Cosmetics</a></li>
                    <li className="dropdown-item"><a href="#">Clothes</a></li>
                    <li className="dropdown-item"><a href="#">Jewelry</a></li>
                </ul>
            </div>

            <div className="name-block">
                <div className="main-icon-block">
                    <img className="icon" src={MainIcon} alt="main icon" />
                </div>
                <div>YaKisuh</div>
            </div>

            <div className="card-block" type="button">
                <img className="icon" src={ShopCard} alt="shop card icon" />
            </div>

        </header>

    )
}

export default Header;