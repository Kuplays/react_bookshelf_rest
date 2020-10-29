import React from 'react';

class AddBookForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookTitle: '',
			bookDescr: '',
			bookPageCount: ''
		};

		this.onChangeTitleField = this.onChangeTitleField.bind(this);
		this.onChangeDescrField = this.onChangeDescrField.bind(this);
		this.onChangePageCountField = this.onChangePageCountField.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(ev) {
		alert(`TITLE: ${this.state.bookTitle}\nDESCR: ${this.state.bookDescr}\nPAGECOUNT: ${this.state.bookPageCount}`);
		ev.preventDefault();
	}

	onChangeTitleField(ev) {
		this.setState({bookTitle: ev.target.value});
	}

	onChangeDescrField(ev) {
		this.setState({bookDescr: ev.target.value});
		console.log(this.state.bookDescr);
	}

	onChangePageCountField(ev) {
		this.setState({bookPageCount: ev.target.value});
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<p>
					<label>
						BOOK TITLE:
						<input type='text' name='formTitle' value={this.state.bookTitle} onChange={this.onChangeTitleField} />
					</label>
				</p>

				<p>
					<label>
						BOOK DESCRIPTION:
						<input type='text' name='formDescr' value={this.state.bookDescr} onChange={this.onChangeDescrField} />
					</label>
				</p>

				<p>
					<label>
						BOOK PAGES:
						<input type='text' name='formDescr' value={this.state.bookPageCount} onChange={this.onChangePageCountField} />
					</label>
				</p>

				<p>
					<input type='submit' value='Add Book' />
				</p>
			</form>
		);
	}
}

export default AddBookForm;