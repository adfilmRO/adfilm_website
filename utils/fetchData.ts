import { client } from "@/app/lib/sanity";
import { REVALIDATE_INTERVAL } from "./revalidate";

//  Main Page (START)

export const revalidate = REVALIDATE_INTERVAL
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

// Main Page (END)

// Podcast Page (START)

export async function getPodcastCopy() {
  const query = `*[_type == 'podcastCopy'] {
    title1,
      title2,
      title3
  }`
   const data = await client.fetch(query)
   return data
}

export async function getPodcastVideo() {
  const query = `*[_type == 'podcastVideo'] {
    title,
      youtube_link
  }`
   const data = await client.fetch(query)
   return data
}

export async function getPodcastList() {
  const query = `*[_type == 'podcastList'] {
    element1,
      element2,
      element3,
      element4,
      element5,
      element6
  }`
   const data = await client.fetch(query)
   return data
}

export async function getPodcastGallery() {
  const query = `*[_type == 'podcastGallery'] {
    image_src
  }`
   const data = await client.fetch(query)
   return data
}

export async function getFooterData() {
  const query = `*[_type == 'footerData'] {
    detail1,
      detail2,
      detail3
  }`
   const data = await client.fetch(query)
   return data
}

export async function getFooterSocialLinks() {
  const query = `*[_type == 'footerSocialLinks'] {
    name,
      image_src,
      link
  }`
   const data = await client.fetch(query)
   return data
}


