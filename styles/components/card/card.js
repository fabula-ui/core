// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/card-color.modifier';

const CardStyles = params => {
    const { props } = params;
    const vars = getComponentVars('card');

    return `
        .fab-card {
            border-radius: ${vars.borderRadius};
            ${props.padding ? `padding: ${vars.padding};` : ''}
        }
        
        ${colorModifier(params)}
    `;
}

export default CardStyles;