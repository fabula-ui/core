const flexUtils = params => {
    return `
        > [data-fab-component] {
        ${flexCSS(params)}
        }

        ${flexCSS(params)}
    `
}

const flexCSS = params => {
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

    return `
        ${!!alItems || !!alignItems ? `align-items: ${alignmentTypes[alItems || alignItems] || alItems || alignItems}!important;` : ''}
        ${!!fl || !!flex ? `display: flex!important;` : ''}
        ${!!flow ? `flex-direction: ${flowTypes[flow] || flow}!important;` : ''}
        ${!!flGrow || !!flexGrow ? `flex-grow: ${flGrow || flexGrow}!important;` : ''}
        ${!!justContent || !!justifyContent ? `justify-content: ${alignmentTypes[justContent || justifyContent] || justContent || justifyContent}!important;` : ''}
    `;
}

export default flexUtils;