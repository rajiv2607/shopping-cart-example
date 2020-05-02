import React from 'react'
import '../resources/cart.scss'
import { connect } from 'react-redux';

class Cart extends React.Component {

    render() { 
              let addedItemss = this.props.addedItems || []
              let totalAmount =  this.props.total
              let itemList = addedItemss.map(item=>{
                return(
                    <>
                    <div className='container_cart'>
                    <div className='cart_container'>
                       
                            <label className='item-name'>Name : {item.name}</label>
                            <label className='item-quantity'>Quantity: {item.quantity}</label>
                     </div>
                     </div>
                     </>
    
                )
            })
    

        return (
            <>
                <div>
                <label className='cart-header'>You have Added </label>
                    {itemList}
                <label className='cart-footer'>Total: {totalAmount} </label>  
                </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        addedItems: state.items.addedItems,
        total: state.items.total
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        // addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
