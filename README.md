# Storyblok and Next.js Boilerplate

This is a basic boilerplate project that combines the power of Storyblok, Next.js, Prettier, and Tailwind CSS for building web applications with ease.

## Features

- [Storyblok](https://www.storyblok.com/) integration for content management.
- [Next.js](https://nextjs.org/) for server-rendered React applications.
- [Prettier](https://prettier.io/) for code formatting.
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>

2. **Install dependencies**:

cd project-directory
npm install


3. **Set up Storyblok**:

- Create a Storyblok account and set up a new space.
- Obtain your Storyblok access token and set it as an environment variable in a `.env.local` file:

  ```
  NEXT_PUBLIC_STORYBLOK_TOKEN=your-access-token
  ```

4. **Start the development server**:

npm run dev


5. **Open your browser**:

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view your application.

## Project Structure

- `/components`: Contains React components used in the application.
- `/pages`: Next.js pages for routing and rendering.
- `/styles`: Tailwind CSS styles and configuration.
- `/public`: Public assets (images, fonts, etc.).

## Customization

- Update the components in the `/components` directory to match your project's requirements.
- Extend the application's styling by modifying the Tailwind CSS configuration in the `/styles` directory.
- Add additional routes by creating new files in the `/pages` directory.

## Code Formatting

This project uses Prettier for code formatting. Make sure to run `npm run format` to format your code before committing.

npm run format


## Deployment

You can deploy your Next.js app to various hosting providers like Vercel, Netlify, or AWS. Make sure to configure your deployment settings as needed.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your contributions are greatly appreciated!

## License

This project is licensed under the MIT License.
