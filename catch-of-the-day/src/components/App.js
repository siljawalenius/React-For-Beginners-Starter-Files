import React from "react"
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import sampleFishes from '../sample-fishes.js'
import Fish from './Fish'


class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };

    addFish =(fish) =>{
        console.log("adding a fishs")
        //1. take a copy of the existing state -  avoid mutations
        const fishes = {...this.state.fishes};
        //2. add our new fish to our fishes variable 
        fishes[`fish${Date.now()}`] = fish
        //3. set new fishes object to state

        this.setState({
            //set our old fishes object to our new fishes object
            //in ES6, fishes: fishes is the same thing as just fishes
            //if prop and value are the same, this will always work :) 
            fishes
        })
    }

    loadSampleFishes = () => {
        //alert("load sample fishes")
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder =(key) =>{
        //1. copy state
        const order = {...this.state.order}
        //2. add to order or update number in order
        order[key] = order[key] + 1 || 1;
        //3. call setState to update our state object
        this.setState({order})
    }

    render(){
        return (
            <div className = "catch-of-the-day">
                <div className = "menu">
                    <Header tagline = "fresh seafood market"></Header>
                    <ul className = "fishes">
                        {
                            Object.keys(this.state.fishes).map(key => <Fish 
                                key = {key} 
                                details = {this.state.fishes[key]} 
                                addToOrder = {this.addToOrder}
                                index = {key}
                            />)
                        }
                    </ul>
                </div>
                <Order/>
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes = {this.loadSampleFishes}
                />
                
            </div>
        )
    }
}

export default App