// Methods
import getBgColor from '../../../methods/color/getBgColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getDividerColor from '../../../methods/color/getDividerColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';

const dividerModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('buttonGroup');    
    const color = getColor(props.dividerColor || props.color, vars.colors);
    const context = props.dividerColor || props.color ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';
    const buttonWrapper = framework === 'angular' ? 'fab-button' : '.fab-button-wrapper';

    return `
        ${wrapper} {
            .fab-button-wrapper {
                ${props.outline ? `border-right: none;` : ''}
            }

            ${buttonWrapper}:not(:last-child) .fab-button {
                ${props.glued ? `border-right: solid 1px;` : ''}
                border-right-color: ${props.color ? getDividerColor(color, context) : getBgColor(color, context)};
            }
        }
    `
}

export default dividerModifier;