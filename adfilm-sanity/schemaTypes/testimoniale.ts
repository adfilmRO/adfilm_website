export default {
  name: 'testimoniale',
  type: 'document',
  title: 'Testimoniale',
  fields: [
    {
      name: 'nume',
      type: 'string',
      title: 'Nume Persoana Testimonial',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Descriere Testimonial',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Functie Persoana Testimonial',
    },
    {
      name: 'image_src',
      type: 'image',
      title: 'Background Punct Navigatie',
      description:
        'Background-ul de la punctele de navigatie din partea de jos ale slider-ului. (Conform design-ului din Figma). Recomandat < 50kb (Pozele apar foarte mici, este necesara o calitate aproximativ cat se poate de mica.)',
    },
  ],
}
