import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/list-item-color.modifier';
import sizeModifier from './modifiers/list-item-size.modifier';

const ListItemStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('list');
    const wrapper = framework === 'angular' ? '.fab-list-item' : '&';

    return `
        ${wrapper} {
            appearance: none;
            border: none;
            font-family: ${vars.fontFamily};
            padding: 1rem 0;
            ${props.padding ? `padding-left: 1rem;` : ''}
            ${props.padding ? `padding-right: 1rem;` : ''}
            width: 100%;
        }

        fab-list-item[data-button='true'] .fab-list-item,
        ${wrapper}[data-button='true'] {
            padding: 0;
        }

        ${colorModifier(params)}
        ${sizeModifier(params)}
    `
}

export default ListItemStyles;