import getComponentVars from '../../../methods/misc/getComponentVars';

const smashedModifier = props => {
    const vars = getComponentVars('button');

    return `
        .fab-button {
            border-radius: ${vars.borderRadiusSmashed};
            font-size: calc(${vars.fontSize} * .9);
            min-height: ${vars.minHeightSmashed};
            padding-bottom: calc(${vars.paddingBottom} / 2);
            padding-left: calc(${vars.paddingLeft} - .5em);
            padding-right: calc(${vars.paddingRight} - .5em);
            padding-top: calc(${vars.paddingTop} / 2);

        }
    `;
};

export default smashedModifier;