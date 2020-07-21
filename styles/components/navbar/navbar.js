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
            height: ${props.height ? getNumber(props.height, 'px') : 'auto'};
            min-height: ${!props.height ? '4rem' : 'initial'};
            width: 100%;
        }

        // Modifiers
        ${colorModifier(params)}
    `
}

export default NavbarStyles;