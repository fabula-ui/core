const card = () => ({
    borderRadius: '.75rem',
    color: '#FFF',
    glowX: 0,
    glowY: '2px',
    glowRadius: '2px',
    glowSpread: 0,
    paddingX: '1rem',
    paddingY: '1rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
})

export default card;