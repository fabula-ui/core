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
        h: 'row',
        horizontal: 'row',
        v: 'column',
        vertical: 'column'
    };

    return `
        ${props.flex ? `display: flex!important;` : ''}
        ${props.flow ? `flex-direction: ${flowTypes[props.flow] || props.flow}!important;` : ''}
        ${props.direction ? `flex-direction: ${props.direction}!important;` : ''}
        ${props.grow ? `flex-grow: ${props.grow}!important;` : ''}
    `;
}

export default flexUtils;