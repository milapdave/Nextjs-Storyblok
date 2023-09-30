// Import necessary modules from the Storyblok library
import { getStoryblokApi } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';

// Define the Home component as an asynchronous function
export default async function Home() {
  // Fetch data from Storyblok using the fetchData function
  const { data } = await fetchData();

  return (
    <div>
      {/* Render the StoryblokStory component with the fetched data */}
      <StoryblokStory story={data.story} />
    </div>
  );
}

// Define the fetchData function as an asynchronous function
export async function fetchData() {
  // Set up parameters for the Storyblok API request (e.g., version: "draft")
  let sbParams = { version: 'draft' };

  // Get the Storyblok API instance
  const storyblokApi = getStoryblokApi();

  // Fetch data from the Storyblok API for the "home" story using the defined parameters
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
