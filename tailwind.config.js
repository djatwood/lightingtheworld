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
            'accent': '#A6406C',
            'accent-light': '#BAC8D8',
            'footer': '#2B8DA5',
        }),
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#0e4158',
            'primary-dark': '#0d3345',
            'secondary': '#7d3654',
            'light': '#f4f9ff',
            'md': '#dbe8eb',
            'page-header': '#9f3d68',
        }),
        gradientColorStops: theme => ({
            ...theme('colors'),
            'primary': '#0e4158',
            'primary-dark': '#0d3345',
        }),
        extend: {
            maxWidth: {
                '1/2': '50%',
            },
            borderWidth: {
                '3': '3px'
            },
            borderColor: {
                'button': '#A6406C',
                'button-light': '#FFF7E3',
            }
        }
    }
}
