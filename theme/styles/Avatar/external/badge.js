import getContext from '../../../methods/misc/getContext';
import getHoverTextColor from '../../../methods/color/hoverTextColor';
import getTextColor from '../../../methods/color/textColor';

const BadgeExternalStyles = params => {
    const { framework, props } = params;
    const { color } = props;
    const { colors } = window.__FABTheme.variables.components.button;
    const colorName = colors[color];
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-avatar-wrapper' : '&';

    return `
        ${wrapper} .fab-badge[data-has-placement='false'] {
            bottom: 0;
            position: absolute;
            right: 0;
            transform: translate(25%, 25%);
            z-index: 1;
        }
    `;
}

export default BadgeExternalStyles;