module.exports = {
    purge: {
        enabled: process.env.HUGO_ENVIRONMENT === 'production',
        content: ['./layouts/**/*.html'],
    },
    theme: {
        textColor: theme => ({
            ...theme('colors'),
            'light': '#bac8d8',
            'dark': '#0e3d45',
            'body': '#244950',
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
            borderColor: {
                'body': '#244950',
            }
        }
    }
}
