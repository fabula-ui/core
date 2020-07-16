const ModalHeaderStyles = params => {
    const { framework } = params;
    const wrapper = framework === 'angular' ? '.fab-modal-header' : '&';

    return `
        ${wrapper} {
            align-items: flex-start;
            display: flex;
        }

        .fab-modal-header__content {
            flex-grow: 1;
        }

        .fab-modal-header__title {
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: -.025em;
        }
    `
}

export default ModalHeaderStyles;