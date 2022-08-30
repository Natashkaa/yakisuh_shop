import "./header.css";
import MenuIcon from "../../img/menu.png";
import MainIcon from "../../img/hand-made.png";
import ShopCard from "../../img/basket.png"

const Header = () => {
    return (
        <div className="header">
            <div className="menu-block">
                <div className="menu-btn">
                    <img className="icon" src={MenuIcon} alt="menu icon" />
                </div>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Bath</a></li>
                    <li><a class="dropdown-item" href="#">Candles</a></li>
                    <li><a class="dropdown-item" href="#">Clay</a></li>
                    <li><a class="dropdown-item" href="#">Cosmetics</a></li>
                    <li><a class="dropdown-item" href="#">Clothes</a></li>
                    <li><a class="dropdown-item" href="#">Jewelry</a></li>
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

        </div>

    )
}

export default Header;