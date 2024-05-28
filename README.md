# exa-sphere

Exa Sphere is an innovative app that allows users to generate cover letters by creating different job profiles. These profiles are used for quick generation and are saved in the database, offering a seamless experience for crafting professional cover letters tailored to specific job opportunities.

## Project Overview

Exa Sphere simplifies the cover letter creation process by providing a user-friendly interface to enter job details, such as job title, company, location, job type, experience level, required skills, key responsibilities, company additional information, and additional information. Users can then generate personalized cover letters based on these profiles, leveraging advanced AI models powered by GPT-4.

Check out the design on [Figma](https://www.figma.com/file/GluIauxVpVQ4xv037S9478/Exa-Sphere?type=design&node-id=0%3A1&mode=design&t=hwRQXqItRbMfzDfb-1)

![Job Profiles](./figma-design/new-design.png)

## Features

- **Profile Creation:** Users can create and save multiple job profiles with detailed information about job requirements and qualifications.
- **Cover Letter Generation:** Utilize GPT-4 AI models to generate customized cover letters based on the saved job profiles.
- **User Authentication:** Secure authentication using NextAuth for OAuth and JWT for spring boot, ensuring user data privacy and security.
- **Avatar Storage:** AWS S3 integration for storing user avatars and profile images.

## Technologies Used

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Spring Boot (Rest Api), JPA, Security, Jwt
- **Authentication:** NextAuth, Jwt
- **AI Model:** GPT-4
- **Database:** PostgreSQL
- **File Storage:** AWS S3

## Getting Started

**Clone the Repository:**

```bash
git clone https://github.com/NehemieMbg/exa-sphere.git
```

**Navigate to the Frontend Directory:**

```bash
cd exa-sphere/client
```

**Install Dependencies:**

```bash
npm install
```

**Set up Environment Variables:**

Create a `.env` file in the frontend directory and add the following:

```makefile
SPRING_API_URL=your_backend_api_url
```

**Start the Development Server:**

```shell
npm run dev
```

**Navigate to the Backend Directory:**

```bash
cd ../server
```

**Install Backend Dependencies:**

```bash
mvn install
```

**Set up Database:**
Configure your PostgreSQL database and update the application properties accordingly.

**Access the Application:**
Open your web browser and navigate to `http://localhost:3000` to access Exa Sphere.

## Contributing

This project is currently not open for contributions as it is a personal project. However, feedback and suggestions are always welcome!

## Contact

For questions or inquiries about Exa Sphere, feel free to contact the project owner:

- **Name:** Nehemie Mombanga
- **Email:** nehemie.mbg@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/nehemie-mombanga/
