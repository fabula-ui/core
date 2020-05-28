// Modifiers
import colorModifier from './modifiers/color.modifier';

const IconStyles = params => {
    const { framework, props } = params;
    const { color } = props;
    const element = framework === 'angular' ? '.fab-icon' : '&';

    return `
        & {
            display: inline-flex;
        }

        ${element} {
            display: inline-flex;
        }

        .fab-icon__svg {
            height: 1.1em;
            width: 1.1em;

            svg {
                color: inherit;
                height: inherit;
                width: inherit;
            }
        }

        ${color ? colorModifier(params) : ''}
    `;
}

export default IconStyles;