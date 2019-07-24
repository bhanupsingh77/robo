import React,{Component} from 'react';

import SearchBox from './SearchBox';
import {Robots} from './Robots';
import CardList from './CardList';


class App extends Component {
    constructor(){
        super()
        this.state = {
            seachField:"",
            robots: Robots
        }
    }

    onSearch  = (event) => {
        this.setState({seachField: event.target.value})
    }
    
    
    searchRobots = (Robots) => { return Robots.filter((robot) => {
        return (robot.name.toLowerCase().includes(this.state.seachField.toLowerCase()))
    });
    }  
    

    render(){
       
        return(
            <div className="tc bg-light-blue">
                <h1 className="bg-orange pa2 ma2">Robots</h1>
                <SearchBox searchField={this.onSearch}/>
                <CardList Robots={this.searchRobots(Robots)}/>
            </div>
        )
    }
}

export default App;
