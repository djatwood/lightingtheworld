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
            'page-header': '#9f3d68',
        })
    }
}
