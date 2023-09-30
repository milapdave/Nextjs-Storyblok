// Import the `storyblokEditable` function from the Storyblok React library
import { storyblokEditable } from '@storyblok/react/rsc';

// Define a functional component called `Feature` that takes a `blok` prop
const Feature = ({ blok }) => (
  // Render a `div` element with the "column feature" class and make it editable in Storyblok
  <div className='column feature' {...storyblokEditable(blok)}>
    {/* Display the content from the `blok.name` property */}
    {blok.name}
  </div>
);

// Export the `Feature` component as the default export of this module
export default Feature;
