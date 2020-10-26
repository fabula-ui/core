import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getTextColor from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { framework, props } = params;
    const vars = getComponentVars('listHeader');
    const color = (props.color || props.parentColor) && getColor(props.color || props.parentColor, vars.colors);
    const wrapper = framework === 'angular' ? '.fab-list-header' : '&';

    let textColor = (props.color || props.parentColor) ? getTextColor(color, 'fill') : vars.textColor;

    if (props.color) {
        textColor = getColor(props.color, vars.colors);
    }

    return `
        ${wrapper} {
            color: ${textColor};
        }
    `;
}

export default colorModifier;