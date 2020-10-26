// Modifiers
import colorModifier from './modifiers/list-color.modifier';

const ListStyles = params => {
    const { props } = params;

    return `
        .fab-list {
            padding: 0;
        }

        // External
        .fab-list .fab-divider {
            
        }

        // Modifiers
        ${props.color ? colorModifier(params) : ''}
    `
};

export default ListStyles;