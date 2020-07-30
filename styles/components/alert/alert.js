// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/alert-color.modifier';
import markerModifier from './modifiers/alert-marker.modifier';
import typeModifier from './modifiers/alert-type.modifier';

const AlertStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('alert');
    const wrapper = framework === 'angular' ? '.fab-alert-wrapper' : '&';

    return `
        ${wrapper} {
            ${framework === 'angular' ? 'width: 100%;' : ''}
        }

        &[data-visible='false'] {
            display: none;
        }

        .fab-alert {
            align-items: flex-start;
            background: ${vars.color};
            border: solid ${vars.borderWidth};
            border-radius: ${vars.borderRadius};
            color: ${vars.textColor};
            display: flex;
            font-family: ${vars.fontFamily};
            padding: ${vars.padding};
            position: relative;
            transition: ${vars.transition};
        }

        .fab-alert[data-closing='true'] {
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
            line-height: ${vars.titleLineHeight};
        }

        .fab-alert__title:not(:last-child) {
            margin-bottom: ${vars.spacingY};
        }

        // External
        .fab-close-button {
            margin: calc(-${vars.padding} / 4) 0;
        }

        .fab-alert[data-title='true'] .fab-inner-icon {
            height: .95em;
            width: .95em;
        }

        // Modifiers
        ${colorModifier(props)}
        ${(props.marker || props.type) ? markerModifier(props) : ''}
        ${props.type ? typeModifier(props) : ''}
    `;
}

export default AlertStyles;