import React from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
//import {arr} from './detail.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBundry from '../components/ErrorBundry.js'

import {setSearchField} from '../actions'

const mapStateToPraps= state => {
   console.log("state",state);
    return{
        searchField:state.searchField
    }
}

const mapDispatchToProps= (dispatch)=>{
 console.log("dispatch",dispatch);
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends React.Component {


constructor (){
            super()
            this.state = {
                arr: [] }
    }

componentDidMount (){
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response  =>  response.json())
    .then(ex_arr      =>  this.setState({arr:ex_arr}) );
}

render ()
    {
        const {arr}=this.state;
        const {searchField, onSearchChange}=this.props;

        const new_arr= arr.filter(one_item =>  one_item.name.toLowerCase().includes(searchField.toLowerCase()));
        return  !arr.length ? 
                         <h1 className="tc h11"> Loodaing ...</h1>
                :  (<div>
                        <p className=" tc pa2 ma4 h11">live the moment <b>happy... </b> </p>
                        < SearchBox searchChange={onSearchChange}/>
                        <Scroll>
                            <ErrorBundry>
                            < CardList arr={new_arr} />
                            </ErrorBundry>
                        </Scroll>
                    </div>
                    );
    }

}

export default connect(mapStateToPraps, mapDispatchToProps)(App); 
