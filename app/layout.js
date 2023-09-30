// Import necessary modules from Storyblok and your project
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokProvider from '@/components/StoryblokProvider';

// Import global styles
import './globals.css';

// Define metadata for your app
export const metadata = {
  title: 'Storyblok and Next.js 13',
  description: 'A Next.js and Storyblok app using app router',
};

// Initialize Storyblok with an access token from an environment variable
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
});

// Define the RootLayout component that wraps the entire application
export default function RootLayout({ children }) {
  return (
    // Wrap the app in the StoryblokProvider to provide Storyblok context to components
    <StoryblokProvider>
      {/* Define HTML structure with lang attribute set to "en" */}
      <html lang='en'>
        <body>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
