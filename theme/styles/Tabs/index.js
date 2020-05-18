import componentCommons from '../../common/component.commons';

import getColor from '../../methods/color/getColor';

import colorModifier from './modifiers/color.modifier';

const TabsStyle = params => {
    const { props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const { color, expand, stacked, type } = props;
    const { activeBorderColor, colors, inactiveTextColor, textColor } = vars;
    const activeColor = getColor(props.activeColor, colors);

    return `
        .fab-tabs { ${componentCommons} }
        .fab-tabs {
            display: flex;
            ${stacked ? `flex-direction: column;` : ''}
            ${type === 'float' || type === 'pill' ? `padding: .7rem 1rem;` : ''}
        }

        ${colorModifier(props)}
    `
}

export default TabsStyle;