/** 1. Tag it as a client component */
'use client';

// Import necessary modules from the Storyblok library
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

/** 2. Import your components */
import Page from './Page';
import Teaser from './Teaser';
import Grid from './Grid';
import Feature from './Feature';

/** 3. Initialize Storyblok as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN, // Initialize Storyblok with an access token from an environment variable.
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
  components: {
    // Register your custom components to be used by Storyblok
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
  },
});

// Define the StoryblokProvider component that wraps your application
export default function StoryblokProvider({ children }) {
  // This component simply returns its children, allowing them to be wrapped in Storyblok context
  return children;
}
