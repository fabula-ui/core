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
    const {framework, vars} = params;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
    ${wrapper} { 
        border-bottom: none;
        border-radius: .3em;
        padding: calc(${vars.paddingY} / 2) ${vars.paddingX};
    }
    `;
}

const pillType = params => {
    const {framework, vars} = params;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
    ${wrapper} {
        border-bottom: none;
        border-radius: 999px;
        padding: calc(${vars.paddingY} / 2) ${vars.paddingX};
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

        ${wrapper} {
            ${props.stacked && (props.type === 'float' || props.type === 'pill') ? `padding: .25rem 0;` : ''}
        }
    `;
}

export default typeModifier;