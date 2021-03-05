module.exports = {
    purge: {
        enabled: process.env.HUGO_ENVIRONMENT === 'production',
        content: ['./layouts/**/*.html'],
    },
    theme: {
        fontFamily: {
            'display': ['Work Sans', 'sans-serif'],
            'body': ['Open Sans', 'sans-serif'],
        },
        textColor: theme => ({
            ...theme('colors'),
            'light': '#FFF7E3',
            'heading': '#0E3D45',
            'body': '#0E373E',
            'icon': '#0E4158',
            'accent': '#A6406C',
            'accent-light': '#BAC8D8',
            'footer': '#2B8DA5',
        }),
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#0e4158',
            'primary-dark': '#0d3345',
            'secondary': '#7d3654',
            'secondary-light': '#2B8DA5',
            'secondary-dark': '#0C4E33',
            'off-white': '#f4f9ff',
            'light': '#FFF7E3',
            'md': '#dbe8eb',
            'page-header': '#9f3d68',
        }),
        gradientColorStops: theme => ({
            ...theme('colors'),
            'primary': '#0e4158',
            'primary-dark': '#0d3345',
        }),
        extend: {
            spacing: {
                '160': '40rem',
            },
            maxWidth: {
                '1/2': '50%',
            },
            height: {
                '5/4': '125%',
                '3/2': '150%',
                '2/1': '200%',
            },
            borderWidth: {
                '3': '3px'
            },
            borderColor: {
                'button': '#A6406C',
                'button-light': '#FFF7E3',
                'accent-dark': '#7a3814',
            },
            translate: {
                '128': '32rem',
                '-128': '-32rem',
            },
            rotate: {
                '-60': '-60deg'
            }
        }
    }
}
