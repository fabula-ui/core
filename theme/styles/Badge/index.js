// Component commons
import { componentCommons } from '../../utils/component.utils';

const BadgeStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.badge;

    return `
        .fab-badge { ${componentCommons} }
        .fab-badge {
            align-items: center;
            border: solid 1px;
            display: flex;
            height: 1.6rem;
            font-size: .75rem;
            justify-content: center;
            line-height: 1;
            width: 1.6rem;
        }
    `
}

export default BadgeStyles;