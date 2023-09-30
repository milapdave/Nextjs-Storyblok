// Import the `storyblokEditable` and `StoryblokComponent` functions from the Storyblok React library
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

// Define a functional component called `Page` that takes a `blok` prop
const Page = ({ blok }) => (
  // Render a `main` element and make it editable in Storyblok, adding a "text-center" class and margin-top
  <main {...storyblokEditable(blok)} className='mt-4 text-center'>
    {/* Map over the `blok.body` array and render each nested component */}
    {blok.body.map((nestedBlok) => (
      // Render each nested component using `StoryblokComponent`
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

// Export the `Page` component as the default export of this module
export default Page;
