type BlogPost = {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  isFeatured: boolean;
  isPopular: boolean;
  isMustRead: boolean;
  isLiked: boolean;
  isWishlisted: boolean;
  likesCount: number;
  status: string;
};

export const blogPosts: BlogPost[] = [
  // Frontend Development Posts
  {
    id: 1,
    title: 'Understanding React Component Lifecycle',
    author: 'Jane Doe',
    date: '2024-08-30',
    excerpt: 'Delve into React’s component lifecycle and understand how to leverage it in your frontend development projects.',
    content: `
      ### Introduction
      React is a powerful JavaScript library for building user interfaces. One of the core concepts in React is the component lifecycle, which describes the series of methods that are invoked at different stages of a component’s existence. Understanding these methods is crucial to mastering React development.

      ### Mounting Phase
      The mounting phase is when the component is being inserted into the DOM. This phase includes methods such as:
      - **constructor()**: Initializes the component’s state and binds methods.
      - **render()**: Renders the UI based on the component’s state and props.
      - **componentDidMount()**: Called once the component is inserted into the DOM, great for API calls or initializing third-party libraries.

      ### Updating Phase
      When a component’s state or props change, it goes through the updating phase. Key methods here are:
      - **shouldComponentUpdate()**: Determines whether the component should re-render or not.
      - **componentDidUpdate()**: Invoked after the component is updated and re-rendered.

      ### Unmounting Phase
      When a component is removed from the DOM, the **componentWillUnmount()** method is called. This is an important method for cleaning up timers, network requests, or event listeners.

      ### Conclusion
      Understanding the React component lifecycle helps in optimizing performance, managing component state efficiently, and enhancing the overall user experience. Once you master these lifecycle methods, you’ll be able to handle complex user interactions seamlessly.
    `,
    tags: ['React', 'Frontend', 'Lifecycle'],
    category: 'Frontend Development',
    isFeatured: true,
    isPopular: false,
    isMustRead: false,
    isLiked: false,
    isWishlisted: false,
    likesCount: 50,
    status: "published",
  },
  {
    id: 2,
    title: 'Building Interactive UIs with Vue.js',
    author: 'John Smith',
    date: '2024-08-28',
    excerpt: 'Explore the powerful features of Vue.js to create highly interactive user interfaces that delight users.',
    content: `
      ### Introduction
      Vue.js is a progressive JavaScript framework used for building user interfaces. Its simplicity and flexibility make it an excellent choice for developers who want to create dynamic and responsive UIs.

      ### Data Binding and Directives
      Vue.js introduces a powerful data binding system that allows you to bind DOM elements to data properties. Directives such as **v-if**, **v-for**, and **v-bind** provide a declarative approach to manipulating the DOM based on data changes.

      ### Reactive State
      Vue.js uses a reactive system where changes to data properties automatically trigger updates in the UI. This reactive system eliminates the need for manually updating the DOM and makes your code more intuitive and concise.

      ### Component System
      Vue.js encourages the use of components to build complex UIs. Components are reusable and encapsulated, allowing you to break down your UI into smaller, more manageable pieces.

      ### Conclusion
      Vue.js is ideal for building interactive UIs because of its simplicity and flexibility. With features like reactive state, data binding, and reusable components, you can create rich, engaging user experiences effortlessly.
    `,
    tags: ['Vue', 'Frontend', 'UI'],
    category: 'Frontend Development',
    isFeatured: false,
    isPopular: true,
    isMustRead: true,
    isLiked: false,
    isWishlisted: false,
    likesCount: 30,
    status: "published",
  },
  {
    id: 3,
    title: 'Mastering CSS Grid Layouts',
    author: 'Alice Brown',
    date: '2024-08-20',
    excerpt: 'A deep dive into CSS Grid and how to masterfully layout complex web pages with ease.',
    content: `
      ### Introduction
      CSS Grid is a game-changer in web layout design. It provides a two-dimensional layout system that makes it easy to create complex designs without the need for floats, positioning, or tables.

      ### Grid Basics
      The CSS Grid system is based on rows and columns, allowing you to control both the horizontal and vertical layout of your content. By defining grid containers and grid items, you can organize your layout with precision.

      ### Creating Grid Layouts
      You can define a grid using properties like **grid-template-columns** and **grid-template-rows**. Additionally, **grid-gap** allows you to control the spacing between grid items, making it easier to design aesthetically pleasing layouts.

      ### Responsive Design with Grid
      CSS Grid excels in creating responsive designs. You can use media queries to adjust grid properties based on the viewport size, making your layout adaptable to any device.

      ### Conclusion
      CSS Grid is a powerful tool for any front-end developer. Its ability to create sophisticated, responsive layouts with minimal code has made it a go-to solution for modern web design. Mastering CSS Grid will significantly improve your ability to design professional, flexible layouts.
    `,
    tags: ['CSS', 'Frontend', 'Grid'],
    category: 'Frontend Development',
    isFeatured: false,
    isPopular: false,
    isMustRead: true,
    isLiked: false,
    isWishlisted: false,
    likesCount: 20,
    status: "published",
  },

  // Backend Development Posts
  {
    id: 4,
    title: 'Getting Started with Node.js and Express',
    author: 'Emily Davis',
    date: '2024-08-15',
    excerpt: 'Learn how to build powerful server-side applications using Node.js and Express for real-time, scalable solutions.',
    content: `
      ### Introduction
      Node.js is a runtime environment that allows you to execute JavaScript code on the server side. Paired with Express, a minimal and flexible web application framework, it provides a powerful way to build scalable web applications.

      ### Setting Up Node.js and Express
      Start by installing Node.js and Express through npm. Once set up, you can create routes to handle HTTP requests and responses, making your web application dynamic.

      ### Middleware and Routing
      Middleware in Express allows you to process requests before they reach your route handler. This is useful for authentication, logging, or data validation. Routing, on the other hand, lets you define the logic for handling specific endpoints of your application.

      ### Real-Time Applications
      One of Node.js’s strengths is its ability to handle real-time applications, such as chat applications or online games. You can use libraries like Socket.io to enable real-time, bidirectional communication between the client and server.

      ### Conclusion
      Node.js and Express together form a powerful combination for building server-side applications. With their scalability and support for real-time communication, you can create fast and efficient web applications suited for modern use cases.
    `,
    tags: ['Node.js', 'Backend', 'Express'],
    category: 'Backend Development',
    isFeatured: true,
    isPopular: false,
    isMustRead: false,
    isLiked: false,
    isWishlisted: false,
    likesCount: 45,
    status: "published",
  },
  {
    id: 5,
    title: 'Understanding GraphQL and Its Benefits',
    author: 'Mark Johnson',
    date: '2024-08-12',
    excerpt: 'An in-depth look into GraphQL and how it simplifies API development by providing flexible and efficient data querying.',
    content: `
      ### Introduction
      GraphQL is an open-source data query language developed by Facebook that provides a more efficient, powerful, and flexible alternative to REST APIs. GraphQL allows clients to request specific data, minimizing over-fetching and under-fetching of information.

      ### The GraphQL Query Language
      With GraphQL, you define your data schema and resolve queries based on that schema. This allows clients to specify exactly what data they need in a single request, making the API more efficient.

      ### Benefits of GraphQL
      - **Flexible Data Retrieval**: Clients can request only the data they need.
      - **Single Request for Multiple Resources**: No need to send multiple requests to get related resources, reducing network overhead.
      - **Strongly Typed Schema**: Ensures that clients know exactly what data is available and how to query it.

      ### Conclusion
      GraphQL revolutionizes the way APIs are developed by offering flexibility, efficiency, and a clear structure for data fetching. It’s especially beneficial for applications with complex data relationships or varied client needs.
    `,
    tags: ['GraphQL', 'Backend', 'API'],
    category: 'Backend Development',
    isFeatured: false,
    isPopular: true,
    isMustRead: true,
    isLiked: false,
    isWishlisted: false,
    likesCount: 65,
    status: "published",
  },
  {
    id: 6,
    title: 'Building Real-Time Applications with WebSockets',
    author: 'Sarah Wilson',
    date: '2024-08-05',
    excerpt: 'Discover how to use WebSockets to create real-time, interactive web applications with a focus on performance and scalability.',
    content: `
      ### Introduction
      WebSockets provide a full-duplex communication channel over a single TCP connection. They are particularly useful for real-time applications such as chat apps, live updates, or collaborative tools.

      ### How WebSockets Work
      Unlike HTTP, WebSockets maintain an open connection between the client and server, allowing data to be sent and received at any time. This makes WebSockets ideal for applications that require real-time communication.

      ### Implementing WebSockets
      You can implement WebSockets in your Node.js application using the **ws** library. Once you establish the WebSocket connection, both the client and server can send and receive messages continuously without needing to re-establish the connection.

      ### Real-Time Use Cases
      WebSockets are used for various real-time applications such as:
      - **Chat Applications**: Enabling live communication between users.
      - **Live Feeds**: Providing real-time updates in sports, stock markets, or social media platforms.
      - **Collaboration Tools**: Allowing multiple users to work together in real-time, such as in online document editing or design platforms.

      ### Conclusion
      WebSockets offer a scalable and performant way to build real-time applications. By keeping an open connection between the server and client, they allow for continuous data flow, which is essential for modern interactive apps.
    `,
    tags: ['WebSockets', 'Backend', 'Real-Time'],
    category: 'Backend Development',
    isFeatured: false,
    isPopular: true,
    isMustRead: false,
    isLiked: false,
    isWishlisted: false,
    likesCount: 40,
    status: "published",
  },

  // DevOps Posts
  {
    id: 7,
    title: 'Getting Started with CI/CD Pipelines',
    author: 'Daniel Thompson',
    date: '2024-07-30',
    excerpt: 'An introduction to setting up CI/CD pipelines for automated testing, building, and deployment.',
    content: `
      ### Introduction
      CI/CD (Continuous Integration/Continuous Deployment) pipelines automate the process of testing, building, and deploying applications. They help ensure that new code changes are reliable and can be released quickly.

      ### Setting Up CI/CD
      CI/CD involves a series of stages:
      - **Continuous Integration (CI)**: Automatically testing and integrating new code changes into the main codebase.
      - **Continuous Deployment (CD)**: Automatically deploying the code to production after it passes all the stages of testing.

      Tools like Jenkins, CircleCI, and GitHub Actions can help you set up a pipeline that tests and deploys your code seamlessly.

      ### Conclusion
      CI/CD pipelines are essential for modern software development, allowing teams to deliver new features and updates faster, while ensuring quality and reliability.
    `,
    tags: ['CI/CD', 'DevOps', 'Automation'],
    category: 'DevOps',
    isFeatured: false,
    isPopular: true,
    isMustRead: false,
    isLiked: false,
    isWishlisted: false,
    likesCount: 35,
    status: "published",
  },
  {
    id: 8,
    title: 'Introduction to Docker and Containerization',
    author: 'Laura Green',
    date: '2024-07-25',
    excerpt: 'Learn the basics of Docker and how containerization is revolutionizing software deployment and scalability.',
    content: `
      ### Introduction
      Docker is a containerization platform that packages applications and their dependencies into containers, ensuring that they run consistently across different environments.

      ### Why Use Containers?
      Containers solve the "works on my machine" problem by encapsulating the application and all of its dependencies. This makes it easier to deploy applications across different platforms without worrying about environmental differences.

      ### Getting Started with Docker
      - Install Docker on your machine.
      - Create a **Dockerfile** that specifies the environment for your application.
      - Use **docker build** to create an image and **docker run** to start a container.

      ### Conclusion
      Docker simplifies deployment by ensuring that your application runs the same way in development, testing, and production. It's an essential tool for any modern development workflow.
    `,
    tags: ['Docker', 'DevOps', 'Containerization'],
    category: 'DevOps',
    isFeatured: true,
    isPopular: false,
    isMustRead: true,
    isLiked: false,
    isWishlisted: false,
    likesCount: 55,
    status: "published",
  },

  // Mobile Development Posts
  {
    id: 9,
    title: 'Building Cross-Platform Apps with React Native',
    author: 'Emily White',
    date: '2024-07-20',
    excerpt: 'Explore how to build performant cross-platform mobile apps using React Native.',
    content: `
      ### Introduction
      React Native is a framework that allows developers to build mobile applications using JavaScript and React. It enables cross-platform development, meaning you can create apps for both iOS and Android with a single codebase.

      ### Benefits of React Native
      - **Code Reusability**: Write once, run anywhere.
      - **Native Performance**: React Native uses native components, ensuring that your app performs as if it were written in native code.
      - **Hot Reloading**: Quickly see the results of your code changes without rebuilding the entire app.

      ### Conclusion
      React Native is an excellent choice for developers looking to build cross-platform apps efficiently. With its native performance and ease of use, it's a powerful tool for mobile app development.
    `,
    tags: ['React Native', 'Mobile Development', 'Cross-Platform'],
    category: 'Mobile Development',
    isFeatured: false,
    isPopular: true,
    isMustRead: false,
    isLiked: false,
    isWishlisted: false,
    likesCount: 70,
    status: "published",
  },
  {
    id: 10,
    title: 'Mastering Flutter for Mobile App Development',
    author: 'Michael Brown',
    date: '2024-07-10',
    excerpt: 'Learn the basics of Flutter and how it empowers developers to create beautiful, natively compiled mobile applications.',
    content: `
      ### Introduction
      Flutter is Google’s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. It’s known for its fast performance and expressive UIs.

      ### Getting Started with Flutter
      Flutter uses Dart as its programming language and provides a rich set of pre-designed widgets to create modern, responsive UIs. The Flutter framework also offers:
      - **Hot Reload**: See the effects of your code changes instantly.
      - **Widget Library**: A comprehensive library of customizable widgets for UI design.

      ### Conclusion
      Flutter is a powerful tool for developers who want to create high-quality, visually appealing mobile applications with minimal code. Its ability to produce native performance across multiple platforms makes it a popular choice for mobile app development.
    `,
    tags: ['Flutter', 'Mobile Development', 'Cross-Platform'],
    category: 'Mobile Development',
    isFeatured: true,
    isPopular: false,
    isMustRead: true,
    isLiked: false,
    isWishlisted: false,
    likesCount: 60,
    status: "published",
  },

  // Emerging Tech Posts
  {
    id: 11,
    title: 'Introduction to Web3 and Decentralized Apps',
    author: 'Anna Lee',
    date: '2024-07-01',
    excerpt: 'Get to know the basics of Web3, blockchain technology, and how decentralized apps (dApps) are shaping the future.',
    content: `
      ### Introduction
      Web3 refers to the next generation of the internet, which aims to be decentralized, powered by blockchain technology. Decentralized apps (dApps) run on a peer-to-peer network, offering greater transparency and user control.

      ### Key Concepts in Web3
      - **Blockchain**: A distributed ledger that stores information securely.
      - **Smart Contracts**: Self-executing contracts with terms directly written into code.
      - **dApps**: Applications that run on decentralized networks rather than centralized servers.

      ### Conclusion
      Web3 represents a shift towards a more decentralized and user-centric internet. With blockchain and dApps at the core, Web3 is poised to transform industries by offering greater transparency, security, and control to users.
    `,
    tags: ['Web3', 'Blockchain', 'dApps'],
    category: 'Emerging Tech',
    isFeatured: false,
    isPopular: true,
    isMustRead: false,
    isLiked: false,
    isWishlisted: false,
    likesCount: 80,
    status: "published",
  },
];
