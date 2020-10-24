import Color from 'color';

const list = theme => ({
    color: '#FFF',
    paddingX: '1rem',
    paddingY: '1rem',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
    get stripeColor() {
        return Color(theme.variables.colors.primary).desaturate(.5).mix(Color('#FFF'), .925);
    }
})

export default list;