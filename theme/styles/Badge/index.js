// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import placementModifier from './modifiers/placement.modifier';
import sizeModifier from './modifiers/size.modifier';

// Utils
import UtilsStyles from '../../utils';

const BadgeStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { circle, placement, rounded, utils } = props;
    const { borderRadius, fontSize } = vars;
    const wrapper = framework === 'angular' ? '.fab-badge-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }
        ${wrapper} {
            display: inline-flex;
        }

        .fab-badge {
            align-items: center;
            border-radius: calc(${borderRadius} * .7);
            ${rounded ? `border-radius: 2em;` : ''}
            ${circle ? `border-radius: 999px;` : ''}
            display: flex;
            font-size: ${fontSize};
            font-weight: 600;
            ${circle ? `height: 1.75em;` : ''}
            justify-content: center;
            line-height: 1;
            ${rounded || circle ? `min-width: 1.75em;` : ''}
            padding: .4em;
            ${rounded ? `padding: .4em .6em;` : ''}
            ${circle ? `padding: 0;` : ''}
        }

        ${colorModifier(props)}
        ${placement ? placementModifier(params) : ''}
        ${sizeModifier(params)}
    `
}

export default BadgeStyles;