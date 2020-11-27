import getComponentVars from '../../methods/misc/getComponentVars';

// Modifiers
import colorModifier from './modifiers/modal-section-color.modifier';
import dividerModifier from './modifiers/modal-section-divider.modifier';

const ModalSectionStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('modalSection');
    const wrapper = framework === 'angular' ? '.fab-modal-section' : '&';
    
    return `
        ${wrapper} {
            font-family: ${vars.fontFamily};
            font-size: ${vars.fontSize};
            ${props.padding ? `padding: ${vars.padding};` : ''}
            ${framework === 'angular' ? 'width: 100%;' : ''}
        }
        
        ${framework === 'angular' ?
            `&:first-child > .fab-modal-section` :
            `${wrapper}:first-child`
        } {
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
        }

        ${framework === 'angular' ?
            `&:last-child > .fab-modal-section` :
            `${wrapper}:last-child`
        } {
            border-bottom-left-radius: .5rem;
            border-bottom-right-radius: .5rem;
        }

        ${colorModifier(params)}
        ${props.divider ? dividerModifier(params) : ''}
    `
}

export default ModalSectionStyles;