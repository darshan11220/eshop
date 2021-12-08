import React, { Component } from 'react'
import axios from 'axios'

export class Request extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list : []
        }
        let count = "message";
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response)
            this.setState({list: response.data})
        }).catch(error => {
            console.log(error)
        })
    }
    
    render() {
        const {list} = this.state
        return (
            <div>
                {list.length? list.map(list => <div>{list.id} </div>) :null}
            </div>
        )
    }
}

export default Request
