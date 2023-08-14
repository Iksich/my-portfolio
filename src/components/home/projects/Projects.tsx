/* eslint-disable max-len */
import { SectionHeader } from '../../utils/SectionHeader';
import { Project } from './Project';
import styles from './projects.module.scss';

const projects = [
  {
    title: 'THE MET',
    imgSrc: '/project-imgs/the_met.png',
    code: 'https://github.com/mate-academy/layout_miami/pull/1759',
    projectLink: 'https://iksich.github.io/layout_miami/',
    tech: ['Javascript', 'HTML', 'SCSS'],
    description:
      'My first project involved creating a responsive landing page for THE MET, a museum website. My primary focus was on producing clean code and ensuring reusability of style blocks. To achieve this, I employed a tech stack consisting of HTML, SCSS, BEM (Block Element Modifier) methodology for structured styling, and JavaScript for interactive elements.',
    modalContent: (
      <>
        <p>
          The landing page was designed to provide an optimal user experience across various devices, including mobile, tablet, and desktop. By incorporating responsive design techniques, I ensured that the layout and content seamlessly adapt to different screen sizes, delivering a visually appealing experience on any device.
        </p>
        <p>
          Adhering to the BEM naming convention, I organized CSS classes into distinct blocks, elements, and modifiers. This approach enhanced code clarity, making it easier to manage and maintain the project. Moreover, the reusability of style blocks enabled me to streamline the development process and foster consistency across the entire landing page.
        </p>
        <p>
          For interactivity, I leveraged JavaScript to create engaging features such as animated banners, image sliders, and smooth scrolling. These interactive elements enhanced user engagement and made the browsing experience more enjoyable.
        </p>
        <p>
          Throughout the project, my commitment to clean code practices allowed for efficient performance and ensured that future updates and additions could be implemented with ease. The result is a polished and user-friendly landing page for &quot;THE MET,&quot; providing visitors with an exceptional experience regardless of their preferred device.
        </p>
      </>
    ),
  },
  {
    title: 'Dynamic list of posts',
    imgSrc: '/project-imgs/dynamic_list_of_posts.png',
    code: 'https://github.com/mate-academy/react_dynamic-list-of-posts/pull/861/files',
    projectLink: 'https://iksich.github.io/react_dynamic-list-of-posts/',
    tech: ['TypeScript', 'SCSS', 'React'],
    description:
      'In my latest project, I took on the challenge of building a dynamic list of posts, showcasing my expertise in front-end development and data handling. The main objective was to create a seamless and engaging user experience by dynamically rendering and managing a list of posts retrieved from an external API.',
    modalContent: (
      <>
        <p>
          I integrated the application with an external API to fetch a list of posts in real-time. By optimizing API requests, I ensured that the data retrieval process was fast and efficient.
        </p>
        <p>
          Leveraging the power of React, I dynamically rendered the retrieved posts on the user interface. The seamless rendering of posts allowed for a smooth browsing experience.
        </p>
        <p>
          Users could easily sort and filter the list of posts based on different criteria. Implementing this feature improved user engagement and provided a tailored experience for each user.
        </p>
        <p>
          To enhance performance and avoid overwhelming the user with an excessively long list of posts, I implemented pagination. This feature allowed users to navigate through the posts efficiently
        </p>

        <p>
          I paid special attention to error handling to ensure that the application remained robust even when unexpected situations occurred during data fetching or processing.
        </p>
      </>
    ),
  },
  {
    title: 'Fetch movies',
    imgSrc: '/project-imgs/fetch_movies.png',
    code: 'https://github.com/mate-academy/react_movies-list-fetch-movies/pull/975',
    projectLink: 'https://iksich.github.io/react_movies-list-fetch-movies/',
    tech: ['TypeScript', 'SCSS', 'React'],
    description:
      'In my recent project, I designed and developed the Fetch Movies app, a dynamic application that allows users to search for movies and add them to a personalized movie list. The app utilizes React, TypeScript, and an external movie API to provide a seamless user experience while fetching and displaying movie data in real-time.',
    modalContent: (
      <>
        <p>
          Movie Search: The app connects to an external movie API (OMDb) to fetch movie data based on user-entered search queries. I optimized API requests to ensure fast and efficient data retrieval.
        </p>
        <p>
          I implemented a dynamic list of movies that updates in real-time as users search for different movies. This approach provided an interactive and engaging user experience.
        </p>
        <p>
          Special attention was given to error handling during data fetching. When a movie is not found, the app displays an appropriate error message, ensuring a user-friendly experience.
        </p>
        <p>
          Users can add their favorite movies to a personalized movie list. This feature allowed users to manage their movie collections efficiently.
        </p>

        <p>
          A movie preview section was integrated into the app, displaying essential details like the movie title, description, poster image, and a link to the IMDb page. This preview offered users a glimpse of the movie before adding it to their list.
        </p>
      </>
    ),
  },

  {
    title: 'Carousel',
    imgSrc: '/project-imgs/carousel.png',
    code: 'https://github.com/mate-academy/react_carousel/pull/372',
    projectLink: 'https://iksich.github.io/react_carousel/',
    tech: ['TypeScript', 'SCSS', 'React'],
    description:
        'I designed and developed a dynamic Carousel component using React, enabling users to display and navigate through a collection of images. Users can customize item width, frame size, and scroll step. The component includes smooth animations, responsive navigation, and an optional cyclic scrolling feature for seamless looping.',
    modalContent: (
      <>
        <p>
          Interactive Image Display: The Carousel component enables users to present a set of images in an engaging way. Users can navigate through the images using intuitive previous and next buttons.
        </p>
        <p>
          Customization Options: I designed the Carousel to be highly customizable. Users can adjust the width of each displayed item, control the number of items shown simultaneously in the frame, and determine the number of items scrolled per interaction.
        </p>
        <p>
          Smooth Animations: To enhance user experience, I incorporated smooth slide animations during navigation. The animation duration can also be customized to achieve the desired visual effect.
        </p>
        <p>
          Infinite Looping: For added flexibility, I implemented an option for cyclic scrolling. This means that when reaching the end of the images, the Carousel seamlessly continues from the beginning, creating an infinite loop.
        </p>
        <p>
          Responsive Design: The Carousel component is designed to be responsive, adapting to different screen sizes while maintaining a coherent and visually appealing layout.
        </p>
      </>
    ),
  },

  {
    title: 'Portfolio website',
    imgSrc: '/project-imgs/portfolio.png',
    code: 'https://github.com/Iksich/my-portfolio',
    projectLink: 'https://my-portfolio-iksich.vercel.app/',
    tech: ['TypeScript', 'SCSS', 'EmailJs', 'Framer-Motion', 'React'],
    description:
      'This portfolio website showcases a collection of my projects and skills as a developer. Built using React, TypeScript, and SCSS, it provides an interactive way for recruiters and potential employers to explore my work and expertise.',
    modalContent: (
      <>
        <p>
          This portfolio website is designed to present my programming projects and showcase my capabilities as a developer. It offers an engaging and user-friendly experience, allowing visitors to navigate through different sections to learn more about my work.
        </p>
        <p>
          The website is built using React to create a dynamic and responsive user interface. TypeScript is used to enhance the development process by providing type safety and improved code readability.
        </p>
        <p>
          Visitors can explore the various projects I&apos;ve worked on, view project details, and access GitHub repositories or live demos. Additionally, the website provides information about the programming languages, frameworks, and tools I&apos;m proficient in.
        </p>
        <p>
          I&apos;m excited to share my work and connect with others in the tech community through this portfolio website. Thank you for visiting!
        </p>
      </>
    ),
  },

  {
    title: 'Todo app',
    imgSrc: '/project-imgs/todo_app.png',
    code: 'https://github.com/mate-academy/react_todo-app-with-api/pull/342',
    projectLink: 'https://iksich.github.io/react_todo-app-with-api/#/',
    tech: ['TypeScript', 'SCSS', 'React'],
    description:
      'For this project, I designed and developed a dynamic Todo application with API integration, allowing users to manage their tasks efficiently. The app is built using React and TypeScript, providing a seamless user experience with error-free data handling.',
    modalContent: (
      <>
        <p>
          The app integrates with an API to perform Create, Read, Update, and Delete (CRUD) operations on Todo items. Users can create new tasks, update their status, modify titles, and delete completed or unwanted tasks.
        </p>
        <p>
          I implemented asynchronous data fetching from the API using React&apos;s useEffect hook, ensuring that the app always displays the latest data.
        </p>
        <p>
          The app is designed to handle various error scenarios gracefully. In case of API call failures or empty titles, appropriate error messages are displayed to the users, ensuring a user-friendly experience.
        </p>
        <p>
          Users can filter Todo items based on their completion status (All, Active, Completed). The app dynamically updates the displayed list according to the selected filter, providing an organized view of tasks.
        </p>

        <p>
          A convenient &quot;Toggle All&quot; button allows users to toggle the completion status of all Todo items with a single click, streamlining task management.
        </p>

        <p>
          While processing API requests, the app displays a loader overlay, preventing user interactions during data fetching, and offering a smooth experience.
        </p>
      </>
    ),
  },
];

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};
