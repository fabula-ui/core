import getBgColor from '../../../methods/color/getBgColor';
import getBorderColor from '../../../methods/color/getBorderColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import getDividerColor from '../../../methods/color/getDividerColor';
import getTextColor from '../../../methods/color/getTextColor';


const colorModifier = props => {
    const vars = getComponentVars('toast');
    const color = getColor(props.color, vars.colors);
    const context = getContext(props);

    return `
        .fab-toast {
            background-color: ${getBgColor(color, context)};
            border-color: ${!props.clear && props.outline ? `${getBorderColor(color, context)};` : `${getDividerColor(color, context)};`}
            color: ${getTextColor(color, context)};
        }
    `;
};

export default colorModifier;