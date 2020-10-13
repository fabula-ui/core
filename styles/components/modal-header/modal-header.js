import getComponentVars from '../../methods/misc/getComponentVars';

const ModalHeaderStyles = params => {
    const { framework } = params;
    const vars = getComponentVars('modalHeader');
    const wrapper = framework === 'angular' ? '.fab-modal-header' : '&';

    return `
        & {
            flex-shrink: 0;
        }
        
        ${wrapper} {
            align-items: flex-start;
            display: flex;
        }

        .fab-modal-header__content {
            flex-grow: 1;
        }
    `
}

export default ModalHeaderStyles;