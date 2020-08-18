import React, {Component} from 'react';
import './Editor.css';

export default class Editor extends Component {

constructor(props) {
    super(props)
    
    this.state = {
	    
    }
    
    this.updatePreview = this.updatePreview.bind(this);
}

updatePreview() {
	
}

render() {
	return (
		<textarea id="editor" onChange={ this.updatePreview }></textarea>
	)}
}