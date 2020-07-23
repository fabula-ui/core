// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getNumber from '../../methods/misc/getNumber';

// Modifiers
import colorModifier from './modifiers/card-color.modifier';
import layoutModifier from './modifiers/card-layout.modifier';

const CardStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('card');

    return `
        ${framework === 'angular' ? `& { display: block; }` : ''}

        > .fab-card {
            border-radius: ${vars.borderRadius};
            ${props.padding ? `padding: ${typeof props.padding === 'boolean' ? `${vars.padding};` : getNumber(props.padding, 'rem')};` : ''}
            width: 100%;
        }
        
        ${colorModifier(params)}
        ${layoutModifier(params)}
    `;
}

export default CardStyles;