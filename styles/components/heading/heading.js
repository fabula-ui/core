import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/heading-color.modifier';


const HeadingStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('heading');
    const wrapper = framework === 'angular' ? '.fab-heading' : '&';

    return `
        ${wrapper} {
            font-family: ${vars.fontFamily};
            font-size: calc(1rem * ${vars.levelMultipliers[props.level]});
            font-weight: ${props.weight || vars.fontWeight};
            letter-spacing: ${vars.letterSpacing};
            margin-bottom: ${vars.marginBottom};
            margin-top: 0;

            &:not(:first-child) {
                margin-top: ${vars.marginTop};
            }
        }

        // Modifiers
        ${colorModifier(params)}
    `
}

export default HeadingStyles