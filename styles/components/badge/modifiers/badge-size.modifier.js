import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { props } = params;
    const vars = getComponentVars('badge');
    const multiplier = vars.sizeMultipliers[props.size || 'md'];

    return `
        .fab-badge {
            font-size: calc(${vars.fontSize} * ${multiplier});
        }
    `;
}

export default sizeModifier;