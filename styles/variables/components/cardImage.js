const cardImage = () => ({    
    paddingX: '1rem',
    paddingY: '1rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
})

export default cardImage;