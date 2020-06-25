// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import markerModifier from './modifiers/marker.modifier';

const AlertStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('alert');
    const wrapper = framework === 'angular' ? '.fab-alert-wrapper' : '&';

    return `
        ${wrapper} {
            ${framework === 'angular' ? 'width: 100%;' : ''}
        }

        .fab-alert {
            background: ${vars.color};
            border: solid ${vars.borderWidth} ${vars.borderColor};
            border-radius: ${vars.borderRadius};
            color: ${vars.textColor};
            display: flex;
            font-family: ${vars.fontFamily};
            padding: ${vars.padding};
            position: relative;
        }

        .fab-alert__stage {
            display: flex;
            flex-direction: column;
            width: 100%;

            &:not(:first-child) {
                margin-left: ${vars.spacingX};
            }
        }

        .fab-alert__text,
        .fab-alert__title {
            letter-spacing: -.025em;
        }

        .fab-alert__text {
            font-weight: ${vars.textFontWeight};

            .fab-text {
                font-weight: inherit;
                line-height: inherit;
            }
        }

        .fab-alert__title {
            font-weight: ${vars.titleFontWeight};
            line-height: ${vars.titleLineHeight};

            .fab-text {
                font-weight: inherit;
                line-height: inherit;
            }
        }

        .fab-alert__title:not(:last-child) {
            margin-bottom: ${vars.spacingY};
        }

        // External
        .fab-text {
            line-height: ${vars.textLineHeight};
        }

        ${colorModifier(props)}
        ${props.marker ? markerModifier(props) : ''}
    `;
}

export default AlertStyles;