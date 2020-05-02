import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../resources/sortcomponent.scss'
import * as actions from '../actions/Actions';

 class SortComponent extends Component {

    render() {
        return (
            <div className='sort-container'>
                <button className='sorting-button' onClick={this.props.highToLow}> Price -- Height to Low </button>
                <button className='sorting-button' onClick={this.props.lowToHeigh}> Price -- Low to Height </button>
                <button 
                className='sorting-button'
                onClick={this.props.sortByDiscount}> 
                Price -- Discount 
                </button>
            </div>
        )
    }
}


const mapDispatchToProps =  (dispatch) => { 
    return {
        sortByDiscount : ()=> {
            dispatch(actions.sortByDiscount())
        },
        highToLow : () => {
            dispatch(actions.sortByHeightToLow())
        },
        lowToHeigh :  () => {
            dispatch(actions.sortByLowToHeight())
        }

    }
}
export default connect(null, mapDispatchToProps)(SortComponent)