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
      totalPrice: 0,
      shopList: [], 
      shopListLength: 0
    }
  }


  changeCurrentType = (newType) => {
    this.setState({currentType: newType});
  }
  addItemToShopList = (newItem) => {
    const isIteminList = this.state.shopList.some(x => x.id == newItem.id);
    if(isIteminList) return;
    this.setState({ 
      shopList: [...this.state.shopList, newItem], 
      totalPrice: this.state.totalPrice + newItem.price, 
      shopListLength: this.state.shopListLength + 1
    });
  }
  removeItemFromShopList = (item) => {
    const newList = this.state.shopList.filter((i) => i.id != item.id);
    this.setState({ 
      shopList: [...newList], 
      totalPrice: this.state.totalPrice - item.price,
      shopListLength: this.state.shopListLength - 1});
  }


  render() {
    return (
      <div className='app'>
        <ErrorBoundary>
          <Header getData={this.shopApi.getAllGoodTypes}
            changeType={this.changeCurrentType} 
            shopList={this.state.shopList}
            totalPrice={this.state.totalPrice}
            shopListLength={this.state.shopListLength}
            removeItemFromList={this.removeItemFromShopList}/>
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