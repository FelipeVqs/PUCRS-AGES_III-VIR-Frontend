import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './reading-header.css';

const ReadingHeader = ({ currentPage, chapterCount, chapterTotalPages }) => {
  const navigate = useNavigate();
  const handleQuit = () => {
    navigate('/Bookshelf');
  };

  return (
    <header className="reading-header">
      <div className="chapter-info">
        <span className="chapter-title">Capítulo {chapterCount}</span>
        <button className="quit-button" onClick={handleQuit}>
          X
        </button>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${(currentPage / chapterTotalPages) * 100}%` }}
        ></div>
      </div>
    </header>
  );
};

ReadingHeader.propTypes = {
  currentPage: PropTypes.number.isRequired,
  chapterCount: PropTypes.number.isRequired,
  chapterTotalPages: PropTypes.number.isRequired,
};

export default ReadingHeader;