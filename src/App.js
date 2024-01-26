import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
        <Route exact path="/" element={<>
          <Navbar />
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="general" pageSize={9} country="us" category="general" />
        </>} />
        <Route exact path="/sports" element={<>
          <Navbar />
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="sports" pageSize={9} country="us" category="sports" />
        </>} />
        <Route exact path="/business" element={<>
          <Navbar />
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="business" pageSize={9} country="us" category="business" />
        </>} />
        <Route exact path="/entertainment" element={<>
          <Navbar />
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="entertainment" pageSize={9} country="us" category="entertainment" />
        </>} />
        <Route exact path="/health" element={<>
          <Navbar />
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="health" pageSize={9} country="us" category="health" />
        </>} />
        <Route exact path="/science" element={<>
          <Navbar />
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="science" pageSize={9} country="us" category="science" />
        </>} />
        <Route exact path="/technology" element={<>
          <Navbar />
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="technology" pageSize={9} country="us" category="technology" />
        </>} />
        <Route exact path="/general" element={<>
          <Navbar />
          <News setProgress = {this.setProgress} apiKey = {this.setAPI}  pageSize={9} country="us" category="general" />
        </>} />
      </Routes>
    </BrowserRouter>

    )
  }
}
