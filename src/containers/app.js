import React from 'react';
import CardList from '../components/CardList';
//import {arr} from './detail.js';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBundry from '../components/ErrorBundry.js'

class App extends React.Component {

constructor (){
            super()
            this.state = {
                arr: [] ,
                searchField: ''}
    }

onSearchChange = (event) => {
    this.setState({searchField : event.target.value});
}

componentDidMount (){

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response  =>  response.json())
    .then(ex_arr      =>  this.setState({arr:ex_arr}) );
}

render ()
    {
    const {arr, searchField}=this.state;
        const newarr= arr.filter(one_item =>  one_item.name.toLowerCase().includes(searchField.toLowerCase()));
        return !arr.length ? 
             <h1 className="tc h11"> Loodaing ...</h1>
        :  (     <div>
                        <p className=" tc pa2 ma4 h11">live the moment <b>happy... </b> </p>
                        < SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBundry>
                            < CardList arr={newarr} />
                            </ErrorBundry>
                        </Scroll>
                    </div>
                    );
    }

}

export default App; 
