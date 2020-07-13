const blockType = params => {
    const {framework, props} = params;
    const { stacked } = props;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
        ${wrapper} {
            > a,
            > button {
                border-bottom: none;
                ${stacked ? `padding-left: 1rem;` : ''}
                ${stacked ? `padding-right: 1rem;` : ''}
            }
        }
    `;
}

const floatType = params => {
    const {framework} = params;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
    ${wrapper} { 
        > a,
        > button {
            border-bottom: none;
            border-radius: .3em;
            padding: .5em 1em;
        }
    }
    `;
}

const pillType = params => {
    const {framework} = params;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
    ${wrapper} { 
        > a,
        > button {
            border-bottom: none;
            border-radius: 999px;
            padding: .5em 1em;
        }
    }
    `;
}

const typeModifier = params => {
    const { framework, props } = params;
    const { stacked, type } = props;
    const wrapper = framework === 'angular' ? '.fab-tab' : '&';

    return `
        ${type === 'block' ? blockType(params) : ''}
        ${type === 'float' ? floatType(params) : ''}
        ${type === 'pill' ? pillType(params) : ''}

        ${wrapper} {
            ${stacked && (type === 'float' || type === 'pill') ? `padding: .25rem 0;` : ''}
        }
    `;
}

export default typeModifier;