const ModalFooterStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-modal-footer' : '&';

    return `
        & {
            flex-shrink: 0;
        }
    `
}

export default ModalFooterStyles;