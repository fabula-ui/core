const colors = {
    danger: '#FF7571',
    dark: '#3D3D3D',
    default: '#FFF',
    hot: '#FF7600',
    light: '#F5F5F5',
    primary: '#59B0FF',
    secondary: '#0EC8E0',
    success: '#90CE47',
    warning: '#F0C242'
};

const globals = {
    borderColor: '#DDD',
    cornerStyles: {
        circle: '50%',
        hard: '.2em',
        rounded: '1.75em',
        soft: '.5em'
    },
    fontFamily: 'Inter',
    glareColor: {
        dark: 'rgba(255, 255, 255, .075)',
        light: 'rgba(0, 0, 0, .025)',
    },
    padding: '1.25rem',
    get paddingX() {
        return this.padding
    },
    get paddingY() {
        return this.padding
    },
    placeholderColor: '#EFEFEF',
    subtitleColor: '#9F9D9D',
    textColor: '#3D3D3D',
    tooltipOffset: '.25rem',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease-in-out',
    get transitionBase() {
        return `${this.transitionDuration} ${this.transitionTimingFunction}`
    }
};

const elements = {
    subtitle: {
        colors: {
            get light() {
                return globals.subtitleColor
            },
            dark: 'rgba(255, 255, 255, .8)'
        },
        fontSize: {
            sm: '.75rem',
            md: '.875rem',
            lg: '1rem'
        },
        fontWeight: 400,
        lineHeight: '1.25',
    },
    text: {
        colors: {
            get light() {
                return globals.textColor
            },
            dark: '#FFF'
        },
        fontSize: {
            sm: '.875rem',
            md: '.95rem',
            lg: '1.25rem'
        },
        fontWeight: 400,
        lineHeight: '1.5',
    },
    title: {
        colors: {
            get light() {
                return globals.textColor
            },
            dark: '#FFF'
        },
        fontSize: {
            sm: '1rem',
            md: '1.2rem',
            lg: '1.5rem',
            xl: '2.5rem',
            xxl: '3.5rem'
        },
        fontWeight: 700,
        lineHeight: '1.25',
    }
};

const defaultTheme = {
    colors,
    components: {
        avatar: {
            backgroundColor: globals.placeholderColor,
            height: '5rem',
            sizes: {
                get default() {
                    return this.md
                },
                sm: {
                    height: '2rem',
                    width: '2rem'
                },
                md: {
                    height: '3rem',
                    width: '3rem'
                },
                lg: {
                    height: '5rem',
                    width: '5rem'
                },
            },
            width: '5rem'
        },
        badge: {
            backgroundColor: colors.light,
            borderColor: globals.borderColor,
            sizes: {
                get default() {
                    return this.md
                },
                sm: {
                    fontSize: '.45rem',
                    padding: '.1rem'
                },
                md: {
                    fontSize: '.65rem',
                    padding: '.2rem'
                },
                lg: {
                    fontSize: '.75rem',
                    padding: '.3rem'
                },
            },
        },
        button: {
            animationDuration: '2s',
            animationTimingFunction: '',
            borderWidth: '1px',
            get color() {
                return globals.textColor
            },
            disabledCursor: 'default',
            disabledOpacity: .5,
            fontSize: {
                xs: '.75rem',
                sm: '.9rem',
                md: '1rem',
                lg: '1.15rem',
                xl: '1.25rem',
                get default() {
                    return this.md
                },
            },
            loadingDuration: '2s',
            get loadingTimingFunction() {
                return globals.transitionTimingFunction
            },
            minHeight: '2.5rem',
            paddingX: '1em',
            paddingY: '.5em',
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
        },
        buttonGroup: {
            spacing: '.3rem'
        },
        card: {
            backgroundColor: '#FFF',
            imageIconOpacity: .1,
            imageIconSize: '3rem',
            get padding() {
                return globals.padding
            },
            get paddingX() {
                return this.padding
            },
            get paddingY() {
                return this.padding
            },
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
            // Body
            get bodyPadding() {
                return this.padding
            },
            get bodyPaddingX() {
                return this.paddingX
            },
            get bodyPaddingY() {
                return this.paddingY
            },
            get bodyPaddingBottom() {
                return this.bodyPaddingY
            },
            get bodyPaddingLeft() {
                return this.bodyPaddingX
            },
            get bodyPaddingRight() {
                return this.bodyPaddingX
            },
            get bodyPaddingTop() {
                return this.bodyPaddingY
            },
            // Footer
            get footerPadding() {
                return this.bodyPadding
            },
            get footerPaddingX() {
                return this.footerPadding
            },
            get footerPaddingY() {
                return this.footerPadding
            },
            get footerPaddingBottom() {
                return this.footerPaddingY
            },
            get footerPaddingLeft() {
                return this.footerPaddingX
            },
            get footerPaddingRight() {
                return this.footerPaddingX
            },
            get footerPaddingTop() {
                return this.footerPaddingY
            },
            // Header
            get headerPadding() {
                return this.bodyPadding
            },
            get headerPaddingX() {
                return this.headerPadding
            },
            get headerPaddingY() {
                return this.headerPadding
            },
            get headerPaddingBottom() {
                return this.headerPaddingY
            },
            get headerPaddingLeft() {
                return this.headerPaddingX
            },
            get headerPaddingRight() {
                return this.headerPaddingX
            },
            get headerPaddingTop() {
                return this.headerPaddingY
            },
        },
        collapse: {
            get paddingX() {
                return globals.paddingX
            },
            get paddingY() {
                return globals.paddingY
            },
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
            }
        },
        collapseToggle: {
            get paddingX() {
                return globals.paddingX
            },
            get paddingY() {
                return globals.paddingY
            },
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
            }
        },
        tooltip: {
            arrowSize: '.3rem',
            get backgroundColor() {
                return colors.dark;
            },
            color: '#FFF',
            fontSize: '.85rem',
            offset: '.15rem',
            paddingX: '1em',
            paddingY: '.4em',
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
            spacing: '.25rem',
        }
    },
    elements,
    globals
}

export default defaultTheme;
