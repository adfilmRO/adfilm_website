export default {
    name: 'videoHeaders',
    type: 'document',
    title: 'Video Headers',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Titlu Header',
      },
      {
        name: 'id',
        type: 'string',
        title: 'ID (NU SCHIMBATI!!!!)',
        description: '(NU SCHIMBATI !!! ESTE PRESETAT DE MINE CA SA RULEZE IN COD, NU !!!)',
      },
      {
        name: 'videoFile',
        type: 'file',
        title: 'Fila Videoclip Va rog folositi ".webm"!',
        description:
        '!!! .webm !!! (Recomandat  < 7MB, 900p / 1080p)',
      },
     
    ],
  }
  