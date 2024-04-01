import {test, expect, describe, it} from 'vitest'
import { JSDOM } from "jsdom";
import { celsiusToFahrenheit } from './degrees';


describe('celsiusToFahrenheit', () => {
    test('should convert 2 Celsius to 35.6 Fahrenheit', () => {
        let celsius = 2;
        let expectedFahrenheit = 35.6;
        let actualFahrenheit = celsiusToFahrenheit(celsius);
        expect(actualFahrenheit).toBe(expectedFahrenheit);
    });

    test('should convert 100 Celsius to 212 Fahrenheit', () => {
        let celsius = 100;
        let expectedFahrenheit = 212;
        let actualFahrenheit = celsiusToFahrenheit(celsius);
        expect(actualFahrenheit).toBe(expectedFahrenheit);
    });

    test('should convert -10nCelsius to 14 Fahrenheit', () => {
        let celsius = -10;
        let expectedFahrenheit = 14;
        let actualFahrenheit = celsiusToFahrenheit(celsius);
        expect(actualFahrenheit).toBe(expectedFahrenheit);
    });
});