export const ModalHeaderStyles = params => {
    const { framework } = params;
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