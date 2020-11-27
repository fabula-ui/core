// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/text-color.modifier';
import sizeModifier from './modifiers/text-size.modifier';

const TextStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('text');
    const wrapper = framework === 'angular' ? '.fab-text' : '&';

    return `
        &,
        ${wrapper} {
            display: block;
            ${props.inline ? `display: inline-block!important;` : ''}
        }

        ${wrapper} {
            color: inherit;
            ${props.aux ? `color: ${vars['auxTextColor']};` : ''}
            display: block;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            ${props.weight ? `font-weight: ${props.weight};` : ''}
            letter-spacing: -.05rem;
            line-height: ${props.lineHeight ? props.lineHeight : '1.5'};
            ${!props.wrap ? `white-space: nowrap;` : ''}
        }

        ${wrapper} .fab-text:not([data-color]) {
            color: inherit;
        }

        // External
        ${wrapper} .fab-link,
        ${wrapper} .fab-text {
            font-size: 1em;   
        }
        
        ${wrapper} > * {
            vertical-align: baseline;
        }

        ${wrapper} > fab-badge > .fab-badge-wrapper,
        ${wrapper} > .fab-badge-wrapper,
        ${wrapper} > fab-icon > .fab-icon,
        ${wrapper} > .fab-icon {
            vertical-align: middle;
        }

        // Modifiers
        ${props.color ? colorModifier(params) : ''}
        ${props.size ? sizeModifier(params) : ''}
    `
};

export default TextStyles;