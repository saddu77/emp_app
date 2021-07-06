import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
class Parent extends React.Component{
    state = {
        data :"Hi from Parent Component",
        message:""
    }
    reciveData = 
    (childData) => {
        this.setState({message:childData})    
    }
    render(){
        return(
            <div>
                 <Child1 parentCallback={this.reciveData} />
                 <p>Recieved : {this.state.message}</p>
                 <Child2 dataFromParent = {this.state.data}/>                 
            </div>
        )
    }
}

export default Parent