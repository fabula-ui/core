// Button modifiers
import circleModifier from './modifiers/button-circle.modifier';
import colorModifier from './modifiers/button-color.modifier';
import gradientModifier from './modifiers/button-gradient.modifier';
import iconModifier from './modifiers/button-icon.modifier';
import sizeModifier from './modifiers/button-size.modifier';
import smashedModifier from './modifiers/button-smashed.modifier';

// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getContext from '../../methods/misc/getContext';

const ButtonStyles = params => {
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
            border: none;
            border-radius: ${vars.borderRadius};
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
            min-height: ${vars.minHeight};
            overflow: hidden;
            padding-bottom: ${vars.paddingBottom};
            padding-left: ${vars.paddingLeft};
            padding-right: ${vars.paddingRight};
            padding-top: ${vars.paddingTop};
            ${(props.compact || props.expand) ? `padding-left: calc(${vars.paddingLeft} * ${vars.compactMultiplier});` : ''}
            ${(props.compact || props.expand) ? `padding-right: calc(${vars.paddingRight} * ${vars.compactMultiplier});`: ''}
            ${props.wide ? `padding-left: calc(${vars.paddingLeft} * ${vars.wideMultiplier});` : ''}
            ${props.wide ? `padding-right: calc(${vars.paddingRight} * ${vars.wideMultiplier});`: ''}
            ${!!props.align ? `text-align: ${props.align};` : ''}
            position: relative;
            transition: all ${vars.transition};

            &:focus {
                outline: none;
            }

            &:hover {
                ${context === 'clear' ? `opacity: .8;` : ''}
            }

            &:active {
                ${context === 'clear' ? `opacity: .6;` : ''}
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
        ${iconModifier(params)}
        ${props.smashed ? smashedModifier(params) : ''}
        ${props.size ? sizeModifier(params) : ''}
    `
}

export default ButtonStyles;