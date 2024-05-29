export default {
  name: 'behindTheScenes',
  type: 'document',
  title: 'Behind The Scenes (Main Page)',
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
      title: 'maxresdefault.jpg / hqdefault.jpg',
      description:
      'DOAR IN CAZUL IN CARE CU "maxresdefault.jpg" THUMBNAIL-UL NU APARE, FOLOSITI "hqdefault.jpg".',
      options: {
        list: [
          {title: 'maxresdefault.jpg', value: 'maxresdefault'},
          {tittle: 'hqdefault.jpg', value: 'hqdefault'}
        ],
      },
    },
  ],
}
