import getComponentVars from '../../../methods/misc/getComponentVars';

const circleModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('button');
    const wrapper = framework === 'angular' ? '.fab-button' : '&';

    return `
        ${wrapper} {
            border-radius: 50%;
            height: ${props.smashed ? `${vars.minHeightSmashed}` : `${vars.minHeight}`};
            padding-left: 0;
            padding-right: 0;
            width: ${props.smashed ? `${vars.minHeightSmashed}` : `${vars.minHeight}`};
        }
    `;
};

export default circleModifier;