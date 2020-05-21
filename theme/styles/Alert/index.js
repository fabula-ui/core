import colorModifier from './modifiers/color.modifier';
import markerModifier from './modifiers/marker.modifier';

const AlertStyles = params => {
    const { props } = params;
    const { marker } = props;

    return `
        .fab-alert {
            border-radius: .5rem;
            display: flex;
            padding: 1rem;
        }

        .fab-alert__stage {
            display: flex;
            flex-direction: column;

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
            margin-bottom: .1em;
        }

        ${colorModifier(props)}
        ${marker ? markerModifier(props) : ''}
    `;
}

export default AlertStyles;