import React, {Component} from 'react';
import './Editor.css';

export default class Editor extends Component {

constructor(props) {
    super(props)
    
    this.state = {
	    ql: "",	// quotes list
        q: "",	// quote
        author: "",
        url: ""
    }
    
    this.newQuote = this.newQuote.bind(this);
}

componentDidMount() {
    this.getQuotesList();
}

getQuotesList() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => this
        .setState({
    		ql: data.quotes },
    		() => {
				const index = this.randomIndex(this.state.ql.length);
				this.setState({
	        		q: this.state.ql[index].quote,
	        		author: this.state.ql[index].author
	        	})
			}
	    ));
}

randomIndex(arrayLength) {
	return Math.floor(Math.random() * arrayLength)
}

newQuote() {
	const index = this.randomIndex(this.state.ql.length);
	this.setState({
		q: this.state.ql[index].quote,
		author: this.state.ql[index].author
	})
}

render() {
	return (
		<div className="wrapper">
		  <div id="quote-box">
		  	<div id="text">{ this.state.q }</div>
		  	<div id="author">- { this.state.author }</div>
			<a
				id="tweet-quote"
				href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + this.state.q + " - " + encodeURIComponent(this.state.author)}
				target="_blank"
				rel="noopener noreferrer"
			>
			</a>
		  </div>
		</div>
	)}
}