// Component commons
import { componentCommons } from '../../utils/component.utils';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const BadgeStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { borderRadius } = vars;

    return `
        .fab-badge { ${componentCommons} }
        .fab-badge {
            align-items: center;
            border-radius: calc(${borderRadius} * .7);
            display: flex;
            font-size: .75em;
            justify-content: center;
            line-height: 1;
            padding: .45em;
        }

        ${colorModifier(props)}

    `
}

export default BadgeStyles;