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
						<div className='form-group'>
							<label for='formTitle'>Book Title</label>
								<input type='text' className='form-control' id='formTitle' value={this.state.bookTitle} onChange={this.onChangeTitleField} />
						</div>

						<div className='form-group'>
							<label for='formDescr'>Book description</label>
								<textarea type='text' className='form-control' id='formDescr' rows='5' value={this.state.bookDescr} onChange={this.onChangeDescrField} />
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