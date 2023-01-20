import './app.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Body from '../Body/body';
import React, { Component } from 'react';
import ApiService from '../../Services/api-service';
import ErrorBoundary from '../ErrorBoundary/error-boundary';

export default class App extends Component {
  shopApi = new ApiService();
  constructor(props) {
    super(props);
    this.state = {
      currentType: 1,
      listLength: 5,
      shopList: []
    }
  }


  changeCurrentType = (newType) => {
    this.setState({currentType: newType});
  }
  addItemToShopList = (newItem) => {
    this.setState({ listLength: this.state.listLength + 1, shopList: [...this.state.shopList, newItem]});
  }


  render() {
    return (
      <div className='app'>
        <ErrorBoundary>
          <Header getData={this.shopApi.getAllGoodTypes}
            changeType={this.changeCurrentType} 
            cardItem={this.state.listLength}
            shopList={this.state.shopList}/>
          <Body getData={this.shopApi.getAllGoods}
            getTypes={this.shopApi.getAllGoodTypes}
            getImages={this.shopApi.getAllImages}
            currentType={this.state.currentType} 
            addItemToList={this.addItemToShopList}
            />
          <Footer />
        </ErrorBoundary>
      </div>
    )
  }
}