const flexUtils = params => {
    const { framework, props } = params;
    const flowTypes = {
        column: 'column',
        h: 'row',
        horizontal: 'row',
        row: 'row',
        v: 'column',
        vertical: 'column'
    };
    const direction = flowTypes[props.direction];
    const flow = flowTypes[props.flow];
    const wrapper = framework === 'angular' ? '> [data-fab-component], > [data-fab-wrapper] > [data-fab-component]' : '&[data-fab-component], &[data-fab-wrapper] > [data-fab-component]';

    return `
        & {
            ${props.basis != null ? `flex-basis: ${props.basis}!important;` : ''}
            ${props.grow != null ? `flex-grow: ${props.grow}!important;` : ''}
            ${props.shrink != null ? `flex-shrink: ${props.shrink}!important;` : ''}
        }
        
        ${wrapper} {
            ${(props.flex && typeof props.flex === 'boolean') ? `display: flex!important;` : ''}
            ${(props.flex && typeof props.flex !== 'boolean') ? `flex: ${props.flex}!important;` : ''}
            ${flow ? `flex-direction: ${flow}!important;` : ''}
            ${direction ? `flex-direction: ${direction}!important;` : ''}
            ${props.wrap ? `flex-wrap: wrap!important;` : ''}
        }
    `;
}

export default flexUtils;