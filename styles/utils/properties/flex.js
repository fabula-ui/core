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
        ${props.flex ? `display: flex!important;` : ''}
        ${flow ? `flex-direction: ${flow}!important;` : ''}
        ${direction ? `flex-direction: ${direction}!important;` : ''}
        ${props.grow ? `flex-grow: ${props.grow}!important;` : ''}
    `;
}

export default flexUtils;