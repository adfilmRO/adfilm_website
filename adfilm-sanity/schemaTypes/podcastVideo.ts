export default {
    name: 'podcastVideo',
    type: 'document',
    title: 'Podcast Video',
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
            title: 'Link Youtube (OBLIGATORIU EMBEDED!)',
            description:
              'Pentru a gasi linkul de tip "embed", intrati pe YouTube pe videoclipul respectiv, apasati pe butonul de "Share" / "Trimite" si Apasati pe prima iconita de la stanga "Incorporati" / "Embed". Copiati linkul care se afla la src = "LINK_YOUTUBE". Acela este linkul necesar. Exemplu link embeded: "https://www.youtube.com/embed/ufyMLbFe08M?si=3PoGth6hEXABwZKU". Observati ca "youtube.com/embed/" este prezent in link.',
          },
    ],
  }
  