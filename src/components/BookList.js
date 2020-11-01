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
			<div className='MainBlock'>
				{books.map((book_object) => {
					return (
						<div key={book_object.book_id} className='card'>
							<img class='card-img-top' src={dummy} alt="Card image cap" />
							<div className='card-body'>
								<h5 className='card-title'>{book_object.book_title}</h5>
								<p className='card-text'>{book_object.book_descr}</p>
								<a href="#" class="btn btn-primary">Edit book</a>
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
					);
				})}
			</div>
		);
	}
}

export default BookList;