// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/card-color.modifier';
import layoutModifier from './modifiers/card-layout.modifier';

const CardStyles = params => {
    const { props } = params;
    const vars = getComponentVars('card');

    return `
        .fab-card {
            border-radius: ${vars.borderRadius};
            ${props.padding ? `padding: ${vars.padding};` : ''}
        }
        
        ${colorModifier(params)}
        ${layoutModifier(params)}
    `;
}

export default CardStyles;