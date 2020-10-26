const NavbarMenuStyles = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-navbar-menu' : '&';

    return `
        & {
            align-items: center;
            align-self: stretch;
            display: flex;
            ${(props.expand === 'both' || props.expand === 'v') ? `height: 100%;` : ''}
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

        .fab-tabs,
        .fab-tabs-wrapper {
            ${(props.expand === 'both' || props.expand === 'v') ? `height: 100%;` : ''}
        }
    `
}

export default NavbarMenuStyles;