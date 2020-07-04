// Modifiers
// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/list-color.modifier';

const ListStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('list');
    const wrapper = framework === 'angular' ? '.fab-list-wrapper' : '&';

    return `
    .fab-list-item {
        appearance: none;
        border: none;
        font-family: ${vars.fontFamily};
        padding: 1rem 0;
        ${props.padding ? `padding-left: 1rem;`  : ''}
        ${props.padding ? `padding-right: 1rem;` : ''}
        width: 100%;
    }

    fab-list-item[data-button='true'] .fab-list-item,
    .fab-list-item[data-button='true'] {
        padding: 0;
    }

    ${colorModifier(params)}
    `
};

export default ListStyles;