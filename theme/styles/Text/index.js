// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import sizeModifier from './modifiers/size.modifier';
import UtilsStyles from '../../utils';

const TextStyles = params => {
    const { framework, props, utils } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.text;
    const { aux, block, color, flex, size, weight } = props;
    const { auxTextColor, fontSize, spacing, textColor } = vars;
    const wrapper = framework === 'angular' ? '.fab-text' : '&';

    return `
    ${framework === 'angular' && !!props.block && !!props.flex ? `& { display: inline-flex; }` : ''}
    
    ${wrapper} {${componentCommons}}
    
    ${wrapper} {
        align-items: flex-start;
        color: ${textColor};
        ${aux ? `color: ${auxTextColor};` : ''}
        display: inline-flex;
        ${block ? `display: block;` : ''}
        ${flex ? `display: flex;` : ''}
        font-size: ${fontSize};
        ${weight ? `font-weight: ${weight};` : ''}
        letter-spacing: -.05rem;
        line-height: 1.5;
    }

    ${wrapper} .fab-text:not([data-color]) {
        color: inherit;
    }

    ${wrapper} > p,
    ${wrapper} > small,
    ${wrapper} > span,
    ${wrapper} > strong {
        align-items: flex-start;
        display: inline-flex;
    }

    .fab-text-part {
        padding: calc(${spacing} / 2);
    }

    ${color ? colorModifier(params) : ''}
    ${size ? sizeModifier(params) : ''}
    ${utils ? UtilsStyles(params) : ''}
    `
};

export default TextStyles;