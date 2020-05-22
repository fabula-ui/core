// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import sizeModifier from './modifiers/size.modifier';

const TextStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.text;
    const { aux, block, color, flex, size, weight } = props;
    const { auxTextColor, fontSize, spacing, textColor } = vars;

    return `
    .fab-text-wrapper {${componentCommons}}
    .fab-text-wrapper[data-has-children='true'] {
        margin: calc(-${spacing} / 2);

        .fab-text {
            display: flex;
            flex-wrap: wrap;
        }
    }
    .fab-text {
        color: ${textColor};
        ${aux ? `color: ${auxTextColor};` : ''}
        ${block ? `display: block;` : ''}
        ${flex ? `display: flex;` : ''}
        font-size: ${fontSize};
        ${weight ? `font-weight: ${weight};` : ''}
        letter-spacing: -.05rem;
        line-height: 1.5;
    }

    .fab-text-part {
        padding: calc(${spacing} / 2);
    }

    ${color ? colorModifier(color) : ''}
    ${size ? sizeModifier(size) : ''}
    `
};

export default TextStyles;