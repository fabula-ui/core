import getComponentVars from '../../../methods/misc/getComponentVars';

const blockType = params => {
    const {framework, props, vars} = params;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
        ${wrapper} {
            border-bottom: none;
            ${props.stacked ? `padding-left: ${vars.paddingX};` : ''}
            ${props.stacked ? `padding-right: ${vars.paddingX};` : ''}
        }
    `;
}

const floatType = params => {
    const {framework, props, vars} = params;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
    ${wrapper} { 
        border-bottom: none;
        border-radius: .3em;
        padding: ${props.stacked ? `${vars.paddingY} ${vars.paddingX}` : `calc(${vars.paddingY} / 2) ${vars.paddingX}`};
    }
    `;
}

const pillType = params => {
    const {framework, props, vars} = params;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
    ${wrapper} {
        border-bottom: none;
        border-radius: 999px;
        padding: ${props.stacked ? `${vars.paddingY} ${vars.paddingX}` : `calc(${vars.paddingY} / 2) ${vars.paddingX}`};
    }
    `;
}

const typeModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tab');
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
        ${props.type === 'block' ? blockType({...params, vars}) : ''}
        ${props.type === 'float' ? floatType({...params, vars}) : ''}
        ${props.type === 'pill' ? pillType({...params, vars}) : ''}
    `;
}

export default typeModifier;