document.addEventListener('DOMContentLoaded', (event) => {
    const inputValue = document.getElementById('input-value');
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');
    const resultDisplay = document.getElementById('result');
    const convertButton = document.getElementById('convert-button');

    const conversionRates = {
        length: {
            meter: 1,
            kilometer: 0.001,
            centimeter: 100,
            millimeter: 1000,
            micrometer: 1e6,
            nanometer: 1e9,
            mile: 0.000621371,
            yard: 1.09361,
            foot: 3.28084,
            inch: 39.3701
        },
        mass: {
            kilogram: 1,
            gram: 1000,
            milligram: 1e6,
            microgram: 1e9,
            ton: 0.001,
            pound: 2.20462,
            ounce: 35.274
        },
        volume: {
            liter: 1,
            milliliter: 1000,
            cubic_meter: 0.001,
            cubic_centimeter: 1000,
            cubic_inch: 61.0237,
            cubic_foot: 0.0353147,
            gallon: 0.264172,
            quart: 1.05669,
            pint: 2.11338,
            cup: 4.22675,
            fluid_ounce: 33.814
        }
    };

    function getUnitType(unit) {
        for (const type in conversionRates) {
            if (conversionRates[type][unit]) {
                return type;
            }
        }
        return null;
    }

    function convertUnits(value, from, to) {
        const fromType = getUnitType(from);
        const toType = getUnitType(to);

        if (fromType !== toType) {
            return 'Incompatible unit types';
        }

        const inBaseUnit = value / conversionRates[fromType][from];
        return inBaseUnit * conversionRates[fromType][to];
    }

    function updateResult() {
        const value = parseFloat(inputValue.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (!isNaN(value)) {
            const result = convertUnits(value, from, to);
            resultDisplay.textContent = `Result: ${result.toFixed(2)} ${to}`;
        } else {
            resultDisplay.textContent = 'Result: Invalid input';
        }
    }

    convertButton.addEventListener('click', updateResult);
});