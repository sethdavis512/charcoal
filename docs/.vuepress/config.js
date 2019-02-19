module.exports = {
    title: 'Charcoal Docs',
    description: 'Fuel for Web Apps',
    port: 8081,
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'GitHub',
                link: 'https://www.github.com/setholito/charcoal'
            }
        ],
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Columns',
                collapsable: true,
                children: ['/columns/columns/', '/columns/column/']
            },
            {
                title: 'Components',
                collapsable: true,
                children: [
                    '/components/breadcrumb/',
                    '/components/card/',
                    '/components/crumb/',
                    '/components/dropdown/',
                    '/components/menu/',
                    '/components/menu-label/',
                    '/components/menu-list/',
                    '/components/message/',
                    '/components/modal/',
                    '/components/navbar/',
                    '/components/pagination/',
                    '/components/pagination-link/',
                    '/components/panel/',
                    '/components/panel-block/',
                    '/components/panel-icon/',
                    '/components/panel-link/',
                    '/components/tab/',
                    '/components/tabs/'
                ]
            },
            {
                title: 'Elements',
                collapsable: true,
                children: [
                    '/elements/box/',
                    '/elements/button/',
                    '/elements/box/',
                    '/elements/button/',
                    '/elements/button-group/',
                    '/elements/content/',
                    '/elements/icon/',
                    '/elements/image/',
                    '/elements/notification/',
                    '/elements/progress/',
                    '/elements/table/',
                    '/elements/tag/',
                    '/elements/tags/'
                ]
            },
            {
                title: 'Form',
                collapsable: true,
                children: [
                    '/form/checkbox/',
                    '/form/input/',
                    '/form/radio/',
                    '/form/select/',
                    '/form/textarea/'
                ]
            },
            {
                title: 'Layout',
                collapsable: true,
                children: [
                    '/layout/container/',
                    '/layout/footer/',
                    '/layout/hero/',
                    '/layout/level/',
                    '/layout/media-object/',
                    '/layout/section/',
                    '/layout/tile-ancestor/',
                    '/layout/tile-child/',
                    '/layout/tile-parent/'
                ]
            }
        ]
    }
}
