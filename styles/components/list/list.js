// Modifiers
import colorModifier from './modifiers/list-color.modifier';

const ListStyles = params => {
    const { props } = params;

    return `
        .fab-list {
            ${!props.divider && !props.striped ? 'padding: 1rem 0;' : ''}
        }

        // External
        .fab-list .fab-divider {
            margin-bottom: 1rem;
        }

        // Modifiers
        ${props.color ? colorModifier(params) : ''}
    `
};

export default ListStyles;