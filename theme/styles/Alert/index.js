import colorModifier from './modifiers/color.modifier';
import markerModifier from './modifiers/marker.modifier';

const AlertStyles = params => {
    const { props } = params;
    const { marker } = props;

    return `
        .fab-alert {
            border-radius: .5rem;
            padding: 1rem;
        }

        ${colorModifier(props)}
        ${marker ? markerModifier(props) : ''}
    `;
}

export default AlertStyles;