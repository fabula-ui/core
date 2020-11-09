// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/alert-color.modifier';
import markerModifier from './modifiers/alert-marker.modifier';
import typeModifier from './modifiers/alert-type.modifier';

const AlertStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('alert');
    const wrapper = framework === 'angular' ? '.fab-alert' : '&';

    return `
        ${wrapper} {
            align-items: flex-start;
            border: solid ${vars.borderWidth};
            border-radius: ${vars.borderRadius};
            color: ${vars.textColor};
            display: flex;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            padding: ${vars.padding};
            position: relative;
            transition: ${vars.transition};
        }

        ${wrapper}[data-closing='true'] {
            opacity: 0;
            visibility: hidden;
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
            letter-spacing: ${vars.letterSpacing};
        }

        .fab-alert__text {
            font-size: ${vars.textFontSize};
            font-weight: ${vars.textFontWeight};
        }

        .fab-alert__title {
            font-size: ${vars.titleFontSize};
            font-weight: ${vars.titleFontWeight};
            line-height: 1;
        }

        .fab-alert__title:not(:last-child) {
            margin-bottom: ${vars.spacingY};
        }

        // External
        .fab-close-button {
            margin: calc(-${vars.padding} / 4) 0;
        }

        ${wrapper}[data-title='true'] .fab-icon {
            font-size: .95em;
            flex-shrink: 0;
        }

        // Modifiers
        ${colorModifier(params)}
        ${(props.marker || props.type) ? markerModifier(params) : ''}
        ${props.type ? typeModifier(params) : ''}
    `;
}

export default AlertStyles;