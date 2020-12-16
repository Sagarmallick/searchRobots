import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

// super class 
class App extends Component {
    // constructor to initialize 
    constructor(){
        super();
        this.state={
           cons_robots:[],
            cons_searchfield:''
        }
    }

    componentDidMount(){
        // fetching data from link and get  response in json format from link 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(user=>this.setState({cons_robots:user}))
    }

    onSearchChange =(event)=>{
        this.setState({cons_searchfield:event.target.value})
    }


    render() {
        const filterRobots=this.state.cons_robots.filter(robots=>{
            return(robots.name.toLowerCase().includes(this.state.cons_searchfield.toLowerCase()))
        })

        if(this.state.cons_robots.length===0){
           return <h1>loading</h1>
        }
        else{
            return(     
                <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
                </div>
             );
        }


    }
}
export default App;