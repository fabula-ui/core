const NavbarMenuStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-navbar-menu' : '&';

    return `
        & {
            align-items: center;
            align-self: stretch;
            display: flex;
        }

        ${wrapper}[data-mobile='true'] {
            display: none;
        }

        @media (max-width: 768px) {
            ${wrapper}[data-mobile='false'] {
                display: none!important;
            }

            ${wrapper}[data-mobile='true'] {
                display: flex;
            }
        }
    `
}

export default NavbarMenuStyles;