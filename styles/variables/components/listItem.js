const listItem = theme => ({
    color: '#FFF',
    fontSize: '1em',
    paddingX: '1em',
    paddingY: '1em',
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

export default listItem;