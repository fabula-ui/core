const flexUtils = params => {
    const { framework, props } = params;
    const { alItems, alignItems, fl, flGrow, flex, flexGrow, flow, justContent, justifyContent } = props;
    const wrapper = framework === 'angular' ? '' : '&';
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
    ${wrapper} {
        ${!!fl || !!flex ? `align-items: flex-start;` : ''}
        ${!!alItems || !!alignItems ?  `align-items: ${alignmentTypes[alItems || alignItems] || alItems || alignItems};` : ''}
        ${!!fl || !!flex ? `display: flex;` : ''}
        ${!!fl || !!flex ? `flex-direction: row;` : ''}
        ${!!flow ?  `flex-direction: ${flowTypes[flow] || flow};` : ''}
        ${!!flGrow || !!flexGrow ?  `flex-grow: ${flGrow || flexGrow};` : ''}
        ${!!justContent || !!justifyContent ?  `justify-content: ${alignmentTypes[justContent || justifyContent] || justContent || justifyContent};` : ''}
    }
    `;
}

export default flexUtils;