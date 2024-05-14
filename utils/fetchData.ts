import { client } from "@/app/lib/sanity";

export async function getStaffCardData() {
    const query = `*[_type == 'staff'] {
      nume,
        position,
        instagramLink,
        image_src
    }`;
    const data = await client.fetch(query);
    return data;
  }
  
  export async function getCopyData() {
    const query = `*[_type == 'motivatie'] {
      mainTitle,
        title1,
        description1,
        title2,
        description2,
        title3,
        description3,
        secondaryTitle
    }`;
    const data = await client.fetch(query);
    return data;
  }
  
  export async function getBehindTheScenesData() {
    const query = `*[_type == 'behindTheScenes'] {
      title,
        youtube_link
    }`;
    const data = await client.fetch(query);
    return data;
  }

  export async function getParteneriData() {
    const query = `*[_type == 'parteneri'] {
      nume,
        alt,
        image_src
    } `
    const data = await client.fetch(query);
    return data;
  }

  export async function getTestimonialeData() {
    const query = `*[_type == 'testimoniale'] {
      nume,
        description,
        position,
        image_src
     } `
     const data = await client.fetch(query)
     return data
  }

