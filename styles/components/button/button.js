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
    // const icon = !!props.icon ? require(`../../../icons/raw/${typeof props.icon === 'object' ? props.icon.name : props.icon}.svg`) : null;
    const wrapper = framework === 'angular' ? '.fab-button-wrapper' : '&';

    return `
        ${wrapper} {
            display: inline-flex;
            ${props.expand ? `width: 100%;` : ''}
        }

        .fab-button {
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
            
            width: 100%;

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

            > *:not(:last-child) {
                margin-right: ${vars.childrenSpacing};
            }
        }

        // Modifiers
        ${props.circle ? circleModifier(props) : ''}
        ${colorModifier(props)}
        ${props.gradient && props.color ? gradientModifier(props) : ''}
        ${iconModifier(props)}
        ${props.smashed ? smashedModifier(props) : ''}
        ${props.size ? sizeModifier(props) : ''}
    `
}

export default ButtonStyles;