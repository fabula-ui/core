// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const ListStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const { padding } = props;
    const wrapper = framework === 'angular' ? '.fab-list' : '&';

    return `
    ${wrapper} { ${componentCommons} }

    .fab-list-item {
        padding: 1rem 0;
        ${padding ? `padding-left: 1rem;`  : ''}
        ${padding ? `padding-right: 1rem;` : ''}
    }

    ${colorModifier(params)}
    `
};

export default ListStyles;