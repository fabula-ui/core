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
            display: block;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            padding: ${vars.paddingTop} 0 ${vars.paddingBottom};
            ${props.padding ? `padding-left: ${vars.paddingLeft};` : ''}
            ${props.padding ? `padding-right: ${vars.paddingRight};` : ''}
            width: 100%;
        }

        button${wrapper} {
            cursor: pointer;
            text-align: left;

            &:focus {
                outline: none;
            }
        }

        ${wrapper}[data-compact='true'] {
            padding-top: calc(${vars.paddingTop} / 2);
            padding-bottom: calc(${vars.paddingBottom} / 2);
        }

        // Modifiers
        ${colorModifier(params)}
    `
}

export default ListItemStyles;