// Component commons
import componentCommons from '../../common/component.commons';

// Button modifiers
import dividerModifier from './modifiers/divider.modifier';
import gluedModifier from './modifiers/glued.modifier';

// Methods
import getNumber from '../../methods/misc/getNumber';
import hasAlignment from '../../methods/misc/hasAlignment';

const ButtonGroupStyles = params => {
    const { framework, props, utils } = params;
    const theme = window.__FABTheme;
    const vars = theme.variables.components.buttonGroup;
    const { dividerColor, glued } = props;
    let wrapper = framework === 'angular' ? '.fab-button-group-wrapper' : '&';

    return `
    ${framework === 'angular' ? `& { display: block; }` : ''}
    ${wrapper} { ${componentCommons} }

    .fab-button-group {
        ${!hasAlignment(props) ? `align-items: flex-start;` : ''}
        box-sizing: border-box;
        display: flex;
        flex-direction: ${props.flow === 'horizontal' ? 'row' : 'column'};
        flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'};
        ${!hasAlignment(props) ? `justify-content: flex-start;` : ''}
        margin: ${props.spacing === null || props.spacing === undefined ? `-${vars.spacing}` : `calc(-${getNumber(props.spacing, 'rem')} / 2)`};
    
        .fab-button-wrapper {
            padding: ${props.spacing === null || props.spacing === undefined ? vars.spacing : `calc(${getNumber(props.spacing, 'rem')} / 2)`};
        }
    
        > * {
            box-sizing: border-box;
        }
    }

    ${dividerColor ? dividerModifier(params) : ''}
    ${glued ? gluedModifier(params) : ''}

    // Utils
    ${utils ? require('../../utils').default(params) : ''}
    `
};

export default ButtonGroupStyles;