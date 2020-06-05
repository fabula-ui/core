// Component commons
import componentCommons from '../../common/component.commons';

// Utils
import gluedModifier from './modifiers/glued.modifier';

const InputGroupStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.input;
    const { flow, glued } = props;
    const { spacing } = vars;
    const {wrapper} = framework ? `.fab-input-group-wrapper` : '&';

    return `
    ${wrapper} {${componentCommons}}

    .fab-input-group {
        align-items: flex-start;
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

    .fab-input-group .fab-input-wrapper {
        flex-grow: 1;
    }

    ${glued ? gluedModifier(props) : ''}
    `
};

export default InputGroupStyles;