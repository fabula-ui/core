import { getBgColor } from '../../../methods/color/getBgColor';
import getColor from '../../../methods/color/getColor';
import getComponentVars from '../../../methods/misc/getComponentVars';
import getContext from '../../../methods/misc/getContext';
import { getTextColor } from '../../../methods/color/getTextColor';

const colorModifier = params => {
    const { props } = params;
    const vars = getComponentVars('drawer');
    const color = props.color ? getColor(props.color, vars.colors) : vars.color;
    const context = props.color ? getContext(props) : 'fill';
    const btnColor = props.closeButton && props.closeButton.color ? getColor(props.closeButton.color, vars.colors) : color;
    let btnContext;

    if (props.closeButton && props.closeButton.color) {
        btnContext = getContext(props.closeButton);
    } else if (context === 'fill') {
        btnContext = 'lighten';
    } else if (context === 'darken' || context === 'lighten') {
        btnContext = 'fill';
    } else {
        btnContext = context;
    }

    return `
        .fab-drawer {
            background: ${getBgColor(color, context)};
            color: ${getTextColor(color, context)};
        }

        .fab-drawer__close-btn {
            background: ${getBgColor(btnColor, btnContext)};
            color: ${getTextColor(btnColor, btnContext)};
        }
    `;
}

export default colorModifier;