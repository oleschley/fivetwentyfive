const sveltePreprocess = require('svelte-preprocess');

const preprocess = sveltePreprocess({
    scss: {
        includePaths: ['src'],
        data: `@import 'styles/_theme.scss';`
    },
    postcss: {
        plugins: [require('autoprefixer')]
    }
})

module.exports = preprocess