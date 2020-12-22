// Methods
import { getComponentVars } from '../../methods/misc/getComponentVars';
import { getNumber } from '../../methods/misc/getNumber';

// Modifiers
import { colorModifier } from './modifiers/badge-color.modifier';
import { placementModifier } from './modifiers/badge-placement.modifier';
import { sizeModifier } from './modifiers/badge-size.modifier';

export const BadgeStyles = params => {
    const { props } = params;
    const vars = getComponentVars('badge');

    return `
        & { display: inline-block; font-size: inherit; }

        .fab-badge {
            align-items: center;
            border-radius: ${props.rounded ? '999px' : getNumber(vars.borderRadius, 'px')};
            display: flex;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            font-weight: ${vars.fontWeight};
            justify-content: center;
            line-height: 1;
            ${props.rounded ? `min-width: ${vars.circleSize};` : ''}
            padding-bottom: ${getNumber(vars.paddingBottom, 'em')};
            padding-left: ${props.rounded ? `calc(${getNumber(vars.paddingLeft, 'em')} + .2em)` : getNumber(vars.paddingLeft, 'em')};
            padding-right: ${props.rounded ? `calc(${getNumber(vars.paddingRight, 'em')} + .2em)` : getNumber(vars.paddingRight, 'em')};
            padding-top: ${getNumber(vars.paddingTop, 'em')};
            text-align: center;
        }

        // Modifiers
        ${colorModifier(params)}
        ${props.placement ? placementModifier(params) : ''}
        ${sizeModifier(params)}
    `
}