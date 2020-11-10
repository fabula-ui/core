// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/badge-color.modifier';
import placementModifier from './modifiers/badge-placement.modifier';
import sizeModifier from './modifiers/badge-size.modifier';

const BadgeStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('badge');
    const wrapper = framework === 'angular' ? '.fab-badge' : '&';

    return `
        & { display: inline-block; }

        ${wrapper} {
            display: inline-block;
        }

        ${wrapper} {
            align-items: center;
            border-radius: ${vars.borderRadius};
            ${(props.circle || props.rounded) ? `border-radius: 999px;` : ''}
            display: inline-block;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            ${props.circle ? `height: ${vars.circleSize};` : ''}
            justify-content: center;
            line-height: 1;
            ${(props.circle || props.rounded) ? `min-width: ${vars.circleSize};` : ''}
            padding: ${vars.padding};
            ${props.circle ? `padding: 0;` : ''}
            ${props.rounded ? `padding: ${vars.paddingY} calc(${vars.paddingX} + .2em);` : ''}
            text-align: center;
            ${props.width ? `width: ${vars.circleSize};` : ''}
        }

        ${wrapper} > * {
            vertical-align: baseline;
        }

        // Modifiers
        ${colorModifier(params)}
        ${props.placement ? placementModifier(params) : ''}
        ${sizeModifier(params)}
    `
}

export default BadgeStyles;