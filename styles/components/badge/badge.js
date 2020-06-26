// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/badge-color.modifier';
import placementModifier from './modifiers/badge-placement.modifier';
import sizeModifier from './modifiers/badge-size.modifier';

const BadgeStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('badge');
    const wrapper = framework === 'angular' ? '.fab-badge-wrapper' : '&';

    return `
        ${framework === 'angular' ? `& { display: inline-flex; }` : ''}

        ${wrapper} {
            display: inline-flex;
        }

        .fab-badge {
            align-items: center;
            border-radius: ${vars.borderRadius};
            ${props.circle || props.rounded ? `border-radius: 999px;` : ''}
            display: flex;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            ${props.circle ? `height: ${vars.circleSize};` : ''}
            justify-content: center;
            line-height: 1;
            ${props.circle || props.rounded ? `min-width: ${vars.circleSize};` : ''}
            padding: ${vars.padding};
            ${props.circle ? `padding: 0;` : ''}
            ${props.rounded ? `padding: ${vars.padding} calc(${vars.padding} + .2em);` : ''}
        }

        ${colorModifier(props)}
        ${props.placement ? placementModifier(params) : ''}
        ${sizeModifier(props)}
    `
}

export default BadgeStyles;