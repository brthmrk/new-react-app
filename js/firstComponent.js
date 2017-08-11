import ReactDOM from 'react-dom'
import React from 'react'
import header from './header.js'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    const URL = 'http://swapi.co/api/people/1';
    fetch(URL)
      .then((data) => data.json())
      .then((json) => {
        this.setState(json);
    });
      
  }
  render() {
    return (
      <section className="list">
      	<div className="wrapper">
	    	<ul>
	    		<li>Name: {this.state.name}</li>      
	      	</ul>
	   	</div>
	   </section>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));