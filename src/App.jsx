// App.jsx
import React from 'react';
import PropertyList from './PropertyList';

const propertiesData = [
  {
    name: 'Квартира 1',
    estateType: 'flat',
    dealType: 'buy',
    roomCount: 2,
  },
  {
    name: 'Дом 1',
    estateType: 'house',
    dealType: 'buy',
    roomCount: 4,
  },
  {
    name: 'Дом 2',
    estateType: 'house',
    dealType: 'buy',
    roomCount: 5,
  },
  {
    name: 'Квартира 2',
    estateType: 'flat',
    dealType: 'buy',
    roomCount: 3,
  },
  // Другие объекты с данными о недвижимости
];

function App() {
  return (
    <div className="App">
      <PropertyList properties={propertiesData} />
    </div>
  );
}

export default App;
