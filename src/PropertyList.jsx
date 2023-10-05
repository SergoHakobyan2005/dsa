import React, { useState } from 'react';
import FilterForm from './FilterForm';

const PropertyList = () => {
    const initialProperties = [
        {
            name: 'Квартира 1',
            estateType: 'flat',
            dealType: 'buy',
            roomCount: 2,
            // Другие характеристики недвижимости
        },
        {
            name: 'Дом 1',
            estateType: 'house',
            dealType: 'buy',
            roomCount: 4,
            // Другие характеристики недвижимости
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

    const [properties, setProperties] = useState(initialProperties);
    const [filteredProperties, setFilteredProperties] = useState(initialProperties);

    const filterProperties = (filters) => {
        // Реализация фильтрации согласно переданным параметрам
        if (filters.estateType === '' && filters.dealType === '' && filters.roomCount === '') {
            // Если выбрано "Все", возвращаем все объекты
            return properties;
        }

        let filteredProperties = [...properties];

        if (filters.estateType !== '') {
            filteredProperties = filteredProperties.filter(property => property.estateType === filters.estateType);
        }

        if (filters.dealType !== '') {
            filteredProperties = filteredProperties.filter(property => property.dealType === filters.dealType);
        }

        if (filters.roomCount !== '') {
            filteredProperties = filteredProperties.filter(property => property.roomCount == filters.roomCount);
        }

        return filteredProperties;
    };

    const handleFilterChange = (filters) => {
        // Обработка изменений фильтров
        const filteredResults = filterProperties(filters);
        setFilteredProperties(filteredResults);
    };

    return (
        <div>
            <FilterForm onFilterChange={handleFilterChange} />

            <ul>
                {/* Отображение результатов фильтрации */}
                {filteredProperties.map((property, index) => (
                    <li key={index}>
                        <strong>{property.name}</strong>
                        <p>Тип недвижимости: {property.estateType}</p>
                        <p>Тип сделки: {property.dealType}</p>
                        <p>Количество комнат: {property.roomCount}</p>
                        {/* Другие характеристики недвижимости */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
