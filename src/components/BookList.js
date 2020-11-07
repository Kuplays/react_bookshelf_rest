import React from 'react';
import './BookListStyle.css';
import dummy  from './placeholder.jpg';

class BookList extends React.Component {
	constructor(props) {
		super(props);
	}

	formatDate = (passedDate) => {
    	const date = new Date(passedDate);
    	let month = date.toLocaleString('en-us', {month: 'long'});
		let day = date.getDate();
		let year = date.getFullYear();

		return `${day}th of ${month}, ${year}`;
  	}


	render() {
		const {books} = this.props;

		return(
			<div className='row row-cols-1 row-cols-md-4'>
				{books.map((book_object) => {
					let date = new Date(book_object.book_date_changed);
					const modifiedDate = this.formatDate(book_object.book_date_changed);
					return (
						<div className='col mb-4'>
							<div key={book_object.book_id} className='card'>
								<img className='card-img-top' src={dummy} alt="Card image cap" />
								<div className='card-body'>
									<h5 className='card-title'>{book_object.book_title}</h5>
									<h6 className='card-subtitle'>Written by: {book_object.book_author}</h6>
									<h6 className='text-muted'>{book_object.book_genre}</h6>
									<h6 className='text-muted'>Last updated: {modifiedDate}</h6>
									<p className='card-text'>{book_object.book_descr}</p>
									<a href="#" className="card-link">Edit book</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default BookList;