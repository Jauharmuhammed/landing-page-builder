

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/jauharmuhammed/README-template">
    <img src="https://github.com/Jauharmuhammed/landing-page-builder/blob/main/assets/landerr-logo.svg" alt="Logo" width="60" height="60" border-radius="50%">
  </a>

  <h3 align="center">Landerr.</h3>

  <p align="center">
    Landing Page Builder.
    <br />
    <a href="https://github.com/jauharmuhammed/landing-page-builder"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://landerr.vercel.app">View Site</a>
    ·
    <a href="https://github.com/jauharmuhammed/landing-page-builder/issues">Report Bug</a>
    ·
    <a href="https://github.com/jauharmuhammed/landing-page-builder/issues">Request Feature</a>
  </p>
</div>


## About The Project
<br>
<p align='center'>
<img src="https://github.com/Jauharmuhammed/landing-page-builder/blob/main/assets/landing-1.png" width='70%' >
</p>
<br>

Landerr is a powerful landing page builder application designed to convert visitors into loyal customers. You can create mulitple landing page using form, manage your landing pages in a editor with live preview. You can make it private as a draft or publish to show other user. You can share your beautiful landing page all around the world. [here.](https://landerr.vercel.app)

- Protected Dashboard page with a list of existing landing pages with options to "Edit", "View", and "Delete".
- Create a new landing page with a title, description.
- Landing page editor to edit and modify you each projects.
- Live preview in the editor to see the landing page's appearance.
- Publish option that changes the status of the landing page to "Live" (Public).
- Google and GitHub authentication using Next Auth.
- Protected routes, making it accessible only to authenticated users.
- State management using redux for handling landing pages and their components.
- Form handling and validation using React Hook Form
- Visually appealing user interface with Shadcn-ui and TailwindCSS
- Deployed on Vercel for seamless interaction.

<br>

### Built With

- Next.js, React.js, and Typescript
- Drizzle-orm, Neon db and PostgreSQL
- Shadcn-UI and TailwindCSS 
- React Hook Form 
- Cloudinary - Media storage
- Next Auth and Drizzle-adapter - Google and Github login.
- Redux Toolkit - State management
- Vercel - Deployment


## Getting Started

1. First, clone the repository, if you haven't already

	```bash
	git clone https://github.com/Jauharmuhammed/landing-page-builder.git
	```

1. Install the dependancies

	```bash
	npm i
	```

2. Set up environment variable in .env file with the following keys

	```bash
	DATABASE_URL 				
	
	NEXTAUTH_URL=http://localhost:3000   	-- production https://example.com
	NEXTAUTH_SECRET			
	
	GITHUB_ID
	GITHUB_SECRET
	
	GOOGLE_CLIENT_ID
	GOOGLE_CLIENT_SECRET
	
	NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
	NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
	```
 	- `DATABASE_URL ` use a postgresdb connection string preferrably [Neon db](https://neon.tech/), it's free
  	- `NEXTAUTH_URL`, `NEXTAUTH_SECRET`	- refer next-auth documentation [here.](https://next-auth.js.org/getting-started/example)
   	- For `next-auth` providers refer [Google Provider](https://next-auth.js.org/providers/google) and [GitHub Provider](https://next-auth.js.org/providers/github)
   	- You can customize the next-auth option in `src/app/api/auth/[...nextauth]/options.ts`
   	- Use [cloudinary](https://cloudinary.com/) for media storage. Once you create an account you will get the `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` from dashboard
   	- Configure an upload preset `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` in [settings/upload](https://console.cloudinary.com/settings/)



2. Generate schema using drizzle-orm:

	```bash
	npm run db:generate
 	or
 	npx drizzle-kit generate:pg
	```

2. Push updations to your db:

	```bash
	npm run db:push
 	or
 	npx drizzle-kit push:pg
	```

2. Finally, run the development server:

	```bash
	npm run dev
	```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Screenshots



<table width="100%"> 
<tr>

<td width="50%">
<p align="center">
Dashboard
</p>
<img src="https://github.com/Jauharmuhammed/landing-page-builder/blob/main/assets/Dashboard.png">  
</td>
  <td width="50%">      
<p align="center">
Services
</p>
<img src="https://github.com/Jauharmuhammed/landing-page-builder/blob/main/assets/landing-2.png">
</td> 
</table>
<br/>


<table width="100%"> 
<tr>

<td width="50%">
<p align="center">
Editor
</p>
<img src="https://github.com/Jauharmuhammed/landing-page-builder/blob/main/assets/Editor.png">  
</td>
  <td width="50%">      
<p align="center">
Live Preview
</p>
<img src="https://github.com/Jauharmuhammed/landing-page-builder/blob/main/assets/preview.png">
</td> 
</table>
<br/>



## Contact

<div align='left'>

<a href="https://linkedin.com/in/jauharmuhammed" target="_blank">
<img src="https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white" alt=linkedin style="margin-bottom: 5px;"/>
</a>
	
<a href="https://twitter.com/jauharmuhammed_" target="_blank">
<img src="https://img.shields.io/badge/twitter-%2300acee.svg?color=1DA1F2&style=for-the-badge&logo=twitter&logoColor=white" alt=twitter style="margin-bottom: 5px;"/>
</a>
	
<a href="mailto:jauharmuhammedk@gmail.com" target="_blank">
<img src="https://img.shields.io/badge/gmail-%23EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white" t=mail style="margin-bottom: 5px;" />
</a>

