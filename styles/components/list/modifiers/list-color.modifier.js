import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/getTextColor';


const colorModifier = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const color = props.color || props.clear ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color || props.clear ? getContext(props) : 'fill';
    const wrapper = framework === 'angular' ? '.fab-list-wrapper' : '&';

    return `
        ${wrapper} {
            background-color: ${color};
            color: ${getTextColor(color, 'fill')};
        }

        ${wrapper} .fab-text:not([data-color]) {
            ${props.color ? `color: inherit;` : ''}
            
            &[data-aux='true'] {
                ${props.color ? `opacity: .8;` : ''}
            }
        }
    `;
}

export default colorModifier;