const ModalBodyStyles = params => {
    const { framework } = params;

    return `
        & {
            flex: 1 1 auto;
            overflow-y: auto;
        }
    `
}

export default ModalBodyStyles;