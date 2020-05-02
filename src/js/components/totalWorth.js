import React from 'react'
import { Label } from 'semantic-ui-react'
import '../resources/total.scss'

export default class TotalWorth extends React.Component {
    render() {
        return(
        <Label className='total-price'>Total: {this.props.total}</Label>
        );
    }
}

