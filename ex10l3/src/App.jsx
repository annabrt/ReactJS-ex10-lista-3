import React from 'react';
import GaleriaImagens from './components/GaleriaImagens.jsx';

function App() {
  const imagens = [
    {
      url: 'https://www.futuro.cl/wp-content/uploads/2023/06/system-of-a-down-1998-web-jpg.webp',
      altText: 'Integrantes da banda de NU metal System of a Down fazendo poses para a foto',
    },
    {
      url: 'https://metaljournal.net/wp-content/uploads/2023/04/crypta-2023-pic-1.jpg',
      altText: 'Integrantes da banda de death metal Crypta fazendo poses para a foto',
    },
    {
      url: 'https://i8.amplience.net/i/naras/mary_bridget_davies-163913767.jpg.jpg?w=821&sm=c',
      altText: 'Cantora de Rock, soul e blues Janis Joplin',
    },
  ];

  return (
    <div>
      <GaleriaImagens imagens={imagens} />
    </div>
  );
}

export default App;