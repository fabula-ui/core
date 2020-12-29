import { getComponentVars } from '../../methods/misc/getComponentVars';

export const NavbarSectionStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('navbarSection');
    const wrapper = framework === 'angular' ? '.fab-navbar-section' : '&';

    return `
        & {
            ${props.expand ? `flex-grow: 1;` : ''}
            flex-shrink: 0;
            height: 100%;
            ${props.placement === 'right' ? 'margin-left: auto;' : '&'}
        }

        ${wrapper} {
            align-self: stretch;
            display: flex;
            height: 100%;
            padding: 0 ${vars.paddingX};
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
    `;
}