// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const ListStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const { padding } = props;
    const wrapper = framework === 'angular' ? '.fab-list-wrapper' : '&';

    return `
    ${wrapper} { ${componentCommons} }

    .fab-list-item {
        appearance: none;
        border: none;
        padding: 1rem 0;
        ${padding ? `padding-left: 1rem;`  : ''}
        ${padding ? `padding-right: 1rem;` : ''}
        width: 100%;
    }

    .fab-list-item[data-button='true'] {
        padding: 0;
    }

    ${colorModifier(params)}
    `
};

export default ListStyles;