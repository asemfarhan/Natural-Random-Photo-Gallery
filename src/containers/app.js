import React        from 'react';
import {connect}    from 'react-redux';
import CardList     from '../components/CardList';
import SearchBox    from '../components/SearchBox';
import Scroll       from '../components/Scroll';
import ErrorBundry  from '../components/ErrorBundry.js'

import {setField_A, requestPhoto_A} from '../actions'

//////mapStateToPraps
const mapStateToPraps = state => {
    return{
        searchField:state.searchChange_R.searchFieldText_R,
        isPending : state.requestPhoto_R.isPending ,
        photo : state.requestPhoto_R.photo,
        error : state.requestPhoto_R.error }
}

/////mapDispatchToProps
const mapDispatchToProps = (dispatch)=>{
    return{
        onSearchChange : (event) => dispatch(setField_A(event.target.value)),
        onRequestPhoto : ()      => requestPhoto_A(dispatch)
    }
}

class App extends React.Component {

componentDidMount (){
this.props.onRequestPhoto();
}

render () {
    const {searchField, onSearchChange,  photo, isPending}=this.props;
    const new_photo= photo.filter( one_item =>  one_item.name.toLowerCase().includes(searchField.toLowerCase()));
    return  isPending ? 
           <h1 className=" tc pa2 ma4 h11"> Loading ...</h1>
            :  (<div>
                <p className=" tc pa2 ma4 h11">live the moment <b>happy... </b> </p>
                < SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBundry>
                            < CardList arr={new_photo} />
                        </ErrorBundry>
                    </Scroll>
                </div>
            );
        }
}

export default connect(mapStateToPraps, mapDispatchToProps)(App); 
