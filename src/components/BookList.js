import React from 'react';
import './BookListStyle.css';
import dummy  from './placeholder.jpg';

class BookList extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		const {books} = this.props;

		return(
			<div className='row row-cols-1 row-cols-md-4'>
				{books.map((book_object) => {
					return (
						<div className='col mb-4'>
							<div key={book_object.book_id} className='card'>
								<img className='card-img-top' src={dummy} alt="Card image cap" />
								<div className='card-body'>
									<h5 className='card-title'>{book_object.book_title}</h5>
									<p className='card-text'>{book_object.book_descr}</p>
									<a href="#" className="btn btn-primary">Edit book</a>
								</div>
								{/*
								<div className='LeftSide'>
									<img src={dummy}/>
								</div>
								<div className='RightSide'>
									<p className='BookTitle'>TITLE: {book_object.book_title}</p>
									<p>GENRE: PLACEHOLDER</p>
									<p>AUTHORS: PLACEHOLDER</p>
									<p>About:</p>
									<p className='BookDescr'>{book_object.book_descr}</p>
									<p className='BookPageCount'>PAGES: {book_object.book_page_count} pages</p>
								</div>
							*/}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default BookList;