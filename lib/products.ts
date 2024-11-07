export type Product = {
  id: string;
  name: string;
  slug: string;
  title: string;
  description: string;
  content: {
    overview: string;
    challenge: string;
    solution: string;
    designProcess: {
      research: {
        description: string;
        findings?: string[];
        image: string;
      };
      ideation: {
        description: string;
        businessGoal?: string[];
        image: string;
        image2?: string;
      };
      prototyping?: {
        description?: string;
        images?: {
          wireframe?: string;
          prototype?: string;
        };
      };
      testing: {
        description: string;
        findings?: string[];
        image?: string;
      };
      implementation: {
        description: string;
        image?: string;
        video?: {
          url: string;
          type: string;
          thumbnail: string;
        };
      };
    };
    features: Array<{
      title: string;
      description: string;
    }>;
    outcomes: Array<{
      title: string;
      description: string;
    }>;
    learnings: string[];
  };
  images: string[];
};

export const products: Product[] = [
  {
    id: "1",
    name: "Lisin",
    slug: "lisin",
    title: "Lisin: A Case Study",
    description: "A web app connecting users with professionals to gain their expert advice.",
    content: {
      overview: "The Lisin project was a student initiative I completed as part of the CareerFoundry program. My goal was to bridge the gap between individuals seeking professional advice and industry experts by designing a platform that makes professional consultation accessible and efficient.",
      challenge: "Initially, the challenge was to create a platform that connects users with professionals for job completion or expert advice. However, after usability testing, it became clear that users primarily needed a streamlined solution for professional consultations.",
      solution: "A refined web application designed to focus solely on facilitating meaningful consultations and professional advice, featuring intelligent matching algorithms and real-time communication to enhance the user experience.",
      designProcess: {
        research: {
          description: "I conducted user interviews and market/competitor analyses to understand the pain points in seeking professional advice and identify key opportunities for improvement.",
          findings: [
            "Users were overwhelmed by the variety of professional services available and struggled to find the right fit for their needs.",
            "Users were looking for a more streamlined and efficient way to connect with trusted professionals for consultations.",
            "Apps like Upwork and Fiverr feel too complex and overwhelming for users seeking professional advice.",
          ],
          image: "/projects/lisin/research.png"
        },
        ideation: {
          description: "I defined business goals, created user personas based on user interviews, and mapped user flows to shape the platform's core features.",
          businessGoal: [
            "Provide real-time consultation through chat, voice messages, and video calls, achieving 10,000 user sign-ups and 3,000 successful paid consultations within the first 3 months of launch.",
          ],
          image: "/projects/lisin/persona.png",
          image2: "/projects/lisin/userflow.png"
        },
        prototyping: {
          description: "For mobile and desktop, I created interactive prototypes to test the consultation booking flow and communication interface.",
          images: {
            wireframe: "/projects/lisin/wireframe.png",
            prototype: "/projects/lisin/prototype.png"
          }
        },
        testing: {
          description: "I conducted usability testing with 5 participants using paper prototypes. The testing focused on evaluating how users navigate to the chatbot feature, initiate conversations, and interact with job recommendations. This helped identify key usability issues and areas for improvement in the interface design.",
          findings: [
            "Confusion over search icon on mobile.",
            "Difficulty with swiping for expert details (mobile).",
            "Desire for more information on ratings and reviews.",
            "Need for easy appointment edits and cancellations.",
            "Confusion over the edit button on mobile.",
          ],
        },
        implementation: {
          description: "The final design was implemented with a focus on creating an intuitive and professional experience for all users.",
          video: {
            url: "/projects/lisin/implementation.mp4",
            type: "video/mp4",
            thumbnail: "/projects/lisin/video-thumbnail.png"
          }
        }
      },
      features: [
        {
          title: "Designed for Smart Matching Algorithms",
          description: "I placed a strong focus on designing an intelligent system to match users with the most relevant professionals based on expertise and requirements."
        },
        {
          title: "Real-time Consultation",
          description: "I implemented secure video conferencing and messaging features for seamless communication."
        }
      ],
      outcomes: [
        {
          title: "User Testing Success",
          description: "During usability testing, participants found the app intuitive and easy to navigate, with 90% completing key tasks without assistance."
        },
        {
          title: "Platform Growth",
          description: "The platform was designed to scale, with infrastructure capable of supporting thousands of concurrent users and consultations."
        }
      ],
      learnings: [
        "The importance of trust-building features in professional networking platforms",
        "The value of real-time communication in professional consultations",
        "The need for flexible scheduling systems",
        "The significance of user verification and quality control"
      ]
    },
    images: [
      "/projects/lisin/main.png",
      "/projects/lisin/profile1.png",
      "/projects/lisin/consultation.png",
      "/projects/lisin/categories.png",
      "/projects/lisin/profile.png"
    ]
  },
  {
    id: "2",
    name: "Indeed Project",
    slug: "indeed",
    title: "Indeed AI Chatbot: A Case Study",
    description: "An intelligent chatbot feature for Indeed's mobile app to enhance job searches through personalized interactions.",
    content: {
      overview: "The Indeed AI Chatbot project was a student initiative I completed as part of the CareerFoundry program. My goal was to create an intelligent, conversational interface capable of providing personalized job search assistance. The goal was to enhance user experience while streamlining the job search process.",
      challenge: "Develop a chatbot that can understand and respond to complex job search queries in a human-like manner, while integrating seamlessly with Indeed's job database.",
      solution: "An AI-powered chatbot feature for mobile devices that can be integrated with Indeed's job database to provide personalized, context-aware job recommendations.",
      designProcess: {
        research: {
          description: "I independently conducted early interviews with users of job marketplace apps like Indeed, ZipRecruiter, and LinkedIn to understand their job search experiences. Many expressed feeling overwhelmed by irrelevant listings, which made it harder to find ideal jobs quickly and led to reduced engagement with job postings. This research highlighted areas where AI-driven improvements could enhance relevant job matches.",
          findings: [
            "LinkedIn - The AI chatbot feature can help users determine if a job is a good fit. However, access to this feature is restricted to premium subscription users, limiting accessibility for all job seekers.",
            "ZipRecruiter - Uses AI algorithms to streamline job matching, but prioritizes a large volume of listings over quality matches, often presenting users with unrelated jobs that don't align with their skills or interests.",
          ],
          image: "/projects/indeed/research.png"
        },
        ideation: {
          description: "Based on these research findings and other insights, I brainstormed various concepts for the AI chatbot, focusing on creating a seamless and intuitive conversational flow.",
          image: "/projects/indeed/ideation.png"
        },
        prototyping: {
          description: "I developed a paper prototype to visualize the chatbot's interface and interaction patterns.",
          images: {
            prototype: "/projects/indeed/low-fi-prototype.png"
          }
        },
        testing: {
          description: "I conducted usability testing with 5 participants using paper prototypes. The testing focused on evaluating how users navigate to the chatbot feature, initiate conversations, and interact with job recommendations. This helped identify key usability issues and areas for improvement in the interface design.",
          findings: [
            "Some users had difficulty locating the AI chatbot, as the button was unlabeled. Possible solution: Label the AI button next to the search input field and add an easily recognizable icon to improve visibility and integration within the app",
            "Users expressed a desire for assurance that AI-generated job recommendations are tailored to them. Possible solution: Include an indicator of match quality to create a more personalized experience",
            "Participants found it challenging to return to the home screen and continue browsing seamlessly. Possible solution: Design a more intuitive navigation flow to help users understand their location within the app",
          ]
        },
        implementation: {
          description: "After refining my design based on user feedback, I finalized the UI to bring the AI Chatbot to life.",
          video: {
            url: "/projects/indeed/implementation-indeed.mp4",
            type: "video/mp4",
            thumbnail: "/projects/indeed/video-thumbnail.png"
          }
        }
      },
      features: [
        {
          title: "Natural Language Processing",
          description: "Designed for advanced NLP techniques to understand and respond to user queries in a human-like manner."
        },
        {
          title: "Personalized Job Recommendations",
          description: "Integrated with Indeed's job database in mind to provide tailored job recommendations based on user preferences and history."
        }
      ],
      outcomes: [
        {
          title: "Designed for Improved Job Search Experience",
          description: "The redesigned chatbot interface aims to increase user satisfaction scores and reduce time-to-application by making the job search process more intuitive and personalized."
        },
        {
          title: "Designed for Increased Engagement",
          description: "The chatbot interface aims to drive higher user engagement with job listings through its personalized and interactive approach."
        }
      ],
      learnings: [
        "The importance of seamless AI integration within existing app interfaces rather than treating it as a separate feature",
        "The value of user testing in understanding how people naturally interact with AI chatbots",
        "The need for clear visual indicators and intuitive navigation to help users discover and access AI features",
        "The significance of maintaining brand consistency when implementing AI conversations"
      ]
    },
    images: [
      "/projects/indeed/main.png",
      "/projects/indeed/interface-1.png",
      "/projects/indeed/interface-2.png",
      "/projects/indeed/interface-3.png",
      "/projects/indeed/interface-4.png"
    ]
  },
  {
    id: "3",
    name: "Pixie",
    slug: "pixie",
    title: "Pixie: An Alexa Creative Writing Assistant",
    description: "An Alexa skill to help inspire creative writing through interactive storytelling prompts.",
    content: {
      overview: "Pixie is an Alexa skill designed to spark creativity and assist writers in overcoming writer's block through AI-powered storytelling prompts and writing exercises.",
      challenge: "Design a voice-first experience that effectively engages users in creative writing exercises while maintaining a natural and inspiring interaction flow.",
      solution: "An Alexa skill that combines creative writing prompts with interactive storytelling features, providing a hands-free way to brainstorm and develop story ideas.",
      designProcess: {
        research: {
          description: "We studied writers' creative processes and existing writing tools to identify opportunities for voice-based assistance.",
          image: "/projects/pixie/research.jpg"
        },
        ideation: {
          description: "We explored various approaches to voice-based creative writing assistance and developed concepts for engaging writing exercises.",
          image: "/projects/pixie/ideation.jpg"
        },
        prototyping: {
          description: "We created voice interaction prototypes to test different prompt styles and user engagement methods.",
          images: {
            wireframe: "/projects/pixie/wireframe.jpg",
            prototype: "/projects/pixie/prototype.jpg"
          }
        },
        testing: {
          description: "Writers of various experience levels tested the skill, providing feedback on prompt quality and interaction flow.",
          image: "/projects/pixie/testing.jpg"
        },
        implementation: {
          description: "The final implementation focused on creating a natural, conversational experience that truly inspires creativity.",
          image: "/projects/pixie/implementation.jpg",
          video: {
            url: "/projects/pixie/implementation.mp4",
            type: "video/mp4",
            thumbnail: "/projects/pixie/video-thumbnail.jpg"
          }
        }
      },
      features: [
        {
          title: "Dynamic Writing Prompts",
          description: "Generated contextual writing prompts based on user preferences and previous interactions."
        },
        {
          title: "Interactive Storytelling",
          description: "Enabled collaborative storytelling between user and AI to develop plot ideas."
        }
      ],
      outcomes: [
        {
          title: "User Engagement",
          description: "Average session duration of 15 minutes, with 70% of users returning weekly."
        },
        {
          title: "Creative Output",
          description: "Users reported generating an average of 3 new story ideas per session."
        }
      ],
      learnings: [
        "The importance of natural voice interaction in creative processes",
        "The balance between guidance and creative freedom",
        "The value of progressive difficulty in writing exercises",
        "The role of AI in creative inspiration"
      ]
    },
    images: [
      "/projects/pixie/main.jpg",
      "/projects/pixie/interface-1.png",
      "/projects/pixie/interface-2.png",
      "/projects/pixie/mobile.jpg",
      "/projects/pixie/dashboard.png"
    ]
  }
];

// Get a single product by slug
export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

// Get all products
export function getAllProducts() {
  return products;
}
