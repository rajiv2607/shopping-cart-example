import React from 'react'
import { connect } from 'react-redux';
import Search from './Search'
import DisplayBlocks from './DisplayBlocks'
import * as actions from '../actions/Actions';
import '../resources/dashboard.scss'
import SortComponent from './SortComponent'
import FilerComponent from './FilerComponent'

 class Dashboard extends React.Component {

     handleInc(e) {
        this.props.addItem(e.id)
    }

    handleDec(e) {
         this.props.deleteItem(e.id)   
    }

    render() {
        let displayBlock = []
        let contentToBeDisplayed =  (this.props.searchMode) ? this.props.searchList : this.props.items.items
        contentToBeDisplayed.map((data, index) => {
               displayBlock.push(<DisplayBlocks key={index}  inc = {this.handleInc.bind(this)} dec={this.handleDec.bind(this)} obj={data}></DisplayBlocks>)
        })
        return(
            <div className='container'>
            <Search/>
            <SortComponent/>
            <FilerComponent/>
             <div className='showcase-content'>
             {displayBlock}
             </div>
             </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items,
        searchList: state.items.searchList,
        addedItems: state.items.addedItems,
        searchMode: state.items.searchMode
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
         addItem: (id)=>{dispatch(actions.increment(id))},
         deleteItem : (id)=>{dispatch(actions.decrement(id))}

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)