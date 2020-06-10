import componentCommons from '../../common/component.commons';

// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getGlowColor from '../../methods/color/glowColor';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import markerModifier from './modifiers/marker.modifier';

const AlertStyles = params => {
    const vars = getComponentVars('alert');
    const { framework, props } = params;
    const { color, glow, marker } = props;
    const wrapper = framework === 'angular' ? '.fab-alert-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }
        ${wrapper} {
            ${framework === 'angular' ? 'width: 100%;' : ''}
        }

        .fab-alert {
            background: ${vars.color};
            border: solid ${vars.borderWidth} ${vars.borderColor};
            border-radius: ${vars.borderRadius};
            color: ${vars.textColor};
            display: flex;
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
        }

        .fab-alert__title {
            font-weight: ${vars.titleFontWeight};
            line-height: ${vars.titleLineHeight};
            margin-bottom: ${vars.spacingY};
        }

        // External
        
        .fab-text {
            line-height: ${vars.textLineHeight};
        }

        .fab-text + .fab-text {
            margin-top: ${vars.spacingY};
        }

        ${colorModifier(props)}
        ${marker ? markerModifier(props) : ''}
    `;
}

export default AlertStyles;