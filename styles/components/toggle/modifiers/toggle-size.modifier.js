import getComponentVars from '../../../methods/misc/getComponentVars';

const sizeModifier = params => {
    const { props } = params;
    const vars = getComponentVars('toggle');
    const sizeMultiplier = vars.sizeMultipliers[props.size || 'md'];

    return `
        .fab-toggle__label {
            font-size: calc(${vars.fontSize} * ${sizeMultiplier});
        }

        .fab-toggle__switch {
            height: calc(${vars.size} * ${sizeMultiplier});
            width: calc(${vars.size} * 1.75 * ${sizeMultiplier});

            &:before {
                height: calc(${vars.size} * ${sizeMultiplier} - 4px);
                width: calc(${vars.size} * ${sizeMultiplier} - 4px);
            }
        }
    `;
}

export default sizeModifier;