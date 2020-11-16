import colorModifier from './modifiers/tabs-color.modifier';

const TabsStyle = params => {
    const { props } = params;

    return `
        & { 
            display: block;
            ${(props.expand === 'both' || props.expand === 'v') ? `align-self: stretch;` : ''}
        }

        .fab-tabs {
            ${(props.alignment === 'center' && props.stacked) ? `align-items: center;` : ''}
            ${(props.alignment === 'center' && !props.stacked) ? `justify-content: center;` : ''}
            ${props.alignment === 'left' && props.stacked ? `justify-content: flex-start;` : ''}
            ${props.alignment === 'left' && !props.stacked ? `align-items: flex-start;` : ''}
            ${props.alignment === 'right' && props.stacked ? `justify-content: flex-end;` : ''}
            ${props.alignment === 'right' && !props.stacked ? `align-items: flex-end;` : ''}
            display: inline-flex;
            ${props.expand ? `display: flex;` : ''}
            ${props.stacked ? `flex-direction: column;` : ''}
            ${(props.expand === 'both' || props.expand === 'v') ? `height: 100%;` : ''}
            ${props.type === 'float' || props.type === 'pill' ? `padding: .7rem 1rem;` : ''}
        }

        fab-tab,
        .fab-tab {
            height: 100%;
        }

        .fab-tab {
            ${(props.layout === 'v' || props.layout === 'vertical') ? 'align-items: center;' : ''}
            ${(props.layout === 'v' || props.layout === 'vertical') ? `flex-direction: column;` : ''}
            height: 100%;
        }

        // Modifiers
        ${colorModifier(params)}
    `
}

export default TabsStyle;