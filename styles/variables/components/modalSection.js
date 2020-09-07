const modalSection = () => ({
    paddingX: '1.25rem',
    paddingY: '1.25rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
})

export default modalSection;