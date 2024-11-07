import defaultImage from './img_test.png';

export const fetchSimulatedSynopsisData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'O Pequeno Príncipe',
        image: defaultImage,
        totalPages: 94,
        pagesRead: 46,
        description: `
            <p>Conheça a edição mais consagrada de um dos maiores clássicos da literatura, publicada no Brasil desde 1952, 
            com a tradução do poeta dom Marcos Barbosa e as ilustrações originais em aquarela do autor.</p>
            <p>Nesta história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara 
            e encontra um pequeno príncipe, que o leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana.</p>
            <p>Conheça a edição mais consagrada de um dos maiores clássicos da literatura, publicada no Brasil desde 1952, 
            com a tradução do poeta dom Marcos Barbosa e as ilustrações originais em aquarela do autor.</p>
            <p>Nesta história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara 
            e encontra um pequeno príncipe, que o leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana.</p>
            
            
        `,
        publisher: 'HarperCollins; 19ª edição (27 agosto 2018)',
        author: 'Antoine de Saint-Exupéry',
        genre: 'Literatura infantil',
        pages: 94
      });
    });
  });
};
