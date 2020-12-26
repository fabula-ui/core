import Color from 'color';

// Methods
import { getActiveColor } from '../color/getActiveColor';
import { getBgColor } from '../color/getBgColor';
import { getBorderColor } from '../color/getBorderColor';
import { getColor } from '../color/getColor';
import { getContext } from './getContext';
import { getComponentVars } from './getComponentVars';
import { getFocusGlowColor } from '../color/getFocusGlowColor';
import { getGlobalVars } from './getGlobalVars';
import { getGlowColor } from '../color/getGlowColor';
import { getHoverColor } from '../color/getHoverColor';
import { getHoverTextColor } from '../color/getHoverTextColor';
import { getPlaceholderIconColor } from '../color/getPlaceholderIconColor';
import { getTextColor } from '../color/getTextColor';

export const getComponentColors = (component, props) => {
    const globalVars = getGlobalVars();
    const vars = getComponentVars(component);
    const context = getContext(props);

    const baseBgColor = getColor(props.bgColor || props.color || vars.color, vars.colors, vars.color);
    const bgColor = getBgColor(baseBgColor, context);
    const baseGlowColor = getColor(props.glowColor || props.color || vars.color, vars.colors, vars.color);
    let activeBgColor;
    let activeContrast;
    let activeTextColor;
    let baseActiveTextColor;
    let baseBorderColor;
    let baseFocusGlowColor;
    let baseTextColor;
    let borderColor;
    let focusGlowColor;
    let glowColor;
    let hoverBgColor;
    let hoverContrast;
    let hoverTextColor;
    let textColor;

    baseBorderColor = getColor(props.borderColor || props.color || baseBgColor, vars.colors, vars.color);
    
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

    borderColor = getBorderColor(baseBorderColor, textColor, context);
    hoverBgColor = getHoverColor(bgColor, textColor, context);
    hoverTextColor = getHoverTextColor(textColor, context);
    activeBgColor = getActiveColor(hoverBgColor, context);

    if (context !== 'gradient' && context !== 'invert') {
        baseActiveTextColor = getActiveColor(activeBgColor, context);
        activeContrast = Color(activeBgColor).contrast(Color(baseActiveTextColor));
        hoverContrast = Color(hoverBgColor).contrast(Color(hoverTextColor));
        activeTextColor = activeContrast > hoverContrast ? baseActiveTextColor : hoverTextColor;
    } else {
        activeTextColor = hoverTextColor;
    }
    

    if (props.focusGlowColor) {
        baseFocusGlowColor = getColor(props.focusGlowColor, vars.colors, vars.color);
    } else if (context === 'gradient') {
        baseFocusGlowColor = baseBgColor;
    } else if (context === 'invert') {
        baseFocusGlowColor = textColor;
    } else {
        baseFocusGlowColor = bgColor;
    }

    focusGlowColor = getFocusGlowColor(hoverBgColor, baseBgColor, context);

    return {
        activeBgColor: (activeBgColor || {}).color ? activeBgColor.hex() : activeBgColor,
        activeTextColor: (activeTextColor || {}).color ? activeTextColor.hex() : activeTextColor,
        bgColor: (bgColor || {}).color ? bgColor.hex() : bgColor,
        borderColor: ((props.border || props.outline) && !props.clear) ? ((borderColor || {}).color ? borderColor.hex() : borderColor) : 'transparent',
        focusGlowColor: (focusGlowColor || {}).color ? focusGlowColor.hex() : focusGlowColor,
        hoverBgColor: (hoverBgColor || {}).color ? hoverBgColor.hex() : hoverBgColor,
        hoverTextColor: (hoverTextColor || {}).color ? hoverTextColor.hex() : hoverTextColor,
        glowColor: (glowColor || {}).color ? glowColor.hex() : glowColor,
        placeholderIconColor: getPlaceholderIconColor(bgColor, context),
        textColor: (textColor || {}).color ? textColor.hex() : textColor
    }
}