// Methods
import { getComponentVars } from '../../methods/misc/getComponentVars';
import { getNumber } from '../../methods/misc/getNumber';

// Modifiers
import { colorModifier } from './modifiers/alert-color.modifier';
import { markerModifier } from './modifiers/alert-marker.modifier';
import { typeModifier } from './modifiers/alert-type.modifier';

export const AlertStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('alert');
    const wrapper = framework === 'angular' ? '.fab-alert' : '&';

    return `
        ${wrapper} {
            align-items: flex-start;
            border: solid ${getNumber(vars.borderWidth, 'px')} transparent;
            border-radius: ${getNumber(vars.borderRadius, 'px')};
            display: flex;
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            padding-bottom: ${getNumber(vars.paddingBottom, 'rem')};
            padding-left: ${getNumber(vars.paddingLeft, 'rem')};
            padding-right: ${getNumber(vars.paddingRight, 'rem')};
            padding-top: ${getNumber(vars.paddingTop, 'rem')};
            position: relative;
            ${vars.transitionIsEnabled ? `transition: ${vars.transition};` : ''}
        }

        ${wrapper}[data-closing='true'] {
            opacity: 0;
            visibility: hidden;
        }

        .fab-alert__stage {
            display: flex;
            flex-direction: column;
            flex-grow: 1;

            &:not(:first-child) {
                margin-left: ${getNumber(vars.spacingX, 'px')};
            }
        }

        .fab-alert__text,
        .fab-alert__title {
            letter-spacing: ${vars.letterSpacing};
        }

        .fab-alert__text {
            font-size: ${vars.textFontSize};
            font-weight: ${vars.textFontWeight};
        }

        .fab-alert__title {
            font-size: ${vars.titleFontSize};
            font-weight: ${vars.titleFontWeight};
            line-height: 1;
        }

        .fab-alert__title:not(:last-child) {
            margin-bottom: ${getNumber(vars.spacingY, 'em')};
        }

        // External
        .fab-close-button {
            margin-bottom: calc(-${getNumber(vars.paddingBottom, 'rem')} / 4);
            margin-left: calc(-${getNumber(vars.paddingLeft, 'rem')} / 4);
            margin-right: calc(-${getNumber(vars.paddingRight, 'rem')} / 4);
            margin-top: calc(-${getNumber(vars.paddingTop, 'rem')} / 4);
        }

        ${wrapper}[data-title='true'] .fab-icon {
            font-size: .95em;
            flex-shrink: 0;
        }

        // Modifiers
        ${colorModifier(params)}
        ${(props.marker || props.type) ? markerModifier(params) : ''}
        ${props.type ? typeModifier(params) : ''}
    `;
}