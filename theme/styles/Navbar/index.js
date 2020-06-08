import componentCommons from '../../common/component.commons';

// Methods
import getNumber from '../../methods/misc/getNumber';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const NavbarStyles = params => {
    const { framework, props } = params;
    const { height } = props;
    const wrapper = framework === 'angular' ? '.fab-navbar' : '&';

    return `
        ${wrapper} { ${componentCommons} }
        ${wrapper} {
            align-items: center;
            background-color: #FFF;
            display: flex;
            height: ${height ? getNumber(height, 'px') : `4rem;`}
        }

        .fab-navbar-logo {
            align-items: center;
            align-self: stretch;
            display: flex;
            

            img {
                max-height: 60%;
                width: auto;
            }
        }

        // External

        .fab-button {
            max-height: 80%;
            min-height: initial;
        }

        .fab-tabs-wrapper {
            align-self: stretch;
        }

        ${props.color ? colorModifier(params) : ''}
    `
}

export default NavbarStyles;