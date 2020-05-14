// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const ListStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const { padded } = props;
    const { padding } = vars;

    return `
    .fab-list { ${componentCommons} }

    .fab-list-item {
        ${padded ? `padding: 1.25rem ${padding};` : `padding: 1.25rem 0;`}
    }

    ${colorModifier(props)}
    `
};

export default ListStyles;