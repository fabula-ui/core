const NavbarSectionStyles = params => {
    const { framework, props } = params;
    const { alignment, expand, placement } = props;
    const wrapper = framework === 'angular' ? '.fab-navbar-section' : '&';
    const alignments = {
        center: 'center',
        end: 'flex-end',
        left: 'flex-start',
        right: 'flex-end',
        start: 'flex-start'
    };

    return `
        ${wrapper} {
            align-items: center;
            align-self: stretch;
            display: flex;
            ${expand ? `flex-grow: 1;` : ''}
            ${alignment ? `justify-content: ${alignments[alignment] || alignment};` : ''}
            ${placement === 'right' ? `margin-left: auto;` : '&'}
        }
    `;
}

export default NavbarSectionStyles;