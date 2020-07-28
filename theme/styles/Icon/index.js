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
            display: inline-flex;
        }

        ${element} {
            color: inherit;
            display: inline-flex;
            position: relative;
        }

        .fab-icon__object {
            color: #000;
            height: 1.1em;
            opacity: .1;
            pointer-events: none;
            width: 1.1em;
        }

        .fab-icon__svg {
            display: inline-flex;
            pointer-events: none;

            object {
                display: none;
            }

            svg {
                color: inherit;
                height: inherit;
                width: inherit;
            }
        }

        .fab-icon__svg[data-appended='true'] {
            height: 1.1em;
            width: 1.1em;
        }

        ${color ? colorModifier(params) : ''}
        ${size ? sizeModifier(params) : ''}
        ${utils ? UtilsStyles(params) : ''}
    `;
}

export default IconStyles;