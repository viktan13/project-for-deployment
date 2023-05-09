import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // e.g. isCounterEnabled
const featureState = process.argv[3]; // e.g. on / off

if (!removedFeatureName) {
    throw new Error('Please provide a feature flag name to remove');
}

if (!featureState) {
    throw new Error('Please provide a feature flag state "on" or "off"');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Feature flag state must be "on" or "off"');
}

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isToggleFunction = (node: Node) => {
    let isToggleFeature = false;
    node.forEachChild((child) => {
        if (child.asKind(SyntaxKind.Identifier)) {
            if (child.getText() === 'toggleFeatures') {
                isToggleFeature = true;
            }
        }
    });
    return isToggleFeature;
};

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.asKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            );
            if (!objectOptions) return;
            const featureNameProperty = objectOptions.getProperty('name');
            const onFunctionProperty = objectOptions.getProperty('on');
            const offFunctionProperty = objectOptions.getProperty('off');

            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1);
            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            );

            if (featureName !== removedFeatureName) return;

            if (featureState === 'on') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '');
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '');
            }
        }
    });
});

project.save();
