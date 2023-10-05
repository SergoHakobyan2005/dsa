import React, { useState } from 'react';

const FilterForm = ({ onFilterChange }) => {
    const [estateType, setEstateType] = useState('');
    const [dealType, setDealType] = useState('');
    const [roomCount, setRoomCount] = useState('');

    const handleFilterChange = () => {
        // Вызывается при изменении фильтров
        onFilterChange({
            estateType,
            dealType,
            roomCount
        });
    };

    return (
        <div className='container'>
            <label htmlFor="estateType">Тип недвижимости:</label>
            <select id="estateType" value={estateType} onChange={(e) => setEstateType(e.target.value)}>
                <option value="">Все</option>
                <option value="flat">Квартира</option>
                <option value="house">Дом</option>
                {/* Другие опции по типу недвижимости */}
            </select>

            <label htmlFor="dealType">Тип сделки:</label>
            <select id="dealType" value={dealType} onChange={(e) => setDealType(e.target.value)}>
                <option value="">Все</option>
                <option value="buy">Продажа</option>
                <option value="rent">Аренда</option>
                {/* Другие опции по типу сделки */}
            </select>

            <label htmlFor="roomCount">Количество комнат:</label>
            <input
                type="number"
                id="roomCount"
                value={roomCount}
                onChange={(e) => setRoomCount(e.target.value)}
            />

            <button onClick={handleFilterChange}>Применить фильтры</button>
        </div>
    );
};

export default FilterForm;