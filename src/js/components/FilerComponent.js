import React, { Component } from 'react'
import  '../resources/filter.scss'
import * as actions from '../actions/Actions';
import store from '../utils/createStore'

export default class FilerComponent extends Component {

    constructor(props) {
    super(props)
     this.state = {
         toprice : '',
         fromprice : ''
     }
    }


    getToPrice(e) {
      this.setState( {
        toprice :  e.tartget.value === undefined ? 0 : e.tartget.value
      }) 
    }
    getFromPrice(e) {
        this.setState( {
          fromprice : e.tartget.value === undefined ? 0 : e.tartget.value
        }) 
      }

    render() {

        return (
            <div className='filter-component'>
                Filter Price 
                <div>
                <input className='filter-input'   placeholder='from'></input>
               </div>
               <div>
                <input className='filter-input'   placeholder='to'></input> 
                </div>
                <div>
                <button className='filter-button' >Filter</button> 
                </div>
                </div>
        )
    }
}

