import Color from 'color';

const list = theme => ({
    color: '#FFF',
    paddingX: '1em',
    paddingY: '1em',
    get padding() {
        return `${this.paddingY} ${this.paddingX}`
    },
    get stripeColor() {
        return Color(theme.variables.colors.primary).desaturate(.5).mix(Color('#FFF'), .925);
    }
})

export default list;