const ModalBodyStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-modal-body' : '&';

    return `
        ${wrapper} {
            flex: 1 1 auto;
            overflow-y: auto;
        }
    `
}

export default ModalBodyStyles;