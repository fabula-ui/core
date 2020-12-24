import Color from 'color';

// Methods
import { getBgColor } from '../color/getBgColor';
import { getBorderColor } from '../color/getBorderColor';
import { getColor } from '../color/getColor';
import { getContext } from './getContext';
import { getComponentVars } from './getComponentVars';
import { getDividerColor } from '../color/getDividerColor';
import { getGlobalVars } from './getGlobalVars';
import { getGlowColor } from '../color/getGlowColor';
import { getHoverColor } from '../color/getHoverColor';
import { getHoverTextColor } from '../color/getHoverTextColor';
import { getTextColor } from '../color/getTextColor';

export const getComponentColors = (component, props) => {
    const globalVars = getGlobalVars();
    const vars = getComponentVars(component);
    const context = getContext(props);
    const baseBorderColor = getColor(props.borderColor || props.color, vars.colors, vars.color);
    const baseBgColor = getColor(props.bgColor || props.color || vars.color, vars.colors, vars.color);
    const bgColor = getBgColor(baseBgColor, context);
    const baseGlowColor = getColor(props.glowColor || props.color || vars.color, vars.colors, vars.color);
    const hoverBgColor = getHoverColor(bgColor, context);
    const hoverTextColor = getHoverTextColor(bgColor, context);
    let baseTextColor;
    let borderColor;
    let glowColor;
    let textColor;

    if (props.borderColor || props.color) {
        borderColor = getBorderColor(baseBorderColor, context);
    } else {
        borderColor = getDividerColor(vars.color, context);
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
        } else if (globalVars.baseColor === vars.color) {
            textColor = Color(baseTextColor).hex();
        } else {
            textColor = getTextColor(vars.color, context);
        }
    }

    if (!props.clear && !props.outline) {
        glowColor = getGlowColor(baseGlowColor, props.color ? context : 'fill');
    }

    return {
        bgColor,
        borderColor: ((props.border || props.outline) && !props.clear) ? borderColor : 'transparent',
        hoverBgColor,
        hoverTextColor,
        glowColor,
        textColor
    }
}