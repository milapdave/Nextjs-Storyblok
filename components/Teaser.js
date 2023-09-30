// Import the `storyblokEditable` function from the Storyblok React library
import { storyblokEditable } from '@storyblok/react/rsc';

// Define a functional component called `Teaser` that takes a `blok` prop
const Teaser = ({ blok }) => {
  // Render an `h2` element with the class "text-2xl mb-10" and make it editable in Storyblok
  return (
    <h2 className='mb-10 text-2xl' {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

// Export the `Teaser` component as the default export of this module
export default Teaser;
