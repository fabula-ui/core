// Methods
import { getNumber } from '../../methods/misc/getNumber';

// Modifiers
import colorModifier from './modifiers/navbar-color.modifier';
import { getComponentVars } from '../../methods/misc/getComponentVars';

const NavbarStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('navbar');
    const wrapper = framework === 'angular' ? '.fab-navbar' : '&';

    return `
        ${wrapper} {
            align-items: center;
            display: flex;
            height: ${props.height ? getNumber(props.height, 'px') : vars.height};
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
        }

        // Modifiers
        ${colorModifier(params)}
    `
}

export default NavbarStyles;