const NavbarTabsStyles = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-navbar-tabs' : '&';
    const alignments = {
        center: 'center',
        end: 'flex-end',
        left: 'flex-start',
        right: 'flex-end',
        start: 'flex-start'
    };

    return `
    ${framework === 'angular' ?
            `
    & {
        display: flex;
        ${props.expand ? `flex-grow: 1;` : ''}
    }
    ` : ''}

    ${wrapper} {
        align-items: center;
        align-self: stretch;
        display: flex;
        ${props.expand ? `flex-grow: 1;` : ''}
        ${props.alignment ? `justify-content: ${alignments[props.alignment] || props.alignment};` : ''}
    }

    fab-tabs,
    .fab-tabs,
    .fab-tabs-wrapper {
        height: 100%;
    }
    `;
}

export default NavbarTabsStyles;