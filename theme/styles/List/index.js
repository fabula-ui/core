// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const ListStyles = params => {
    const { props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const { padding } = props;

    return `
    .fab-list { ${componentCommons} }

    .fab-list-item {
        padding: 1rem 0;
        ${padding ? `padding-left: 1rem;`  : ''}
        ${padding ? `padding-right: 1rem;` : ''}
    }

    ${colorModifier(props)}
    `
};

export default ListStyles;