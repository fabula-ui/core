import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { props } = params;
    const vars = getComponentVars('toggle');
    const sizeMultiplier = vars.sizeMultipliers[props.size || 'md'];

    return `
        .fab-checkbox__label {
            font-size: calc(${vars.fontSize} * ${sizeMultiplier});
        }

        .fab-checkbox__square {
            font-size: calc(${vars.fontSize} * ${sizeMultiplier});
        }
    `;
}

export default sizeModifier;