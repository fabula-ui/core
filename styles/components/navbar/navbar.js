// Methods
import getNumber from '../../methods/misc/getNumber';

// Modifiers
import colorModifier from './modifiers/navbar-color.modifier';

const NavbarStyles = params => {
    const { framework, props } = params;
    const { height } = props;
    const wrapper = framework === 'angular' ? '.fab-navbar' : '&';

    return `
        ${wrapper} {
            display: flex;
            height: ${height ? getNumber(props.height, 'px') : 'auto'};
            min-height: ${!height ? '4rem' : 'initial'};
        }

        // External
        ${props.color ? colorModifier(params) : ''}
    `
}

export default NavbarStyles;