export const userInfo = {
  id: 1,
  avatar: '/avatar.png',
  fullName: 'Naomi Liu',
  email: 'naomi.liu@test.com',
  description:
    'Experienced software engineer passionate about problem-solving and innovation. Skilled in full-stack development with a focus on React.js, Node.js, and Spring Boot. Committed to continuous learning and collaboration for impactful projects.',

  phone: '+41 123 456 789',

  addresses: [
    {
      id: 1,
      title: 'Main Home, Zurich',
      address: 'Brunnacherstrasse 100',
      city: 'Zurich',
      zip: '8047',
      state: 'Zurich',
      country: 'Switzerland',
    },
    {
      id: 2,
      title: 'Vacation Home, Geneva',
      address: 'Rue de la Servette 100',
      city: 'Geneva',
      zip: '1201',
      state: 'Geneva',
      country: 'Switzerland',
    },
  ],

  education: [
    {
      id: 1,
      school: 'University of XYZ',
      degree: 'Bachelor of Science in Computer Science',
      graduationYear: 2020,
    },
    {
      id: 2,
      school: 'ABC Business School',
      degree: 'Master of Business Administration',
      graduationYear: 2018,
    },
  ],
};

export const auth = {
  testimonial: `“Exa Sphere has been instrumental in streamlining my job application process. Their AI-generated cover letters, tailored to my job experience and the specific field I'm applying to, have been incredibly effective. It's like having a personal career advisor guiding me towards success.”`,
  author: 'Naomi Liu',
};

export const login = {
  title: 'Log into your account',
  description: 'Enter your credentials below to login your account',
  btn: 'Sign In',
};

export const register = {
  title: 'Create an account',
  description: 'Enter your email below to create your account',
  btn: 'Sign up with email',
};

export const navigation = [
  { label: 'My Profiles', href: '/my-profiles' },
  { label: 'Generate', href: '/generate' },
];

export const settingsNavigation = [
  { label: 'Profile', href: '/settings' },
  { label: 'Security', href: '/settings/security' },
];

export const jobProfile = {
  title: 'Job Profile',
  description:
    'Create your new profile! Your profile will help tailor cover letters to suit your skills and experiences.',
};

export const jobProfiles = {
  title: 'Job Profiles',
  description:
    'You can create, modify, and update up to 5 job profiles. Each profile allows you to showcase different aspects of your experience and skills. Feel free to manage your profiles to best represent your qualifications and career aspirations.',
};

export const education = {
  title: 'Education',
  description:
    'Add your educational background to showcase your qualifications and achievements',
};

export const generate = {
  title: 'Generate Your Cover Letter',
  description:
    'Create customized cover letters tailored to your skills and experiences. Simply select a profile and job, and let us assist you in crafting the perfect cover letter for your application.',
};

export const settingsProfile = {
  title: 'Profile Details',
  description:
    'Update your personal information such as name, addresses, avatar, or email to ensure your profiles are accurate and up-to-date.',
};

export const settingsSecurity = {
  title: 'Security',
  description:
    'Update your password to ensure your account is secure and protected.',
};
