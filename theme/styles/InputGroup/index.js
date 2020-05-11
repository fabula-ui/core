// Component commons
import { componentCommons } from '../../utils/component.utils';

// Utils
import gluedModifier from './modifiers/glued.modifier';

const InputGroupStyles = props => {
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { flow, glued } = props;
    const { spacing } = vars;

    return `
    .fab-input-group {${componentCommons}}
    .fab-input-group {
        display: flex;
        flex-direction: ${flow === 'horizontal' ? 'row' : 'column'};
    }

    .fab-input-group > *,
    .fab-input-group .fab-button {
        ${flow === 'vertical' ? `width: 100%;` : ''}
    }
    
    .fab-input-group > *:not(:last-child) {
        ${flow === 'horizontal' ? `margin-right: ${props.spacing || spacing}` : ''};
        ${flow === 'vertical' ? `margin-bottom: ${props.spacing || spacing}` : ''};
    }

    ${glued ? gluedModifier(props) : ''}
    `
};

export default InputGroupStyles;