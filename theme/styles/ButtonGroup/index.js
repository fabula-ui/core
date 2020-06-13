// Component commons
import componentCommons from '../../common/component.commons';

// Button modifiers
import dividerModifier from './modifiers/divider.modifier';
import gluedModifier from './modifiers/glued.modifier';

// Methods
import getComponentVars from '../../methods/misc/getComponentVars';
import getNumber from '../../methods/misc/getNumber';

const ButtonGroupStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('buttonGroup');
    let wrapper = framework === 'angular' ? '.fab-button-group-wrapper' : '&';

    return `
    ${wrapper} { ${componentCommons} }

    ${framework === 'angular' ? `& { display: block; }` : ''}

    .fab-button-group {
        align-items: flex-start;
        box-sizing: border-box;
        display: flex;
        flex-direction: ${props.flow === 'horizontal' ? 'row' : 'column'};
        flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'};
        justify-content: flex-start;
        margin: ${props.spacing === null || props.spacing === undefined ? `-${vars.spacing}` : `calc(-${getNumber(props.spacing, 'rem')} / 2)`};
    
        .fab-button-wrapper {
            padding: ${props.spacing === null || props.spacing === undefined ? vars.spacing : `calc(${getNumber(props.spacing, 'rem')} / 2)`};
        }
    
        > * {
            box-sizing: border-box;
        }
    }

    ${props.dividerColor ? dividerModifier(params) : ''}
    ${props.glued ? gluedModifier(params) : ''}
    `
};

export default ButtonGroupStyles;