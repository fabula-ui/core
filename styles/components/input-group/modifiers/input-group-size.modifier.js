import getComponentVars from '../../../methods/misc/getComponentVars';
import getNumber from '../../../methods/misc/getNumber';

const sizeModifier = props => {
    const vars = getComponentVars('inputGroup');
    const spacing = getNumber(props.spacing, 'rem') || vars.spacing;
    const multiplier = vars.sizeMultipliers[props.size];

    return `
        .fab-input-group > *:not(:last-child) {
            ${props.flow === 'horizontal' ? `margin-right: calc(${spacing} * ${multiplier});` : ''}
            ${props.flow === 'vertical' ? `margin-bottom: calc(${spacing} * ${multiplier});` : ''}
        }
        `;
}

export default sizeModifier;