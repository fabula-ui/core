// Modifiers
import colorModifier from './modifiers/color.modifier';

const IconStyles = params => {
    const { props } = params;
    const { name } = props;
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
            mask-size: cover;
            width: 1.1em;

            &:before {
                background: 
                content: '';
                display: block;
            }
            
        }

        ${colorModifier(props)}
    `;
}

export default IconStyles;