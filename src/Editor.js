import React, {Component} from 'react';
import './Editor.css';

export default class Editor extends Component {

constructor(props) {
    super(props)
    
    this.state = {
		editorContent: "",
		previewContent: ""
    }
    
    this.updatePreview = this.updatePreview.bind(this);
}

updatePreview(event) {
	this.setState({
      previewContent: event.target.value
    });
}

render() {
	return (
		<div id="wrapper">
			<textarea id="editor" onChange={ this.updatePreview }></textarea>
			<div id="preview">{ this.state.previewContent }</div>
		</div>
	)}
}