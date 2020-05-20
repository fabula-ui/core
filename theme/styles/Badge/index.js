// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const BadgeStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { borderRadius } = vars;

    return `
        .fab-badge { ${componentCommons} }
        .fab-badge {
            align-items: center;
            border-radius: calc(${borderRadius} * .7);
            display: flex;
            font-size: .8em;
            justify-content: center;
            line-height: 1;
            padding: .4em;
        }

        ${colorModifier(props)}

    `
}

export default BadgeStyles;