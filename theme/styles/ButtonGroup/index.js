// Component commons
import componentCommons from '../../common/component.commons';

// Button modifiers
import dividerModifier from './modifiers/divider.modifier';
import gluedModifier from './modifiers/glued.modifier';

// Methods
import hasAlignment from '../../methods/misc/hasAlignment';

const ButtonGroupStyles = params => {
    const { framework, props, utils } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.buttonGroup;
    const { divider, glued } = props;
    let wrapper = framework === 'angular' ? '.fab-button-group' : '&';

    return `
    ${wrapper} { ${componentCommons} }
    ${wrapper} {
        ${!hasAlignment(props) ? `align-items: flex-start;` : ''}
        box-sizing: border-box;
        display: flex;
        flex-direction: ${props.flow === 'horizontal' ? 'row' : 'column'};
        flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'};
        ${!hasAlignment(props) ? `justify-content: flex-start;` : ''}
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

    // Utils
    ${utils ? require('../../utils').default(params) : ''}
    `
};

export default ButtonGroupStyles;