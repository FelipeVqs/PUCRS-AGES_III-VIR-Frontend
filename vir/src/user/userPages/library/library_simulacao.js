import imgMacunaima from '../../images/macunaimaimg.jpg';
import imgEstrela from '../../images/ahoradaestrela.jpg';
import imgSertao from '../../images/grande-sertao-veredas.jpg';


export const fetchSimulatedLibraryData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        listItems: [
          {
            id: 1,
            title: 'Macunaíma',
            image: imgMacunaima,
            author: 'Mario de Andrade',
            totalPages: 192,
            category: ''
          },
          {
            id: 2,
            title: 'Grande Sertão: Veredas',
            image: imgSertao,
            author: 'Guimarães Rosa',
            totalPages: 192,
            category: ''
          },
          {
            id: 3,
            title: 'A Hora da Estrela',
            image: imgEstrela,
            author: 'Clarice Lispector',
            totalPages: 192,
            category: ''
          }
        ]
      });
    }, 1000);  // Simulate a 1 second delay
  });
};
