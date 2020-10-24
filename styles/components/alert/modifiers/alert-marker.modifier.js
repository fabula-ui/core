import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';

const markerModifier = params => {
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
                background: ${getDividerColor(color, context)};
                bottom: 0;
                content: '';
                display: block;
                left: 0;
                position: absolute;
                top: 0;
                width: ${vars.markerWidth};
            }
        }
    `
}

export default markerModifier;