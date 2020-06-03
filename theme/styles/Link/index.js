import colorModifier from './modifiers/color.modifier';

const LinkStyles = params => {
    return `
        ${colorModifier(params)}
    `;
}

export default LinkStyles;