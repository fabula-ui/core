// External
import { BadgeExternalStyles } from './external/avatar-badge';

// Methods
import { getComponentVars } from '../../methods/misc/getComponentVars';
import { getNumber } from '../../methods/misc/getNumber';

// Modifiers
import { colorModifier } from './modifiers/avatar-color.modifier';
import { sizeModifier } from './modifiers/avatar-size.modifier';

export const AvatarStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('avatar');
    const wrapper = framework === 'angular' ? '.fab-avatar-wrapper' : '&';

    return `
        ${wrapper} {
            display: inline-flex;
            position: relative;
        }

        .fab-avatar {
            border: solid ${getNumber(vars.borderWidth, 'px')} transparent;
            border-radius: ${props.rounded ? '999px' : getNumber(vars.borderRadius, 'px')};
            font-size: 1rem;
            height: ${getNumber(vars.size, 'px')};
            overflow: hidden;
            position: relative;
            width: ${getNumber(vars.size, 'px')};
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
            font-family: ${vars.initialsFontFamily};
            font-weight: ${vars.initialsFontWeight};
            left: 50%;
            letter-spacing: ${vars.letterSpacing};
            line-height: 1;
            opacity: ${vars.initialsOpacity};
            position: absolute;
            text-transform: uppercase;
            top: 50%;
            transform: translate(-50%, -50%);
            user-select: none;
        }

        // External
        .fab-avatar .fab-icon {
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        ${BadgeExternalStyles(params)}

        // Modifiers
        ${colorModifier(props)}
        ${sizeModifier(props)}
    `
}