export default {
    name: 'parteneri',
    type: 'document',
    title: 'Parteneri si Colaboratori (Minim 9 logo-uri)',
    fields: [
        {
            name: 'nume',
            type: 'string',
            title: 'Nume Logo'
        },
        {
            name: 'alt',
            type: 'slug',
            title: 'Alt Tag',
            description: 'SEO alt tags (Este necesar doar sa apasati pe generate dupa ce puneti un nume)',
            options: {
                source: 'nume'
            }
        },
        {
            name: 'image_src',
            type: 'image',
            title: 'Poza Logo',
            description: 'Recomandat < 300Kb'
        },
    ]
}