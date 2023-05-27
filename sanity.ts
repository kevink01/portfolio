import { createClient } from 'next-sanity';
import imageBuilder from '@sanity/image-url';

const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	apiVersion: '2021-10-21',
	useCdn: true,
};

export const sanityClient = createClient(config);

export const createURL = (url: any) => {
	return imageBuilder(config).image(url);
};
