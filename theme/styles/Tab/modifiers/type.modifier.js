import getActiveColor from '../../../methods/color/activeColor';
import getBgColor from '../../../methods/color/bgColor';
import getColor from '../../../methods/color/getColor';
import getContext from '../../../methods/misc/getContext';
import getTextColor from '../../../methods/color/textColor';
import getHoverColor from '../../../methods/color/hoverColor';
import getHoverTextColor from '../../../methods/color/hoverTextColor';

const blockType = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;

    return `
        .fab-tab { 
            border-bottom: none;
        }
    `;
}

const floatType = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;

    return `
    .fab-tab { 
        border-bottom: none;
        border-radius: .5rem;
        
        > a,
        > button {
            padding: .3rem 1rem;
        }
    }
    `;
}

const typeColors = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const { active } = props;

    // Context
    const color = getColor(props.color, vars.colors);
    const context = getContext(props);

    // Element vars
    const { activeFillColor, activeTextColor, colors, inactiveTextColor } = vars;

    // User-defined
    const userActiveFillColor = getColor(props.activeFillColor, colors);

    const targetFillColor = userActiveFillColor || color || activeFillColor;
    // const userActiveTextColor = getColor(props.activeTextColor, colors);
    // const userInactiveTextColor = getColor(props.inactiveTextColor, colors);

    return `
        .fab-tab { 
            border-bottom: none;

            &:hover {
                background-color: ${getHoverColor(color, context)};
                color: ${getHoverTextColor(color, context)};
            }

            &:active {
                background-color: ${getActiveColor(color, context)};
            }
        }

        .fab-tab {
            ${active ? `background-color: ${activeFillColor};` : ''}
            ${active && color ? `background-color: ${getActiveColor(color, context)};` : ''}
            ${active && userActiveFillColor ? `background-color: ${userActiveFillColor};` : ''}

            ${active && activeFillColor ? `color: ${getTextColor(activeFillColor, context)};` : ''}
            ${active && color ? `color: ${getHoverTextColor(color, context)};` : ''}
            ${active && userActiveFillColor ? `color: ${getHoverTextColor(userActiveFillColor, context)};` : ''}

            &:hover {
                ${active ? `background-color: ${getHoverColor(activeFillColor, context)};` : ''}
                ${active && color ? `background-color: ${getHoverColor(color, context)};` : ''}
                ${active && userActiveFillColor ? `background-color: ${getHoverColor(userActiveFillColor, context)};` : ''}
            }

            &:active {
                ${active ? `background-color: ${getActiveColor(activeFillColor, context)};` : ''}
                ${active && color ? `background-color: ${getActiveColor(color, context)};` : ''}
                ${active && userActiveFillColor ? `background-color: ${getActiveColor(userActiveFillColor, context)};` : ''}
            }
        }
    `;
}

const typeModifier = props => {
    const { type } = props;
    return `
        ${type === 'block' ? blockType(props) : ''}
        ${type === 'float' ? floatType(props) : ''}
        ${typeColors(props)}
    `;
}

export default typeModifier;