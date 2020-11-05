import React from 'react';
import AxiosParams from '../utils/AxiosParams';
import './AddBook.css';

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
		ev.preventDefault();
		const book = {
			title: this.state.bookTitle,
			descr: this.state.bookDescr,
			pageCount: this.state.bookPageCount
		};
		
		AxiosParams.post('/add_book', book).then(result => {
			console.log(result);
			console.log(result.data);
			this.props.toggleState(true);
			this.props.closeForm();
		})
	}

	onChangeTitleField(ev) {
		this.setState({bookTitle: ev.target.value});
	}

	onChangeDescrField(ev) {
		this.setState({bookDescr: ev.target.value});
	}

	onChangePageCountField(ev) {
		this.setState({bookPageCount: ev.target.value});
	}

	render() {
		return (
			<div className='backShadow'>
				<div className='formInner'>
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
				</div>
			</div>
		);
	}
}

export default AddBookForm;