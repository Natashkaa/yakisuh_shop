import "./header.css";
import MenuIcon from "../../img/menu.png";
import MainIcon from "../../img/hand-made.png";
import ShopCard from "../../img/basket.png"

const Header = () => {
    return(
        <div className="header container-fluid align-items-center m-0 p-0">
            <div className="row justify-content-between m-0 p-0">
                <div className="left col-1 pl-1">
                    <div class="dropdown menu-block">
                        <button class="menu-btn btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className="icon" src={MenuIcon} alt="menu icon"/>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Bath</a></li>
                            <li><a class="dropdown-item" href="#">Candles</a></li>
                            <li><a class="dropdown-item" href="#">Clay</a></li>
                            <li><a class="dropdown-item" href="#">Cosmetics</a></li>
                            <li><a class="dropdown-item" href="#">Clothes</a></li>
                            <li><a class="dropdown-item" href="#">Jewelry</a></li>
                        </ul>
                    </div>
                </div>
                <div className="center col-2 p-1">
                    <div className="main-icon-block">
                        <img className="icon" src={MainIcon} alt="main icon"/>
                    </div>
                    <div className="name-block">
                        <div>YaKisuh</div>
                    </div>
                </div>
                <div className="right col-1 p-0 m-0">
                    <div className="shop-card-block m-0 p-0">
                        <button className="card-btn btn" type="button">
                            <img className="icon" src={ShopCard} alt="shop card icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;