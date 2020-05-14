// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import roundedModifier from './modifiers/rounded.modifier';
import sizeModifier from './modifiers/size.modifier';

const AvatarStyles = params => {
    const {framework, props} = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.avatar;
    const { fontFamily, fontSize, size } = vars;

    return `
        .fab-avatar { ${componentCommons} }

        .fab-avatar {
            background: ${vars.defaultColor};
            border-radius: ${vars.borderRadiusDefault}rem;
            height: ${size}rem;
            font-family: ${fontFamily};
            font-weight: 400;
            position: relative;
            width: ${size}rem;
        }

        .fab-avatar__initials {
            font-size: ${fontSize};
            font-weight: 500;
            left: 50%;
            letter-spacing: -1px;
            line-height: 1;
            opacity: .8;
            position: absolute;
            text-transform: uppercase;
            top: 50%;
            transform: translate(-50%, -50%);
            user-select: none;
        }

        ${colorModifier(props.color)}
        ${roundedModifier()}
        ${sizeModifier(props.size)}
    `
}

export default AvatarStyles;