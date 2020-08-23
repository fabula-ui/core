const flexUtils = props => {
    return `
        > [data-fab-component] {
        ${flexCSS(props)}
        }

        ${flexCSS(props)}
    `
}

const flexCSS = props => {
    const { alItems, alignItems, fl, flGrow, flex, flexGrow, flow, justContent, justifyContent } = props;

    const alignmentTypes = {
        center: 'center',
        end: 'flex-end',
        left: 'flex-start',
        right: 'flex-end',
        start: 'flex-start'
    };
    const flowTypes = {
        column: 'column',
        h: 'row',
        horizontal: 'row',
        row: 'row',
        v: 'column',
        vertical: 'column'
    };

    return `
        ${(alItems || alignItems) ? `align-items: ${alignmentTypes[alItems || alignItems] || alItems || alignItems}!important;` : ''}
        ${(fl || flex) ? `display: flex!important;` : ''}
        ${flow ? `flex-direction: ${flowTypes[flow] || flow}!important;` : ''}
        ${props.direction ? `flex-direction: ${props.direction}!important;` : ''}
        ${flGrow || flexGrow ? `flex-grow: ${flGrow || flexGrow}!important;` : ''}
        ${justContent || justifyContent ? `justify-content: ${alignmentTypes[justContent || justifyContent] || justContent || justifyContent}!important;` : ''}
    `;
}

export default flexUtils;