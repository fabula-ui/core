const flexUtils = props => {
    return `
        > [data-fab-component] {
            ${flexCSS(props)}
        }

        ${flexCSS(props)}
    `
}

const flexCSS = props => {
    const flowTypes = {
        column: 'column',
        h: 'row',
        horizontal: 'row',
        row: 'row',
        v: 'column',
        vertical: 'column'
    };
    const direction = flowTypes[props.direction];
    const flow = flowTypes[props.flow]

    return `
        ${(props.flex && typeof props.flex === 'boolean') ? `display: flex!important;` : ''}
        ${(props.flex && typeof props.flex !== 'boolean') ? `flex: ${props.flex}!important;` : ''}
        ${props.basis != null  ? `flex-basis: ${props.basis}!important;` : ''}
        ${flow ? `flex-direction: ${flow}!important;` : ''}
        ${direction ? `flex-direction: ${direction}!important;` : ''}
        ${props.grow != null ? `flex-grow: ${props.grow}!important;` : ''}
        ${props.shrink != null ? `flex-shrink: ${props.shrink}!important;` : ''}
        ${props.wrap ? `flex-wrap: wrap!important;` : ''}
    `;
}

export default flexUtils;