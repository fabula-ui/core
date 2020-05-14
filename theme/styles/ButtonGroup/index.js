// Component commons
import componentCommons from '../../common/component.commons';

// Button modifiers
import dividerModifier from './modifiers/divider.modifier';
import gluedModifier from './modifiers/glued.modifier';

const ButtonGroupStyles = params => {
    const { framework, props } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.buttonGroup;
    const { divider, glued } = props;

    return `
    .fab-button-group { ${componentCommons} }
    .fab-button-group {
        align-items: flex-start;
        box-sizing: border-box;
        display: flex;
        flex-direction: ${props.flow === 'horizontal' ? 'row' : 'column'};
        flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'};
        justify-content: flex-start;
        margin: ${props.spacing ? `calc(-${props.spacing} / 2)` : `-${vars.spacing}`};
    
        .fab-button-wrapper {
            padding: ${props.spacing ? `calc(${props.spacing} / 2)` : vars.spacing};
        }
    
        > * {
            box-sizing: border-box;
        }
    }

    ${divider ? dividerModifier(props) : ''}
    ${glued ? gluedModifier(props) : ''}
    `
};

export default ButtonGroupStyles;