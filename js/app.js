import ReactDOM from 'react-dom'
import React from 'react'


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
      <section className="list clearfix">
      	<div className="wrapper">
      	  	<div className="column s100 m50 l25 xl25">
		    	<ul>
		    		<li><h2 className="teaser__title">Name: {this.state.name}</h2></li> 
		    		<li>birth_year: {this.state.birth_year}</li>  
		    		<li>eye_color: {this.state.eye_color}</li>  
		    		<li>gender: {this.state.gender}</li>  
		    		<li>hair_color: {this.state.hair_color}</li>  
		    		<li>height: {this.state.height}</li>  
		    		<li>skin_color: {this.state.skin_color}</li>       
		      	</ul>
		      </div>
	   	</div>
	   </section>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));