// Modifiers
import colorModifier from './modifiers/color.modifier';

const IconStyles = params => {
    const { props } = params;
    const { color, name } = props;
    const svg = require(`../../../icons/${name}.svg`);

    return `
        & {
            display: inline-flex;
        }

        .fab-icon {
            background-color: #FFF;
            display: inline-flex;
            height: 1.1em;
            mask-image: url('${svg}');
            mask-repeat: no-repeat;
            mask-position: center center;
            mask-size: contain;
            width: 1.1em;
        }

        ${color !== 'inherit' ? colorModifier(props) : ''}
    `;
}

export default IconStyles;