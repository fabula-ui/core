// Button modifiers
import colorModifier from './modifiers/button-color.modifier';
import gradientModifier from './modifiers/button-gradient.modifier';
import sizeModifier from './modifiers/button-size.modifier';

// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getContext from '../../methods/misc/getContext';

const ButtonStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('button');
    const context = getContext(props);
    const icon = !!props.icon ? require(`../../../icons/${typeof props.icon === 'object' ? props.icon.name : props.icon}.svg`) : null;
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
            ${props.smashed ? `border-radius: ${vars.borderRadiusSmashed};` : `border-radius: ${vars.borderRadius};`}
            ${props.rounded ? `border-radius: 999px;` : ''}
            ${(!!props.circle || !!props.icon) ? `border-radius: 50%;` : ''}
            cursor: pointer;
            display: inline-flex;
            font-family: ${vars.fontFamily};
            ${!!props.smashed ? `font-size: calc(${vars.fontSize} * .9);` : `font-size: ${vars.fontSize};`}
            font-weight: ${vars.fontWeight};
            ${(!!props.circle || !!props.icon) && !props.smashed ? 'height: 3rem;' : ''}
            ${(!!props.circle || !!props.icon) && props.smashed ? 'height: 2rem;' : ''}
            justify-content: center;
            ${props.align === 'center' ? `justify-content: center;` : ''}
            ${props.align === 'left' || props.align === 'start' ? `justify-content: flex-start;` : ''}
            ${props.align === 'right' || props.align === 'end' ? `justify-content: flex-end;` : ''}
            letter-spacing: -.025rem;
            ${props.smashed ? `min-height: 2rem;` : `min-height: 3rem;`}
            ${props.smashed ? `padding-bottom: calc(${vars.paddingBottom} / 2);` : `padding-bottom: ${vars.paddingBottom};`}
            padding-left: ${props.smashed ? `calc(${vars.paddingLeft} - .5em);` : `${vars.paddingLeft};` }
            padding-right: ${props.smashed ? `calc(${vars.paddingRight} - .5em);` : `${vars.paddingRight};` }
            ${props.smashed ? `padding-top: calc(${vars.paddingTop} / 2);` : `padding-top: ${vars.paddingTop};`}
            ${props.compact ? `padding-left: calc(${vars.paddingLeft} * ${vars.compactMultiplier});` : ''}
            ${props.compact ? `padding-right: calc(${vars.paddingRight} * ${vars.compactMultiplier});`: ''}
            ${!!props.icon ? `padding-left: 0;` : ''}
            ${!!props.icon ? `padding-right: 0;` : ''}
            ${props.wide ? `padding-left: calc(${vars.paddingLeft} * ${vars.wideMultiplier});` : ''}
            ${props.wide ? `padding-right: calc(${vars.paddingRight} * ${vars.wideMultiplier});`: ''}
            ${!!props.align ? `text-align: ${props.align};` : ''}
            position: relative;
            transition: all .2s ease-in-out;
            white-space: nowrap;
            width: 100%;
            ${(!!props.circle || !!props.icon) && !props.smashed ? 'width: 3rem;' : ''}
            ${(!!props.circle || !!props.icon) && props.smashed ? 'width: 2rem;' : ''}

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
            }

            > *:not(:last-child) {
                margin-right: ${vars.childrenSpacing};
            }
        }

        .fab-button__icon {
            height: 1em;
            mask-image: url(${icon});
            mask-position: center center;
            mask-repeat: no-repeat;
            mask-size: contain;
            width: 1em;
        }

        .fab-icon__svg {
            font-size: 85%;
        }

        ${colorModifier(props)}
        ${props.gradient && props.color ? gradientModifier(props) : ''}
        ${props.size ? sizeModifier(props) : ''}
    `
}

export default ButtonStyles;