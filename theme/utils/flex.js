const flexUtils = params => {
    const { angularElement, framework, props } = params;
    const { alItems, alignItems, fl, flGrow, flex, flexGrow, flow, justContent, justifyContent } = props;
    let wrapper = framework === 'angular' ? '' : '&';
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

    if (angularElement) {
        wrapper = `> [data-fab-wrapper], > [data-fab-component]`;
    }

    return `
    ${wrapper ? `${wrapper} {` : ''}
        ${!!fl || !!flex ? `align-items: flex-start;` : ''}
        ${!!alItems || !!alignItems ? `align-items: ${alignmentTypes[alItems || alignItems] || alItems || alignItems};` : ''}
        ${!!fl || !!flex ? `display: flex;` : ''}
        ${!!fl || !!flex ? `flex-direction: row;` : ''}
        ${!!flow ? `flex-direction: ${flowTypes[flow] || flow};` : ''}
        ${!!flGrow || !!flexGrow ? `flex-grow: ${flGrow || flexGrow};` : ''}
        ${!!justContent || !!justifyContent ? `justify-content: ${alignmentTypes[justContent || justifyContent] || justContent || justifyContent};` : ''}
    ${wrapper ? '}' : ''}
    `;
}

export default flexUtils;