// Methods
import getNumber from '../../methods/misc/getNumber';

// Modifiers
import colorModifier from './modifiers/navbar-color.modifier';
import getComponentVars from '../../methods/misc/getComponentVars';

const NavbarStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('navbar');
    const wrapper = framework === 'angular' ? '.fab-navbar' : '&';

    return `
        ${wrapper} {
            display: flex;
            height: ${props.height ? getNumber(props.height, 'px') : 'auto'};
            min-height: ${!props.height ? vars.minHeight : 'initial'};
            width: 100%;
        }

        // Modifiers
        ${colorModifier(params)}
    `
}

export default NavbarStyles;