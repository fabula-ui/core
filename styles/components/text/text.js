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
    ${framework === 'angular' ? `& { display: block; }` : ''}
    
    ${wrapper} {
        align-items: flex-start;
        color: inherit;
        ${props.aux ? `color: ${vars.auxTextColor};` : ''}
        display: block;
        ${props.inline ? `display: inline;` : ''}
        font-family: ${vars.fontFamily};
        font-size: ${vars.fontSize};
        ${props.weight ? `font-weight: ${props.weight};` : ''}
        letter-spacing: -.05rem;
        line-height: ${props.lineHeight ? props.lineHeight : '1.5'};
        ${!props.wrap ? `white-space: nowrap;` : ''}
        vertical-align: middle;
    }

    ${wrapper} .fab-text:not([data-color]) {
        color: inherit;
    }

    // External
    ${wrapper} .fab-icon {
        vertical-align: middle;
    }

    // Modifiers
    ${props.color ? colorModifier(params) : ''}
    ${props.size ? sizeModifier(params) : ''}
    `
};

export default TextStyles;