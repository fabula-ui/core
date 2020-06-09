import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import markerModifier from './modifiers/marker.modifier';

const AlertStyles = params => {
    const { framework, props } = params;
    const { color, marker } = props;
    const wrapper = framework === 'angular' ? '.fab-alert-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }
        ${wrapper} {
            ${framework === 'angular' ? 'width: 100%;' : ''}
        }

        .fab-alert {
            border-radius: .5rem;
            display: flex;
            padding: 1rem;
            position: relative;
        }

        .fab-alert__stage {
            display: flex;
            flex-direction: column;
            width: 100%;

            &:not(:first-child) {
                margin-left: .75em;
            }
        }

        .fab-alert__text,
        .fab-alert__title {
            letter-spacing: -.025em;
        }

        .fab-alert__text {
            font-size: .9em;
            font-weight: 400;
        }

        .fab-alert__title {
            font-weight: 600;
            line-height: 1;
            margin-bottom: .25rem;
        }
        
        .fab-text {
            line-height: 1;

            + .fab-text {
                margin-top: .25rem;
            }
        }

        ${colorModifier(props)}
        ${marker ? markerModifier(props) : ''}
    `;
}

export default AlertStyles;