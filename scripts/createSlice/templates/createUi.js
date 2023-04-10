const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const componentTemplate = require('./componentTemplate');
const styleTemplate = require('./styleTemplate');
const storyTemplate = require('./storyTemplate');

module.exports = async (layer, sliceName) => {
    const resolveUiPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUiPath());
        } catch (error) {
            console.log('Error creating UI folder: ', error);
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharUpperCase(sliceName);
            await fs.mkdir(resolveUiPath(componentName));
            await fs.writeFile(resolveUiPath(componentName, `${componentName}.tsx`), componentTemplate(componentName));
            await fs.writeFile(resolveUiPath(componentName, `${componentName}.module.scss`), styleTemplate(componentName));
            await fs.writeFile(resolveUiPath(componentName, `${componentName}.stories.tsx`), storyTemplate(layer, componentName));
        } catch (error) {
            console.log('Error creating component: ', error);
        }
    };

    await createUIDir();
    await createComponent();
};
