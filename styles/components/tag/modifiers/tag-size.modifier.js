import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = props => {
    const vars = getComponentVars('tag');
    const multiplier = vars.sizeMultipliers[props.size];

    return `
        .fab-tag {
            font-size: calc(${vars.fontSize} * ${multiplier});
        }
    `;
}

export default sizeModifier;