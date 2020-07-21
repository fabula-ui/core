import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = props => {
    const vars = getComponentVars('tag');
    const multiplier = vars.sizeMultipliers[props.size];

    return `
        .fab-tag {
            font-size: calc(${vars.fontSize} * ${multiplier});
        }

        .fab-tag > a,
        .fab-tag > button {
            font-size: inherit;
            padding: calc(${vars.paddingY} * ${multiplier}) calc(${vars.paddingX} * ${multiplier});
        }
    `;
}

export default sizeModifier;