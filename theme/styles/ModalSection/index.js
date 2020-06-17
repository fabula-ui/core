import colorModifier from './modifiers/color.modifier';
import dividerModifier from './modifiers/divider.modifier';

const ModalSectionStyles = params => {
    const { framework, props } = params;
    const { divider } = props;
    const wrapper = framework === 'angular' ? '.fab-modal-section' : '&';
    
    return `
        ${wrapper} {
            padding: 1.25rem;
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
        ${divider && dividerModifier(params)}
    `
}

export default ModalSectionStyles;