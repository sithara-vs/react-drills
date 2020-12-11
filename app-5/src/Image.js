import React,{Component} from 'react';
export default class Image extends Component{
    render()
    {
        return(
            <div>
                <img src={this.props.url}/>

                <div><h1>We are the cutest!</h1></div>
            </div>
            
        )
    }
}