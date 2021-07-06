import React from 'react'

class Child1 extends React.Component{
    sendData = () => {
        this.props.parentCallback("msg from child1");
    }
    render(){
        return(
       <button onClick={this.sendData}> GetData</button>
        )
       
    }
}
export default Child1