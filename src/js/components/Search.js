import React, { Component } from 'react'
import * as actions  from '../actions/Actions'
import  '../resources/search.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

 class Search extends Component {
       constructor(props) {
super(props) 
this.state = {
       searchText : ''
}
       }
     
   
    handleChange(event) {
        this.setState({
            searchText : event.target.value
        })
    }

    render() {
        return (
        <div className='search-area'>
        <lable className='brand-label'>Shopping Cart</lable>   
        <input className='search-label' placeholder='Search your item..' onChange={this.handleChange.bind(this)}/>
        <button id="search-button" onClick={this.props.sendSearchText(this.state.searchText)}>
        <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
         </svg>
        </button>
        <Link to="/cart" id='cart-button'>
            <svg  width="24" height="24" viewBox="0 0 24 24">
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
            </svg>  
        </Link>
        <button  className='items-added'>{this.props.totalItems}</button>
        </div>
        )
    }
}

export default connect((state)=>{
    return {
        totalItems : state.items.addedItems.length
    }
}, (dispatch)=> {
    return{
        sendSearchText : (searchText) => {
            dispatch(actions.searchLemeennt(searchText))
        }
    }
})(Search)
