const path = require('path');
const fs = require('fs/promises');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');
const resolveRoot = require('../resolveRoot');

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

    const createModelStructure = async () => {
        try {
            await fs.mkdir(resolveModelPath());
            await fs.mkdir(resolveModelPath('selectors'));
            await fs.mkdir(resolveModelPath('slices'));
            await fs.mkdir(resolveModelPath('services'));
            await fs.mkdir(resolveModelPath('types'));
        } catch (error) {
            console.log(`Error creating model segment for slice: ${sliceName}: `, error);
        }
    };

    const createReduxSlice = async () => {
        try {
            await fs.writeFile(resolveModelPath('slices', `${sliceName}Slice.ts`), reduxSliceTemplate(sliceName));
        } catch (error) {
            console.log(`Error creating redux slice for ${sliceName}`, error);
        }
    };

    const createSchemaType = async () => {
        try {
            await fs.writeFile(resolveModelPath('types', `${sliceName}Schema.ts`), schemaTypeTemplate(sliceName));
        } catch (error) {
            console.log(`Error creating schema type for ${sliceName}`, error);
        }
    };

    await createModelStructure();
    await createReduxSlice();
    await createSchemaType();
};
