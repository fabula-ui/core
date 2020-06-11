// Component commons
import componentCommons from '../../common/component.commons';

// External
import BadgeExternalStyles from './external/badge';

// Methods
import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/color.modifier';
import sizeModifier from './modifiers/size.modifier';

const AvatarStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('avatar');
    const wrapper = framework === 'angular' ? '.fab-avatar-wrapper' : '&';

    return `
        ${wrapper} { ${componentCommons} }

        ${wrapper} {
            display: inline-flex;
            position: relative;
        }

        .fab-avatar {
            background: ${vars.color};
            border-radius: ${props.rounded ? '999px' : vars.borderRadius};
            color: #FFF;
            font-size: ${vars.iconSize};
            height: ${vars.size};
            font-family: ${vars.fontFamily};
            font-weight: 400;
            position: relative;
            width: ${vars.size};
        }

        .fab-avatar .fab-icon {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        .fab-avatar__image {
            background-position: center center;
            background-size: cover;
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
        }

        .fab-avatar__initials {
            font-size: ${vars.initialsFontSize};
            font-weight: ${vars.initialsFontWeight};
            left: 50%;
            letter-spacing: -1px;
            line-height: 1;
            opacity: ${vars.initialsOpacity};
            position: absolute;
            text-transform: uppercase;
            top: 50%;
            transform: translate(-50%, -50%);
            user-select: none;
        }

        ${colorModifier(props)}
        ${sizeModifier(props)}

        // External
        ${BadgeExternalStyles(params)}
    `
}

export default AvatarStyles;