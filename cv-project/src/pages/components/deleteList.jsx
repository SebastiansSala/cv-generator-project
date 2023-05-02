import React, {Component} from 'react'

export default class Remove extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button className="bg-red-600 hover:bg-red-300 rounded transition px-1" onClick={this.props.onClick}>Remove</button>
        )
    }

}