const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['pages', 'entities', 'features'];

if (!layer || !layers.includes(layer)) {
    throw new Error(
        `Layer is not defined. Please, specify layer name: ${layers.join(
            ' or ',
        )}`,
    );
}

if (!sliceName) {
    throw new Error('Slice name is not defined. Please, specify slice name');
}

createTemplate(layer, sliceName);
