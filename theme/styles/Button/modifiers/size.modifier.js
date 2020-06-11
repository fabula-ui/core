import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = props => {
    const vars = getComponentVars('button');
    const multiplier = vars.sizeMultipliers[props.size];

    return `
            .fab-button {
                font-size: calc(${vars.fontSize} * ${multiplier});
                min-height: calc(${vars.minHeight} * ${multiplier});
            }
        `;
}

export default sizeModifier;