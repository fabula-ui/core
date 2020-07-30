// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/text-color.modifier';
import sizeModifier from './modifiers/text-size.modifier';

const TextStyles = params => {
    const { framework, props, } = params;
    const vars = getComponentVars('text');
    const wrapper = framework === 'angular' ? '.fab-text' : '&';

    return `
    ${framework === 'angular' && !!props.block && !!props.flex ? `& { display: inline-flex; }` : ''}
    
    ${wrapper} {
        align-items: flex-start;
        color: inherit;
        ${props.aux ? `color: ${vars.auxTextColor};` : ''}
        display: inline-flex;
        ${props.block ? `display: block;` : ''}
        ${props.flex ? `display: flex;` : ''}
        font-family: ${vars.fontFamily};
        font-size: ${vars.fontSize};
        ${props.weight ? `font-weight: ${props.weight};` : ''}
        letter-spacing: -.05rem;
        line-height: 1.5;
        ${!props.wrap ? `white-space: nowrap;` : ''}
    }

    ${wrapper} .fab-text:not([data-color]) {
        color: inherit;
    }

    .fab-text-part {
        padding: calc(${vars.spacing} / 2);
    }

    ${props.color ? colorModifier(params) : ''}
    ${props.size ? sizeModifier(params) : ''}
    `
};

export default TextStyles;