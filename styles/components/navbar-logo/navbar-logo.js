const NavbarLogoStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-navbar-logo' : '&';

    return `
    ${wrapper} {
        align-items: center;
        align-self: stretch;
        display: flex;
        height: ${framework === 'angular' ? '100%' : 'auto'};
        
        img {
            margin: 0;
            max-height: 60%;
            width: auto;
        }
    }
    `
}

export default NavbarLogoStyles;