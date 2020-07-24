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
            text-decoration: ${props.underline ? 'underline' : 'none'};
        }

        // Modifiers
        ${colorModifier(params)}
        ${sizeModifier(params)}
    `;
}

export default LinkStyles;