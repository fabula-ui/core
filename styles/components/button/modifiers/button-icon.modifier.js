import getComponentVars from '../../../methods/misc/getComponentVars';

const iconModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('button');
    const wrapper = framework === 'angular' ? '.fab-button' : '&';

    return `
        ${wrapper} {
            ${!!props.icon && !props.label ? `border-radius: 50%;` : ''}
            ${(!!props.icon && !props.label) && !props.smashed ? `height: ${vars.minHeight};` : ''}
            ${(!!props.icon && !props.label) && props.smashed ? `height: ${vars.minHeightSmashed};` : ''}
            ${!!props.icon && !props.label ? `padding-left: 0;` : ''}
            ${!!props.icon && !props.label ? `padding-right: 0;` : ''}
            ${(!!props.icon && !props.label) && !props.smashed ? `width: ${vars.minHeight};` : ''}
            ${(!!props.icon && !props.label) && props.smashed ? `width: ${vars.minHeightSmashed};` : ''}
        }

        // External
        .fab-icon__svg {
            font-size: .8em;
        }
        
        ${wrapper} .fab-inner-icon {
            height: .9em;
            width: .9em;
        }
    `;
};

export default iconModifier;