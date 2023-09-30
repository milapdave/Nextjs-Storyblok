// Import the `storyblokEditable` and `StoryblokComponent` functions from the Storyblok React library
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

// Define a functional component called `Grid` that takes a `blok` prop
const Grid = ({ blok }) => {
  return (
    // Render a `div` element with the class "grid grid-cols-3" and make it editable in Storyblok
    <div className='grid grid-cols-3' {...storyblokEditable(blok)}>
      {/* Map over the `blok.columns` array and render each nested component */}
      {blok.columns.map((nestedBlok) => (
        // Render each nested component using `StoryblokComponent`
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

// Export the `Grid` component as the default export of this module
export default Grid;
