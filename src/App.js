import React, { Component } from 'react';
import { ItemList } from './components/item-list/item-list.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      items: [],
    }

  }

  componentDidMount(){
    fetch("https://fortniteapi.io/v2/items/upcoming?lang=en", {
      method: 'GET',
      
      
      headers: {
          'Authorization': '1975c263-aeda28df-ff76dcfa-515df979',
      }

    }).then(response => response.json())
    .then(res => this.setState({items: res.items}))
    
   
  }





render() {
  var items = this.state;
  return (
    <div className="App">
      <h1>Fortnite's upcoming items</h1>
      <ItemList items={items.items} />
     

    </div>
  );
  }
}
export default App;
