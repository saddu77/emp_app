import React from 'react'

class Child2 extends React.Component{
    render(){
        return(
            <div>
                <h2>Child2 Component</h2>
                <h1>Data from Parent is : {this.props.dataFromParent}</h1>
            </div>
        )
    }
}

export default Child2