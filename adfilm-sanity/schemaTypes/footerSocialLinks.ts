    export default {
        name: 'footerSocialLinks',
        type: 'document',
        title: 'Footer Social Links',
        fields: [
            {
                name: 'name',
                type: 'string',
                title: 'Nume',
            },
            {
                name: 'image_src',
                type: 'image',
                title: 'Logo Social Page',
                description: 'Il puteti schimba, insa nu recomand pentru ca sunt deja puse de mine ca sa se potriveasca perfect cu layout-ul. Insa puteti incerca si altceva pe viitor.'
            },
            {
                name: 'link',
                type: 'string',
                title: 'Link Social',
            },
        ]
    }