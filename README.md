This is an app using [Next.js](https://nextjs.org) with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [OpenAI API](https://platform.openai.com/overview) with [SASS](https://www.npmjs.com/package/sass). This app comes from a Udemy course [Build a DALL-E Image Generator - React - Javascript - OpenAI](https://www.udemy.com/course/build-a-dall-e-image-generator-react-javascript-openai/).

This app has modified the code to use version 4 of the OpenAI API instead of the version 3 that the course was designed with. And this app has only been tested locally on a Windows 11 box.

There was a breaking change moving to version 4 and it also became clear that using an API key on the client is not recommended. Rather the best practice is using the key on a backend server such as Node.js, Django, or Laravel.

Neverthless, the course offered a lot of interesting concepts and learning experiences. Plus the instructor added a lot of personality to the course.

## Getting Started

After cloning or downloading this project:

```bash
npm install
```

## Adding OpenAI API key

If you don't have the key go to [OpenAI API](https://platform.openai.com/overview) and create a key. This is a website that walks you through getting a key [Guiding Tech](https://www.guidingtech.com/how-to-generate-openai-api-key/#:~:text=Yes.%20OpenAI%20API%20keys%20are%20free%20to%20use.,credits%20on%20your%20account%20to%20use%20OpenAI%E2%80%99s%20services).

Create a .env file in the root folder of the project and in the folder add this line:

```bash
NEXT_PUBLIC_OPENAI_API_KEY="YOUR_OPENAI_KEY"
```

The app should now be ready to run locally:

```bash
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
