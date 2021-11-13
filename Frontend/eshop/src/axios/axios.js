import React, { Component } from 'react'
import axios, { Axios } from 'axios'

export class axios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list = []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').th
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default axios
