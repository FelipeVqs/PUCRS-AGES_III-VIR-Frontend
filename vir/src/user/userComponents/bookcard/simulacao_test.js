
import defaultImage from './book.png';

export const fetchSimulatedBookData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'O Pequeno Príncipe',
        author: 'Antoine de Saint-Exupéry',
        totalPages: 94,
        pagesRead: 40,
        image: defaultImage
      });
    });
  });
};
