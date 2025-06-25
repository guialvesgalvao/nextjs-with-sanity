import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';


export const config = {
  dataset: process.env.SANITY_DATASET!,
  projectId: process.env.SANITY_PROJECT_ID!,
  apiVersion: process.env.SANITY_API_VERSION!,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_TOKEN
};

export const sanityClient = createClient(config);

// Helper para URLs de imagem
export function urlFor(source: any) {
  return imageUrlBuilder(sanityClient).image(source);
}