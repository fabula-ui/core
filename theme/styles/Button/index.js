// Component commons
import componentCommons from '../../common/component.commons';

// Button modifiers
import borderModifier from './modifiers/border.modifier';
import colorModifier from './modifiers/color.modifier';
import compactModifier from './modifiers/compact.modifier';
import glowModifier from './modifiers/glow.modifier';
import gradientModifier from './modifiers/gradient.modifier';
import outlineModifier from './modifiers/outline.modifier';
import roundedModifier from './modifiers/rounded.modifier';
import sizeModifier from './modifiers/size.modifier';
import wideModifier from './modifiers/wide.modifier';

// Methods
import getContext from '../../methods/misc/getContext';
import getFocusGlowColor from '../../methods/color/focusGlowColor';

// External components
import IconExternalStyles from './external/icon';

const ButtonStyles = params => {
    const { framework, props, utils } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.button;
    const { align, border, color, compact, expand, glow, gradient, outline, rounded, size, smashed, wide } = props;
    const { borderRadius, focusGlowColor, focusGlowRadius, fontSize, paddingBottom, paddingLeft, paddingRight, paddingTop } = vars;
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-button-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }
        ${wrapper} {
            display: inline-flex;
            ${expand ? `width: 100%;` : ''}
        }

        .fab-button { ${componentCommons} }
        .fab-button {
            align-items: center;
            appearance: none;
            border: none;
            ${smashed ? `border-radius: .33em;` : `border-radius: ${borderRadius};`}
            cursor: pointer;
            display: inline-flex;
            font-size: ${fontSize};
            font-weight: 600;
            letter-spacing: -.025rem;
            ${align === 'center' ? `justify-content: center;` : ''}
            ${align === 'left' || align === 'start' ? `justify-content: flex-start;` : ''}
            ${align === 'right' || align === 'end' ? `justify-content: flex-end;` : ''}
            ${smashed ? `min-height: 2rem;` : `min-height: 3rem;`}
            ${smashed ? `padding-bottom: calc(${paddingBottom} / 2);` : `padding-bottom: ${paddingBottom};`}
            padding-left: ${smashed ? `1em;` : `${paddingLeft};`}
            padding-right: ${smashed ? `1em;` : `${paddingRight};`}
            ${smashed ? `padding-top: calc(${paddingTop} / 2);` : `padding-top: ${paddingTop};`}
            ${!!align ? `text-align: ${align};` : ''}
            position: relative;
            transition: all .2s ease-in-out;
            width: 100%;

            &:before {
                bottom: 0;
                border: solid 0 ${getFocusGlowColor(null, context)};
                border-radius: ${smashed ? `calc(.33em + ${focusGlowRadius}px);` : `calc(${borderRadius} + ${focusGlowRadius}px);`}
                content: '';
                display: block;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
                transition: all .2s ease-in-out;
            }

            &:focus {
                outline: none;
            }

            &:focus:before {
                border-width: ${focusGlowRadius}px;
                bottom: -${focusGlowRadius}px;
                left: -${focusGlowRadius}px;
                right: -${focusGlowRadius}px;
                top: -${focusGlowRadius}px;
            }

            &[disabled] {
                cursor: default;
                opacity: .4;
            }

            > *:not(:last-child) {
                margin-right: .5em;
            }
        }

        ${border ? borderModifier(props) : ''}
        ${colorModifier(props)}
        ${glow ? glowModifier(props) : ''}
        ${gradient ? gradientModifier(props) : ''}
        ${outline ? outlineModifier(props) : ''}
        ${rounded ? roundedModifier() : ''}
        ${size ? sizeModifier(props) : ''}
        ${compact ? compactModifier(props) : ''}
        ${wide ? wideModifier() : ''}

        // External
        ${IconExternalStyles(props)}

        // Utils
        ${utils ? require('../../utils').default(params) : ''}
    `
}

export default ButtonStyles;