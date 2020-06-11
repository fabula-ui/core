// Component commons
import componentCommons from '../../common/component.commons';

// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import placementModifier from './modifiers/placement.modifier';
import sizeModifier from './modifiers/size.modifier';

// Utils
import UtilsStyles from '../../utils';

const BadgeStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('badge');
    const wrapper = framework === 'angular' ? '.fab-badge-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }

        ${wrapper} {
            display: inline-flex;
        }

        .fab-badge {
            align-items: center;
            border-radius: ${vars.borderRadius};
            ${props.circle || props.rounded ? `border-radius: 999px;` : ''}
            display: flex;
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
        ${sizeModifier(params)}
    `
}

export default BadgeStyles;