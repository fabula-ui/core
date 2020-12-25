import { getBorderColor } from '../../../methods/color/getBorderColor';
import { getColor } from '../../../methods/color/getColor';
import { getComponentVars } from '../../../methods/misc/getComponentVars';
import { getContext } from '../../../methods/misc/getContext';
import { getNumber } from '../../../methods/misc/getNumber';

export const markerModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('alert');
    const color = getColor(props.marker, vars.colors);
    const context = getContext(props);
    const wrapper = framework === 'angular' ? '.fab-alert' : '&';

    return `
        ${wrapper} {
            overflow: hidden;
            position: relative;

            &:before {
                background: ${getBorderColor(color, context)};
                bottom: 0;
                content: '';
                display: block;
                left: 0;
                position: absolute;
                top: 0;
                width: ${getNumber(vars.markerWidth, 'px')};
            }
        }
    `
}