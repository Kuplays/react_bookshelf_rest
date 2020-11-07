import React from 'react';
import AxiosParams from '../utils/AxiosParams';
import './AddBook.css';

class AddBookForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bookTitle: '',
			bookDescr: '',
			bookPageCount: '',
			bookGenre: '',
			bookAuthor: ''
		};

		this.onChangeTitleField = this.onChangeTitleField.bind(this);
		this.onChangeDescrField = this.onChangeDescrField.bind(this);
		this.onChangePageCountField = this.onChangePageCountField.bind(this);
		this.onChangeGenreField = this.onChangeGenreField.bind(this);
		this.onChangeAuthorField = this.onChangeAuthorField.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(ev) {
		ev.preventDefault();
		const book = {
			title: this.state.bookTitle,
			descr: this.state.bookDescr,
			pageCount: this.state.bookPageCount,
			genre: this.state.bookGenre,
			author: this.state.bookAuthor
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

	onChangeGenreField(ev) {
		this.setState({bookGenre: ev.target.value});
	}

	onChangeAuthorField(ev) {
		this.setState({bookAuthor: ev.target.value});
	}

	render() {
		return (
			<div className='backShadow'>
				<div className='formInner'>
					<form onSubmit={this.onSubmit}>
						<div className='form-group'>
							<label for='formTitle'>Book Title</label>
								<input type='text' className='form-control' id='formTitle' value={this.state.bookTitle} onChange={this.onChangeTitleField} />
						</div>

						<div className='form-group'>
							<label for='genre'>Book Genre</label>
								<input type='text' className='form-control' id='genre' value={this.state.bookGenre} onChange={this.onChangeGenreField} />
						</div>

						<div className='form-group'>
							<label for='author'>Book Author</label>
								<input type='text' className='form-control' id='author' value={this.state.bookAuthor} onChange={this.onChangeAuthorField} />
						</div>

						<div className='form-group'>
							<label for='formDescr'>Book description</label>
								<textarea type='text' className='form-control' id='formDescr' rows='4' value={this.state.bookDescr} onChange={this.onChangeDescrField} />
						</div>

						<div className='form-group'>
							<label for='pageCount'>Pages</label>
								<input type='text' className='form-control' id='pageCount' value={this.state.bookPageCount} onChange={this.onChangePageCountField} />
						</div>

						<div className='form-group'>
							<input className='btn btn-success' type='submit' value='Add Book' />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default AddBookForm;