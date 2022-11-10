import './app.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Body from '../Body/body';
import React, { Component } from 'react';
import ApiService from '../../Services/api-service';
import ErrorBoundary from '../ErrorBoundary/error-boundary';

export default class App extends Component {
  shopApi = new ApiService();

  render() {
    return (
      <div className='app'>
        <ErrorBoundary>
          <Header getData={this.shopApi.getAllGoodTypes} />
          <Body getData={this.shopApi.getAllGoods}
            getTypes={this.shopApi.getAllGoodTypes}
            getImages={this.shopApi.getAllImages} />
          <Footer />
        </ErrorBoundary>
      </div>
    )
  }
}