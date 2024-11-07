import React, { useState, useEffect, useRef } from "react";
import './bookreader.css'; 

let pagesCount = 0;
let parsedPagesCount = 0;

const loadBook = async () => {
  try {
    const response = await fetch('./pub.txt'); // Change this to match the backend format
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const bookText = await response.text();
    return bookText;
  } catch (error) {
    console.error('Failed to load book:', error);
    return '';
  }
};

const BookReader = ({ onPageChange, onChapterChange, onChapterTotalPagesChange }) => {
  const [bookContent, setBookContent] = useState([]);
  const pageRefs = useRef([]);

  useEffect(() => {
    const loadContent = async () => {
      const text = await loadBook();
      if (text) {
        const parsedContent = parseBook(text);
        setBookContent(parsedContent);
        onChapterTotalPagesChange(parsedContent.length); // Update total pages
      } else {
        console.error('No content loaded');
      }
    };

    loadContent();
    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //This guy here is the separator of the text and images in the book
  //When the text is loaded, it will be separated into pages and gifs
  //There will be a counter for chapters and pages
  //The gifs will be loaded in the same order as the text, theres a counter to render the gifs accondingly to their names and orders
  //Need to implement the backend to load the gifs and text in the same order and return the last chapter, page (and progress % of the book?)
  //Counter counts GIFS sections as pages, so it will be necessary to adjust the counter to match the backend format to return what page the user stopped reading
   const parseBook = (text) => {
    const pages = text.split('<TEXT>'); // Change this to match the backend format
    let parsedPages = [];
    let chaptercount = 0;
    let imageIndex = 0;

    pages.forEach((pageText, index) => {
      const sections = pageText.split('<GIF-‘layout_epub.gif’>'); // Change this to match the backend format
      sections.forEach((section, sectionIndex) => {
        if (sectionIndex % 2 === 1) {
          parsedPages.push({ title: `Image Page ${parsedPages.length + 1}`, sections: [{ type: 'image', src: `./image${imageIndex + 1}.gif` }] }); // Get the images, change to suit the back end format
          imageIndex++; 
          pagesCount++;
        } else {
          const textSections = splitTextIntoSections(section.trim());
          textSections.forEach((textSection, textSectionIndex) => {
            parsedPages.push({ title: `Page ${parsedPages.length + 1}`, sections: [{ type: 'text', text: textSection }] }); // Create the pages
            pagesCount++;
            chaptercount++;
          });
        }
      });
    });
    onChapterChange(chaptercount); // Update current chapter
    return parsedPages;
  };

  //Will split the text into sections based on the available space, this here is chaos, dont touch it
  //This here will verify the height of the text and split it into sections based on the available space
  //Very sensible to changes, do not touch it and the css class "book-section" and "page-section"
  const splitTextIntoSections = (text) => {  
    const maxHeight = window.innerHeight * 0.8; 
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.height = 'auto';
    tempDiv.style.width = '80vw'; 
    tempDiv.style.fontSize = 'var(--dynamic-font-size)';
    document.body.appendChild(tempDiv);

    const sections = [];
    let currentText = '';
    text.split(' ').forEach(word => {
      tempDiv.innerText = currentText + ' ' + word;
      if (tempDiv.offsetHeight > maxHeight) {
        sections.push(currentText);
        currentText = word;
      } else {
        currentText += ' ' + word;
      }
    });
    sections.push(currentText);
    parsedPagesCount = sections.length;
    document.body.removeChild(tempDiv);
    return sections;
  };

  //Will adjust the font size and image size based on the window size
  //Work as a lazy responsive format, available for mobile, tablet and desktop
  //Lazily done, will probably needed to be adjusted
  //Every time the window is resized, the font size and image size will be adjusted, but it needs to refresh the page
  //The "scrolls" content are centered to the middle of the page, and the gifs too
  //The gifs are kinda scuffed, but it works
  //Will need to adjust the css to make it look better or take extra care when creating the gifs
  const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const fontSize = width < 480 ? '3em' : width < 768 ? '2.5em' : '2em';
    const imgMaxHeight = height * 0.8;

    document.documentElement.style.setProperty('--dynamic-font-size', fontSize);
    document.documentElement.style.setProperty('--dynamic-img-max-height', `${imgMaxHeight}px`);
  };

  //Will observe the pages and change the current page and chapter based on the intersection of the pages

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageIndex = pageRefs.current.indexOf(entry.target);
            onPageChange(pageIndex + 1); // Update current page
            onChapterChange(pageIndex + 1); // Update current chapter
          }
        });
      },
      { threshold: 0.5 } 
    );

    pageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      pageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [bookContent]);

  return (
    <section className="book-section">
      {bookContent && bookContent.length > 0 ? (
        bookContent.map((page, pageIndex) => (
          <section
            key={pageIndex}
            className="page-section"
            ref={(el) => (pageRefs.current[pageIndex] = el)}
          >
            {page.sections.map((section, sectionIndex) => (
              section.type === 'text' ? (
                <p key={sectionIndex}>{section.text}</p>
              ) : (
                <img key={sectionIndex} src={section.src} alt={`Image ${sectionIndex}`} />
              )
            ))}
          </section>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default BookReader;