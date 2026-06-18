// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            fontSize: {
                h1: ['128px', { lineHeight: '128px', fontWeight: '500' }],
                h2: ['96px', { lineHeight: '96px', fontWeight: '500' }],
                h3: ['48px', { lineHeight: '56px', fontWeight: '700' }],

                c1: ['20px', { lineHeight: '20px', fontWeight: '600' }],

                b1: ['20px', { lineHeight: '28px', fontWeight: '600' }],
                b2: ['12px', { lineHeight: '16px', fontWeight: '500' }],

                btn1: ['14px', { lineHeight: '20px', fontWeight: '500' }],
                btn2: ['12px', { lineHeight: '16px', fontWeight: '500' }],
            },
            colors: {
                // tokens semânticos — usa estes no dia a dia
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                accent: 'var(--accent)',
                danger: 'var(--danger)',
                border: 'var(--border)',

                // tokens primitivos — usa só quando precisares da cor de marca "crua"
                rede: {
                    white: 'var(--rede-white)',
                    black: 'var(--rede-black)',
                    yellow: 'var(--rede-yellow)',
                    red: 'var(--rede-red)'
                }
            },
            backgroundImage: {
                split: 'var(--gradient-split)'
            }
        }
    }
}