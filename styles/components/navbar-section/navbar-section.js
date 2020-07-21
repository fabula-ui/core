import getComponentVars from '../../methods/misc/getComponentVars';

const NavbarSectionStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('navbarSection');
    const wrapper = framework === 'angular' ? '.fab-navbar-section' : '&';
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
                ${props.placement === 'right' ? 'margin-left: auto;' : '&'}
            }
            `
            :
            ''}

        ${wrapper} {
            align-items: center;
            align-self: stretch;
            display: flex;
            ${props.expand ? `flex-grow: 1;` : ''}
            ${props.alignment ? `justify-content: ${alignments[props.alignment] || props.alignment};` : ''}
            ${props.placement === 'right' ? 'margin-left: auto;' : ''}
            padding: ${vars.paddingY} ${vars.paddingX};
        }
    `;
}

export default NavbarSectionStyles;