const cardSection = () => ({   
    paddingX: '1rem',
    paddingY: '1rem',
    get paddingBottom() {
        return this.paddingY
    },
    get paddingLeft() {
        return this.paddingX
    },
    get paddingRight() {
        return this.paddingX
    },
    get paddingTop() {
        return this.paddingY
    },
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
})

export default cardSection;