//import defaultImage from '../../images/book.png';
import imgPequenoPrincipe from '../../images/pequeno_principe.png'

export const fetchSimulatedBookData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        listItems: [ // Retornando como array para corresponder ao estado inicial de bookshelfData
          {
            id: 1,
            title: 'O Pequeno Príncipe',
            author: 'Antoine de Saint-Exupéry',
            totalPages: 94,
            pagesRead: 40,
            image: imgPequenoPrincipe
          }
        ]
      });
    }, 1000);
  });
};
