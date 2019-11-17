import React from 'react';


class Errorbundry extends React.Component{
    constructor (props){
        super(props);
        this.state={
            hasError: false
        }
    }

componentDidCatch(error, info){
    this.setState({hasError:true});
}

render(){
    if (this.hasError){
        return <h1>Error somthing wrong</h1>
    }
    return this.props.children
}

}

export default Errorbundry
