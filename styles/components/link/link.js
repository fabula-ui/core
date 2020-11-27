// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/link-color.modifier';
import sizeModifier from './modifiers/link-size.modifier';

const LinkStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('link');
    const wrapper = framework === 'angular' ? '.fab-link' : '&';

    return `
        ${wrapper} {
            cursor: pointer;
            display: inline-block;
            font-family: ${vars.fontFamily};
            font-weight: ${props.weight ? props.weight : 'inherit'};
            letter-spacing: ${vars.letterSpacing};
            text-decoration: ${props.underline && props.underline !== 'hover' ? 'underline' : 'none'};
        }

        ${wrapper}:hover {
            ${props.underline === 'hover' ? 'text-decoration:  underline;' : ''}
            
            > * {
                color: inherit;
            }
        }

        // External
        & .fab-link:not([data-size]),
        & .fab-text:not([data-size]) {
            font-size: 1em;
        }

        // Modifiers
        ${colorModifier(params)}
        ${sizeModifier(params)}
    `;
}

export default LinkStyles;