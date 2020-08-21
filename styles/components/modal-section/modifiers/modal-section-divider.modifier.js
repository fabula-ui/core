import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';

const dividerModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('modalSection');
    const wrapper = framework === 'angular' ? '.fab-modal-section' : '&';

    const color = (props.color || props.parentColor) ? getColor(props.color || props.parentColor, vars.colors) : vars.color;
    const context = (props.color || props.parentColor) ? getContext(props) : 'fill';

    return `
        ${wrapper} {
            ${(props.divider === 'bottom' || props.divider === 'both') ? `border-bottom: solid 1px ${getDividerColor(color, context)};` : ''} 
            ${(props.divider === 'top' || props.divider === 'both') ? `border-top: solid 1px ${getDividerColor(color, context)};` : ''}
        }
    `
}

export default dividerModifier;