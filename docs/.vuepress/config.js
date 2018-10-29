module.exports = {
    title: 'Charcoal Docs',
    description: 'Fuel for Web Apps',
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
                children: ['/components/breadcrumb/', '/components/card/']
            },
            {
                title: 'Elements',
                collapsable: true,
                children: ['/elements/box/', '/elements/button/']
            },
            {
                title: 'Form',
                collapsable: true,
                children: ['/form/checkbox/']
            },
            {
                title: 'Layout',
                collapsable: true,
                children: ['/layout/container/']
            }
        ]
    }
}
