import getComponentVars from '../../methods/misc/getComponentVars';

const ModalHeaderStyles = params => {
    const { framework } = params;
    const vars = getComponentVars('modalHeader');
    const wrapper = framework === 'angular' ? '.fab-modal-header' : '&';

    return `
        ${wrapper} {
            align-items: flex-start;
            display: flex;
            flex-shrink: 0;
        }

        .fab-modal-header__content {
            flex-grow: 1;
        }
    `
}

export default ModalHeaderStyles;