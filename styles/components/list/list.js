// Modifiers
import colorModifier from './modifiers/list-color.modifier';

const ListStyles = params => {
    const { props } = params;

    return `
        & {
            display: block;
        }

        .fab-list {
            padding: 0;
        }

        // Modifiers
        ${props.color ? colorModifier(params) : ''}
    `
};

export default ListStyles;