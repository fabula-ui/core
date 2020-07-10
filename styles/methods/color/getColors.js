import getBgColor from './getBgColor';
import getTargetColor from './getTargetColor';
import getTextColor from './getTextColor';
import getContext from '../misc/getContext';

const getColors = params => {
    const { colors, props, vars } = params;
    const color = getTargetColor(props.color, colors);
    const context = getContext(props);
    const textContext = color.type === 'custom' ? 'fill' : context;

    return {
        bgColor: getBgColor(color.value, context),
        textColor: getTextColor(color.value, textContext)
    }
}

export default getColors;