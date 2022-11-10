export default class ApiService {
    _apiBaseLink = "http://localhost:5127/";
    _header = new Headers({ "Access-Control-Allow-Origin": "*" });

    async getResource(url) {
        return fetch(`${this._apiBaseLink}${url}`, {
            header: this._header
        })
            .then(res => res.json())
            .catch(error => {
                if (!error.status)
                    // throw (new Error(`Could not fetch url ${url}. Status ${error.status}`));
                    throw (new Error(`Oops. Something happend to servers`));
                else
                    throw error
            })
    }
    getAllGoods = () => this.getResource('Good/GetAll');
    getAllGoodTypes = () => this.getResource('GoodType/GetAll');
    getAllImages = () => this.getResource('GoodImage/GetAll');
}

