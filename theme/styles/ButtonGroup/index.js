// Component commons
import { componentCommons } from '../../utils/component.utils';

// Button modifiers
import { dividerModifier } from './modifiers/divider.modifier';
import { gluedModifier } from './modifiers/glued.modifier';

const ButtonGroupStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.buttonGroup;

    return `
    .fab-button-group { ${componentCommons} }
    .fab-button-group {
        align-items: flex-start;
        box-sizing: border-box;
        display: flex;
        flex-direction: ${props.flow === 'horizontal' ? 'row' : 'column'};
        flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'};
        justify-content: flex-start;
        margin: -${props.spacing || vars.spacing};
    
        .fab-button-wrapper {
            padding: ${props.spacing || vars.spacing};
        }
    
        > * {
            box-sizing: border-box;
        }
    }

    ${dividerModifier()}
    ${gluedModifier()}
    `
};

export default ButtonGroupStyles;