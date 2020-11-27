// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getNumber from '../../methods/misc/getNumber';

// Modifiers
import colorModifier from './modifiers/card-color.modifier';
import layoutModifier from './modifiers/card-layout.modifier';

const CardStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('card');
    const wrapper = framework === 'angular' ? '.fab-card' : '&';

    return `
        ${framework === 'angular' ? `& { display: block; }` : ''}

        ${wrapper} {
            border-radius: ${vars.borderRadius};
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            ${props.padding ? `padding: ${typeof props.padding === 'boolean' ? `${vars.padding};` : getNumber(props.padding, 'rem')};` : ''}
        }
        
        ${colorModifier(params)}
        ${layoutModifier(params)}
    `;
}

export default CardStyles;