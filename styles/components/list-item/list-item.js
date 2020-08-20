import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/list-item-color.modifier';

const ListItemStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('listItem');
    const wrapper = framework === 'angular' ? '.fab-list-item' : '&';

    return `
        ${framework === 'angular' ? `& { display: block; }` : ''}

        ${wrapper} {
            appearance: none;
            border: none;
            font-family: ${vars.fontFamily};
            padding: ${vars.paddingTop} 0 ${vars.paddingBottom};
            ${props.padding ? `padding-left: ${vars.paddingLeft};` : ''}
            ${props.padding ? `padding-right: ${vars.paddingRight};` : ''}
            width: 100%;
        }
        
        .fab-list-item[data-divider='false'][data-striped='false'],
        ${wrapper}[data-divider='false'][data-striped='false'] {
            padding-bottom: 0;
            padding-top: 0;
        }

        button${wrapper} {
            cursor: pointer;
            font-size: inherit;
            text-align: left;

            &:focus {
                outline: none;
            }
        }

        &:not(:last-child) .fab-list-item[data-divider='false'][data-striped='false'],
        ${wrapper}:not(:last-child)[data-divider='false'][data-striped='false'] {
            padding-bottom: ${vars.paddingBottom};
        }

        // Modifiers
        ${colorModifier(params)}
    `
}

export default ListItemStyles;