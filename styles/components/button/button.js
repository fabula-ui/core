// Button modifiers
import { circleModifier } from './modifiers/button-circle.modifier';
import { colorModifier } from './modifiers/button-color.modifier';
import { gradientModifier } from './modifiers/button-gradient.modifier';
import { sizeModifier } from './modifiers/button-size.modifier';
import { smashedModifier } from './modifiers/button-smashed.modifier';

// Methods
import { getComponentVars } from '../../methods/misc/getComponentVars';
import { getContext } from '../../methods/misc/getContext';
import { getNumber } from '../../methods/misc/getNumber';

export const ButtonStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('button');
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-button' : '&';

    return `
        &,
        ${wrapper} {
            ${props.expand ? `width: 100%;` : ''}
        }

        ${wrapper} {
            align-items: center;
            appearance: none;
            border: solid ${getNumber(vars.borderWidth, 'px')} transparent;
            border-radius: ${getNumber(vars.borderRadius, 'px')};
            ${props.rounded ? `border-radius: 999px;` : ''}
            cursor: pointer;
            display: inline-flex;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            justify-content: center;
            ${props.align === 'center' ? `justify-content: center;` : ''}
            ${props.align === 'left' || props.align === 'start' ? `justify-content: flex-start;` : ''}
            ${props.align === 'right' || props.align === 'end' ? `justify-content: flex-end;` : ''}
            letter-spacing: ${vars.letterSpacing};
            overflow: hidden;
            padding-bottom: ${getNumber(vars.paddingBottom, 'em')};
            padding-left: ${getNumber(vars.paddingLeft, 'em')};
            padding-right: ${getNumber(vars.paddingRight, 'em')};
            padding-top: ${getNumber(vars.paddingTop, 'em')};
            ${(props.compact || props.expand) ? `padding-left: calc(${getNumber(vars.paddingLeft, 'em')} * ${vars.compactMultiplier});` : ''}
            ${(props.compact || props.expand) ? `padding-right: calc(${getNumber(vars.paddingRight, 'em')} * ${vars.compactMultiplier});` : ''}
            ${props.wide ? `padding-left: calc(${getNumber(vars.paddingLeft, 'em')} * ${vars.wideMultiplier});` : ''}
            ${props.wide ? `padding-right: calc(${getNumber(vars.paddingRight, 'em')} * ${vars.wideMultiplier});` : ''}
            ${!!props.align ? `text-align: ${props.align};` : ''}
            position: relative;
            transition: all ${vars.transition};

            &:focus {
                outline: none;
            }

            &:hover {
                ${context === 'clear' ? `opacity: ${vars.hoverOpacity};` : ''}
            }

            &:active {
                ${context === 'clear' ? `opacity: ${vars.activeOpacity};` : ''}
            }

            &[disabled] {
                cursor: default;
                opacity: ${vars.disabledOpacity};
                pointer-events: none;
                user-select: none;
            }
        }

        ${wrapper} > * {
            vertical-align: middle;
        }

        a${wrapper} {
            text-decoration: none;
        }

        // Modifiers
        ${props.circle ? circleModifier(params) : ''}
        ${colorModifier(params)}
        ${props.gradient && props.color ? gradientModifier(params) : ''}
        ${props.smashed ? smashedModifier(params) : ''}
        ${props.size ? sizeModifier(params) : ''}
    `
}