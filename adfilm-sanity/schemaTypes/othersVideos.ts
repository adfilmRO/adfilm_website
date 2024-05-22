export default {
    name: 'othersVideos',
    type: 'document',
    title: 'Others Videos',
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
    ],
  }
  