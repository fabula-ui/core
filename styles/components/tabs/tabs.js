import colorModifier from './modifiers/tabs-color.modifier';

const TabsStyle = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-tabs-wrapper' : '&';

    return `
        ${framework === 'angular' ? '& { display: block; }' : ''}

        ${wrapper} {
            ${props.stretch ? `align-self: stretch;` : ''}
        }

        .fab-tabs {
            display: flex;
            ${props.stacked ? `flex-direction: column;` : ''}
            ${props.stretch ? `height: 100%;` : ''}
            ${props.type === 'float' || props.type === 'pill' ? `padding: .7rem 1rem;` : ''}
        }

        .fab-tab {
            height: 100%;
        }

        .fab-tab > a,
        .fab-tab > button {
            ${props.layout === 'vertical' ? 'align-items: center;' : ''}
            ${props.layout === 'vertical' ? `flex-direction: column;` : ''}
            height: 100%;
        }

        ${colorModifier(params)}
    `
}

export default TabsStyle;