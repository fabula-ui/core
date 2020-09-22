// Methods
import getBgColor from '../../../methods/color/getBgColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getDividerColor from '../../../methods/color/getDividerColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';

const dividerModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('buttonGroup');    
    const color = (props.dividerColor || props.color) ? getColor(props.dividerColor || props.color, vars.colors) : vars.borderColor;
    const context = (props.dividerColor || props.color) ? getContext(props) : 'fill';
    const layout = (props.layout === 'h' || props.layout === 'horizontal') ? 'h' : 'v';
    const wrapper = framework === 'angular' ? '.fab-button-group' : '&';
    const buttonWrapper = framework === 'angular' ? 'fab-button' : '.fab-button';

    return `
        ${wrapper} {
            .fab-button {
                ${props.outline ? `border-right: none;` : ''}
            }

            ${buttonWrapper}:not(:last-child) ${framework === 'angular' ? '.fab-button' : ''} {
                ${layout === 'h' ? `border-right: solid 1px;` : 'border-bottom: solid 1px;'}
                ${layout === 'h' ? `border-right-color: ${props.color ? getDividerColor(color, context) : getBgColor(color, context)};` : ''}
                ${layout === 'v' ? `border-bottom-color: ${props.color ? getDividerColor(color, context) : getBgColor(color, context)};` : ''}
            }
        }
    `
}

export default dividerModifier;