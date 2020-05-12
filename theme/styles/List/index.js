// Component commons
import { componentCommons } from '../../utils/component.utils';

// Framework-related
import AngularListStyles from './frameworks/angular';

// Modifiers
import colorModifier from './modifiers/color.modifier';

const ListStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.list;
    const { padded } = props;

    return `
    .fab-list { ${componentCommons} }

    .fab-list-item {
        ${padded ? `padding: 1.25rem 1rem;` : `padding: 1.25rem 0;`}
    }

    .fab-list-item button {
        appearance: none;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
    }

    ${colorModifier(props)}
    `
};

export default ListStyles;