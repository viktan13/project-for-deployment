import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // e.g. isCounterEnabled
const featureState = process.argv[3]; // e.g. on / off

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

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
            if (child.getText() === toggleFunctionName) {
                isToggleFeature = true;
            }
        }
    });
    return isToggleFeature;
};

const isToggleComponent = (node: Node) => {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

    return identifier?.getText() === toggleComponentName;
};

const replaceToggleFunction = (node: Node) => {
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
};

const getAttributeNodeByName = (
    jsxAttributes: JsxAttribute[],
    name: string,
) => {
    return jsxAttributes.find((node) => node.getName() === name);
};

const getReplacedComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();
    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }
    return value;
};

const replaceToggleComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');

    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    // eslint-disable-next-line no-useless-return
    if (featureName !== removedFeatureName) return;

    const onValue = getReplacedComponent(onAttribute);

    const offValue = getReplacedComponent(offAttribute);

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node) => {
        if (node.asKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            replaceToggleFunction(node);
        }
        if (
            node.asKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            replaceToggleComponent(node);
        }
    });
});

project.save();
