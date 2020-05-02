import React from 'react'
import '../resources/displayblock.scss'

export default class  DisplayBlock extends React.Component {

    handleIncrement(e) {
      console.log("increment")
      this.props.inc(this.props.obj)
    }

    handleDecrement(e) {
        console.log("Decrement")
        this.props.dec(this.props.obj)
    }
    
    render() {

        return(
            <div className='item-block'>
            <img className='display_image' src={this.props.obj.image} alt=""/>
            <label className='cake-name'>{this.props.obj.name}</label>
            <div>
            <label className='display_price_actual'>{this.props.obj.price.actual} </label>
            <label className='display_price_display'>{this.props.obj.price.display}</label>
            <label className='display_discount'>Discount :{this.props.obj.discount}%</label>
            <button className='add-to-cart' onClick={this.handleIncrement.bind(this)}>Add to Cart</button>
            </div>
            </div>
        )
    }
    
}