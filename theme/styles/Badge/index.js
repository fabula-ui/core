// Component commons
import componentCommons from '../../common/component.commons';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const BadgeStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;
    const { rounded } = props;
    const { borderRadius } = vars;

    return `
        .fab-badge { ${componentCommons} }
        .fab-badge {
            align-items: center;
            border-radius: calc(${borderRadius} * .7);
            ${rounded ? `border-radius: 2em;` : ''}
            display: flex;
            font-size: .8em;
            font-weight: 600;
            justify-content: center;
            line-height: 1;
            padding: .4em;
            ${rounded ? `padding: .4em .6em;` : ''}
        }

        ${colorModifier(props)}

    `
}

export default BadgeStyles;