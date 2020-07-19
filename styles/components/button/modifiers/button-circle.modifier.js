import getComponentVars from '../../../methods/misc/getComponentVars';

const circleModifier = props => {
    const vars = getComponentVars('button');

    return `
        .fab-button {
            border-radius: 50%;
            height: ${props.smashed ? `${vars.minHeightSmashed}` : `${vars.minHeight}`};
            padding-left: 0;
            padding-right: 0;
            width: ${props.smashed ? `${vars.minHeightSmashed}` : `${vars.minHeight}`};
        }
    `;
};

export default circleModifier;