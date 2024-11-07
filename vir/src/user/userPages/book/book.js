import React, { useState } from 'react';
import ReadingHeader from '../../userComponents/reading-header/reading-header';
import BookReader from '../../userController/reader/bookreader';

function Book() {
  const [currentPage, setCurrentPage] = useState(1);
  const [chapterCount, setCurrentChapter] = useState(1);
  const [chapterTotalPages, setCurrentChapterTotalPages] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleChapterChange = (newChapter) => {
    setCurrentChapter(newChapter);
  };

  const handleChapterTotalPagesChange = (newTotalPages) => {
    setCurrentChapterTotalPages(newTotalPages);
  };

  return (
    <div>
      <ReadingHeader 
        currentPage={currentPage} 
        chapterCount={chapterCount}
        chapterTotalPages={chapterTotalPages}
      />
      <BookReader 
        onPageChange={handlePageChange}
        onChapterChange={handleChapterChange}
        onChapterTotalPagesChange={handleChapterTotalPagesChange}
      />
    </div>
  );
}

export default Book;
