// Modifiers
import colorModifier from './modifiers/color.modifier';
import UtilsStyles from '../../utils';

const IconStyles = params => {
    const { framework, props } = params;
    const { color, name, utils } = props;
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
            opacity: 0;
            position: absolute;
        }

        .fab-icon__svg {
            height: 1.1em;
            width: 1.1em;

            object {
                display: none;
            }

            svg {
                color: inherit;
                height: inherit;
                width: inherit;
            }
        }

        ${color ? colorModifier(params) : ''}
        ${utils ? UtilsStyles(params) : ''}
    `;
}

export default IconStyles;