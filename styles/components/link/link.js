// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/link-color.modifier';
import sizeModifier from './modifiers/link-size.modifier';

const LinkStyles = params => {
    const {framework, props} = params;
    const vars = getComponentVars('link');
    const wrapper = framework === 'angular' ? '.fab-link' : '&';

    return `
        ${wrapper} {
            cursor: pointer;
            font-family: ${vars.fontFamily};
            font-weight: ${props.weight ? props.weight : 'inherit'};
            letter-spacing: ${vars.letterSpacing};
            text-decoration: ${props.underline ? 'underline' : 'none'};
        }

        ${wrapper}:hover {
            > * {
                color: inherit;
            }
        }

        // Modifiers
        ${colorModifier(params)}
        ${sizeModifier(params)}
    `;
}

export default LinkStyles;