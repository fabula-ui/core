import colorModifier from './modifiers/link-color.modifier';

const LinkStyles = params => {
    return `
        ${colorModifier(params)}
    `;
}

export default LinkStyles;