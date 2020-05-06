import { elementColor } from '../utils/color.utils';

export const element = (theme, bgColor, componentName, elementName) => {
    const props = theme.components[componentName];

    return `
        color: ${elementColor(theme, bgColor, elementName)};
        font-size: ${props[elementName] && props[elementName].fontSize && props[elementName].fontSize.md || theme.elements[elementName].fontSize.md};
        font-weight: ${props[elementName] && props[elementName].fontWeight || theme.elements[elementName].fontWeight};
        line-height: ${props[elementName] && props[elementName].lineHeight || theme.elements[elementName].lineHeight};
    `;
}

export const elements = () => {
    return `
    [data-fab-element='subtitle'],
    [data-fab-element='text'],
    [data-fab-element='title'] {
        // display: flex;
        // flex-direction: column;
        margin: 0;
    }

    [data-fab-element='subtitle']:not(:last-child) {
        margin-bottom: 1.25rem;
        
        + [data-fab-element='title'] {
            margin-top: -1rem;
        }
    }

    [data-fab-element='text'] {
        p {
            margin: 0;
        }

        p:not(:last-child) {
            margin-bottom: 1.25rem;
        }
    }

    [data-fab-element='text']:not(:last-child) {
        margin-bottom: 1.25rem;
    }

    [data-fab-element='text']:not(:last-child) {
        margin-bottom: 1.25rem;
    }

    [data-fab-element='title']:not(:last-child) {
        margin-bottom: 1.25rem;
        
        + [data-fab-element='subtitle'] {
            margin-top: -1.15rem;
        }
    }
    `;
}

// export const elements = (theme, componentName, bgColor) => {
//     const props = theme.components[componentName];
//     return `
//     [data-fab-element='subtitle'] {
//         color: ${elementColor(theme, bgColor, 'subtitle')};
//         display: flex;
//         font-size: ${props.subtitle && props.subtitle.fontSize && props.subtitle.fontSize.md || theme.elements.subtitle.fontSize.md};
//         font-weight: ${props.subtitle && props.subtitle.fontWeight || theme.elements.subtitle.fontWeight};
//         line-height: ${props.subtitle && props.subtitle.lineHeight || theme.elements.subtitle.lineHeight};
//         margin: 0;
//     }

//     [data-fab-element='title'] {
//         color: ${elementColor(theme, bgColor, 'title')};
//         display: flex;
//         font-size: ${props.title && props.title.fontSize && props.title.fontSize.md || theme.elements.title.fontSize.md};
//         font-weight: ${props.title && props.title.fontWeight || theme.elements.title.fontWeight};
//         line-height: ${props.title && props.title.lineHeight || theme.elements.title.lineHeight};
//         margin: 0;
//     }
//     `
// }

export const subtitle = (theme, bgColor, componentName) => {
    const props = theme.components[componentName];

    return `
        color: ${elementColor(theme, bgColor, 'subtitle')};
        display: flex;
        font-size: ${props.title && props.title.fontSize && props.title.fontSize.md || theme.elements.title.fontSize.md};
        font-weight: ${props.title && props.title.fontWeight || theme.elements.title.fontWeight};
        line-height: ${props.title && props.title.lineHeight || theme.elements.title.lineHeight};
        margin: 0;
    `;
};

export const title = (theme, bgColor, componentName) => {
    const props = theme.components[componentName];

    return `
        color: ${elementColor(theme, bgColor, 'title')};
        display: flex;
        font-size: ${props.title && props.title.fontSize && props.title.fontSize.md || theme.elements.title.fontSize.md};
        font-weight: ${props.title && props.title.fontWeight || theme.elements.title.fontWeight};
        line-height: ${props.title && props.title.lineHeight || theme.elements.title.lineHeight};
        margin: 0;
    `;
};