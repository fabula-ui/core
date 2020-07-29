// Modifiers
import colorModifier from './modifiers/color.modifier';
import UtilsStyles from '../../utils';
import sizeModifier from './modifiers/size.modifier';

const IconStyles = params => {
    const { framework, props } = params;
    const { color, size, utils } = props;
    const element = framework === 'angular' ? '.fab-icon' : '&';

    return `
        & {
            align-items: center;
            display: inline-flex;
            height: 1.1em;
            justify-content: center;
            width: 1.1em;
        }

        ${element} {
            color: inherit;
            display: inline-flex;
            position: relative;
        }

        ${color ? colorModifier(params) : ''}
        ${size ? sizeModifier(params) : ''}
        ${utils ? UtilsStyles(params) : ''}
    `;
}

export default IconStyles;