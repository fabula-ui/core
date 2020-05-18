import bgColor from "../../../methods/color/bgColor";
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';

const colorModifier = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const { active, activeColor, type } = props;
    const { colors, textColor } = vars;

    // const activeBorderColor = getColor(props.activeBorderColor, colors) || vars.activeBorderColor;
    // const activeTextColor = getColor(props.activeTextColor, colors) || vars.activeTextColor;
    // const inactiveTextColor = getColor(props.inactiveTextColor, colors) || vars.inactiveTextColor;

    // Element vars
    const { activeBorderColor, activeTextColor, inactiveTextColor } = vars;

    // User-defined
    const userActiveBorderColor = getColor(props.activeBorderColor, colors);
    const userActiveTextColor = getColor(props.activeTextColor, colors);
    const userInactiveTextColor = getColor(props.inactiveTextColor, colors);

    const color = getColor(props.color, colors);
    const context = getContext(props);

    return `
    .fab-tab {
        color: ${inactiveTextColor};
        ${color ? `color: ${getTextColor(color, context)};` : ''}
        ${userInactiveTextColor ? `color: ${userInactiveTextColor};` : ''}
        ${color ? `opacity: .8;` : ''}
    }

    // Active
    .fab-tab {
        ${active ? `border-bottom-color: ${activeBorderColor};` : ''}
        ${active && color ? `border-bottom-color: ${getTextColor(color, context)};` : ''}
        ${active && userActiveBorderColor ? `border-bottom-color: ${userActiveBorderColor};` : ''}

        ${active ? `color: ${activeTextColor};` : ''}
        ${active && color ? `color: ${getTextColor(color, context)};` : ''}
        ${active && userActiveTextColor ? `color: ${userActiveTextColor};` : ''}

        ${active && color ? `opacity: 1;` : ''}
    }
    `
}

export default colorModifier;