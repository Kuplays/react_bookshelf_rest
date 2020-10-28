import React from 'react';

class BookList extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const {books} = this.props;
		const displayValues = (
			<ul>
				<h1 className='class-title'>Books Data stub</h1>
				{books.map((book_object) => {
					return (
						<li key={book_object.book_id} className='class-list-item'>
							<h3 className='class-book-title'>{book_object.book_title}</h3>
							<p className='class-book-descr'>{book_object.book_descr}</p>
							<p className='class-book-page-count'>{book_object.book_page_count}</p>
						</li>
					);
				})}
			</ul>
		);
		return(
			<div>
				{displayValues}
			</div>
		);
	}
}

export default BookList;