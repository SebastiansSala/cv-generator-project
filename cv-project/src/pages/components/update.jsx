import React, {Component} from 'react'

export default class Update extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button className="bg-blue-400 hover:bg-blue-100 rounded transition px-1 mr-2" onClick={this.props.onClick}>Update</button>
        )
    }

}