import getComponentVars from '../../methods/misc/getComponentVars';

const NavbarSectionStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('navbarSection');
    const wrapper = framework === 'angular' ? '.fab-navbar-section' : '&';

    return `
        & {
            ${props.expand ? `flex-grow: 1;` : ''}
            ${props.placement === 'right' ? 'margin-left: auto;' : '&'}
        }

        ${wrapper} {
            align-self: stretch;
            display: flex;
            padding: ${vars.paddingY} ${vars.paddingX};
        }
    `;
}

export default NavbarSectionStyles;