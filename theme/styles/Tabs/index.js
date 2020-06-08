import componentCommons from '../../common/component.commons';

import getColor from '../../methods/color/getColor';

import colorModifier from './modifiers/color.modifier';

const TabsStyle = params => {
    const { props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.tab;
    const { color, expand, layout, stacked, type } = props;
    const { activeBorderColor, colors, inactiveTextColor, textColor } = vars;
    const activeColor = getColor(props.activeColor, colors);

    return `
        .fab-tabs { ${componentCommons} }
        .fab-tabs {
            display: flex;
            ${stacked ? `flex-direction: column;` : ''}
            height: 100%;
            ${type === 'float' || type === 'pill' ? `padding: .7rem 1rem;` : ''}
        }

        .fab-tab {
            height: 100%;
        }

        .fab-tab > a,
        .fab-tab > button {
            ${layout === 'vertical' ? 'align-items: center;' : ''}
            ${layout === 'vertical' ? `flex-direction: column;` : ''}
            height: 100%;
        }

        ${colorModifier(params)}
    `
}

export default TabsStyle;