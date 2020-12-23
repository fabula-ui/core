import Color from 'color';

// Methods
import { getBgColor } from '../color/getBgColor';
import { getBorderColor } from '../color/getBorderColor';
import { getColor } from '../color/getColor';
import { getContext } from './getContext';
import { getComponentVars } from './getComponentVars';
import { getDividerColor } from '../color/getDividerColor';
import { getTextColor } from '../color/getTextColor';
import { getGlowColor } from '../color/getGlowColor';

export const getComponentColors = (component, props) => {
    const vars = getComponentVars(component);
    const context = getContext(props);
    const baseBorderColor = getColor(props.borderColor || props.color, vars.colors, vars.color);
    const baseBgColor = getColor(props.bgColor || props.color || vars.color, vars.colors, vars.color);
    const bgColor = getBgColor(baseBgColor, context);
    const baseGlowColor = getColor(props.glowColor || props.color || vars.color, vars.colors, vars.color);

    let baseTextColor;
    let borderColor;
    let glowColor;
    let textColor;

    if (props.borderColor || props.color) {
        borderColor = getBorderColor(baseBorderColor, context);
    } else {
        borderColor = getDividerColor(props.color, context);
    }

    if (props.textColor) {
        baseTextColor = getColor(props.textColor, vars.colors, vars.color);
        textColor = Color(baseTextColor).hex();
    } else if (props.color) {
        baseTextColor = getColor(props.color, vars.colors, vars.color);
        textColor = getTextColor(baseTextColor, context);
    } else {
        baseTextColor = getColor(vars.textColor, vars.colors, vars.color);

        if (props.invert) {
            textColor = Color(vars.color).hex();
        } else {
            textColor = Color(baseTextColor).hex();
        }
        
    }

    if (!props.clear && !props.outline) {
        glowColor = getGlowColor(baseGlowColor, props.color ? context : 'fill');
    }

    return {
        bgColor,
        borderColor,
        glowColor,
        textColor
    }
}