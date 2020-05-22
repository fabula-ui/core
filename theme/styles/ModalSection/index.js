import colorModifier from './modifiers/color.modifier';
import dividerModifier from './modifiers/divider.modifier';

const ModalSectionStyles = params => {
    const { framework, props } = params;
    const { divider } = props;
    
    return `
        .fab-modal-section {
            padding: 1.25rem;
        }
        
        ${framework === 'angular' ?
            `&:first-child > .fab-modal-section` :
            `.fab-modal-section:first-child`
        } {
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
        }

        ${framework === 'angular' ?
            `&:last-child > .fab-modal-section` :
            `.fab-modal-section:last-child`
        } {
            border-bottom-left-radius: .5rem;
            border-bottom-right-radius: .5rem;
        }

        ${colorModifier(props)}
        ${divider && dividerModifier(props)}
    `
}

export default ModalSectionStyles;