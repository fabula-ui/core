import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/list-header-color.modifier';

const ListHeaderStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('listHeader');
    const wrapper = framework === 'angular' ? '.fab-list-header' : '&';

    return `
        ${wrapper} {
            align-items: center;
            display: flex;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            margin-bottom: ${vars.paddingY};
            ${(props.color || props.parentColor) ? `opacity: ${vars.opacity};` : ''}
            padding: ${vars.paddingY} ${vars.paddingX};
            width: 100%;
        }

        ${colorModifier(params)}
    `
}

export default ListHeaderStyles;