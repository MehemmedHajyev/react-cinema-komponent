import React, { Component } from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Sliders from './component/Sliders'
import Vdy from './component/Vdy'
export class Main extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Vdy/>
      <Sliders name= 'Popular Movies 2022' />
      <Sliders name='Best Comedies'/>
      <Sliders name='Action & Adventure'/>
      <Footer/>
      </div>
    )
  }
}

export default Main