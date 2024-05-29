export default {
    name: 'commercialsVideo',
    type: 'document',
    title: 'Commercials Videos',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titlu Nume Video',
            description: 'Recomandat sub 50 de caractere.',
          },
          {
            name: 'youtube_link',
            type: 'string',
            title: 'Id Video YouTube (DOAR ID-UL!!!!)',
            description:
            'Id-ul de la linkul de YouTube.',
          },
          {
            name: 'type',
            type: 'string',
            title: 'Thumbnail',
            description:
            'DOAR IN CAZUL IN CARE CU "maxresdefault.jpg" THUMBNAIL-UL NU APARE, FOLOSITI "hqdefault.jpg".',
            options: {
              list: [
                {title: 'maxresdefault.jpg', value: 'maxresdefault'},
                {title: 'hqdefault.jpg', value: 'hqdefault'}
              ],
            },
            initialValue: 'maxresdefault'
          },
    ],
  }
  