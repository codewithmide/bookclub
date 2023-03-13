import React, { useState } from "react";
import BookActionBar from "../../common/components/BookActionBar";
import Rate from "../../common/components/Rate";
import { BookType } from "../../common/Types/Book.type";
import starFilledWhite from "../../common/assets/star-filled-light.svg";
import '../styles/book.css'

type BookItemProps = {
  book: BookType;
};

function BookItem({ book }: BookItemProps) {
  const [showModal, setShowModal] = useState(false);

  const handleBookClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const modalClass = `modal ${showModal ? "is-active" : ""}`;

  return (
    <div className="wrapper">
      <div className="book-item" onClick={handleBookClick}>
        <div className="book-hover-overlay">
          <div className="overlay-content">
            <p>Rate this book</p>
            <div className="star-wrap">
              <Rate rating={0} variant="small" color="dark" filledColor={starFilledWhite} />
            </div>
          </div>
        </div>
        <img
          src={book?.image}
          alt=""
          className={`${book.status ? "border" : ""}`}
          style={{
            borderColor:
              book.status === "completed"
                ? "#01625D"
                : book.status === "reading"
                ? "#382110"
                : book.status === "to-read"
                ? "#14181F"
                : "Want to read"
                ? "#000"
                : "",
          }}
        />
      </div>
      <BookActionBar type="no-top" status={book.status} />
      <div className={modalClass}>
        <div className="modal-background" onClick={handleCloseModal}></div>
        <div className="modal-content">
          <div className="box">
            {/* Modal content */}
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleCloseModal}></button>
      </div>
    </div>
  );
}

export default BookItem;
