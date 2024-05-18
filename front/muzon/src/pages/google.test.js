import React from 'react';
import { render, screen } from '@testing-library/react';
import Shop from './Shop';

test('проверка наличия картинки с микрофоном', () => {
    render(<Shop />);

    const microfonPlate = screen.getByText('Усилители'); // Находим элемент с текстом "Микрофоны" внутри элемента <h5>

    expect(microfonPlate).toBeTruthy(); // Проверяем, что элемент с текстом "Микрофоны" присутствует в документе
});