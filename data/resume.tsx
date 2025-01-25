import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aadi Raj Uthup",
  initials: "",
  url: "https://dillion.io",
  location: "Bengaluru, IN",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Full-time Student at IIT Madras, pursuing a B.S in Data Science and Programming. Full-Stack Developer building Websites, Apps and Training AI Models. Active on GitHub and Instagram",
  summary:
    "[At the end of 2023, I dropped out of NIT Calicut to go fulltime into the IIT Madras Data Science program and upskilling myself](/#education). In the past, I've worked as a freelancer and with my dad repairing systems, building servers, networks, software for various real-world applications. interned at a real estate company as a designer, and [competed in over 3 hackathons for fun](/#hackathons). [I also had the pleasure of learning through platforms like ProgrammingHub and Scrimba securing Google Developers LaunchPad Certification](https://direct.me/aadirajuthup/certifications/m4Kf).",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Python",
    "C++",
    "Docker",
    "Postgres",
    "AI/ML",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aadi.rajuthup@gmail.com",
    tel: "+91 9061211511",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/aadirajuthup-github",
        icon: Icons.github,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/aadirajuthup/",
        icon: Icons.instagram,

        navbar: true
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://api.whatsapp.com/send?phone=919061211511&text=Hi%2C%20I%20checked%20out%20your%20portfolio%20and%20came%20from%20there!%20%F0%9F%91%8B",
        icon: Icons.whatsapp,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aadi.rajuthup@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Airlinks Systems",
      href: "#",
      badges: ['Next.js', 'RAT', 'IoT', 'Reverse Engineering'],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/atomic.png",
      start: "January 2024",
      end: "Present",
      description:
        "R&D of RPI based real-time IoT two way PA system. Setup and maintained physical server. Developed port-forwarding and VPN solutions for remote access. Reverse engineered and developed custom deployment mechanisms for Ubiquiti™ UISP server architecture.",
    },
    {
      company: "Airlinks Systems",
      badges: ['Ubiquiti™','Docker','Python', 'CI/CD'],
      href: "#",
      location: "Remote",
      title: "Cloud Administrator",
      logoUrl: "/atomic.png",
      start: "March 2020",
      end: "January 2024",
      description:
        "Regular maintenance of cloud infrastructure. Setup and maintained CI/CD pipelines. Deployed and managed production ready Ubiquiti™ UISP server. Developed and maintained internal tools for monitoring and alerting. Setup Caddy reverse proxy + AutoSSL Cert",
    },
    {
      company: "Airlinks Solutions",
      href: "#",
      badges: ['Python', 'Docker', 'Linux'],
      location: "Wayanad, Kerala",
      title: "Junior Software Engineer",
      logoUrl: "/buildspace.jpg",
      start: "January 2019",
      end: "March 2020",
      description:
        "Managed hosting and domain services. Repair and maintenance of PCs and Laptops. Developed automation scripts for server maintenance, backups, and monitoring.",
    },
  ],
  education: [
    {
      school: "Indian Institute of Technology Madras",
      href: "https://iitm.ac.in",
      degree: "Bachelor of Science (B.S) in Data Science and Programming",
      logoUrl: "/iitm.png",
      start: "2023",
      end: "2028",
    },
    {
      school: "National Institute of Technology Calicut",
      href: "https://nitc.ac.in",
      degree: "Bachelor of Technology (B.Tech) in Bio-Technology",
      logoUrl: "/nitc.png",
      start: "2023",
      end: "",
    },
    {
      school: "De Paul International Residential School",
      href: "https://dpirs.org/",
      degree: "Schooling (Primary to High)",
      logoUrl: "/dpirs.png",
      start: "",
      end: "",
    },
  ],
  projects: [
    {
      title: "Ubiquiti™ UISP",
      href: "https://uisp.com/uisp-overview",
      dates: "June 2021 - Present",
      active: true,
      description:
        "Deployed an industry leading ISP network and business management platform for multiple clients. Developed custom deployment and security mechanisms for Ubiquiti™ server architecture.",
      technologies: [
        "Azure",
        "Docker",
        "Caddy",
        "Postgres",
        "Linux",
        "Custom Scripts",
      ],
      links: [
        {
          type: "UISP™",
          href: "https://uisp.com/uisp-overview",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Dashboard",
          href: "https://uisps.pryvate.xyz",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/aadirajuthup/aadirajuthup/raw/refs/heads/master/public/uisp.mp4",
    },
    {
      title: "OpenWebUI Ollama Google Colab Notebook",
      href: "https://colab.research.google.com/github/aadirajuthup/OpenWebUI-Ollama-Google-Colab/blob/main/notebook.ipynb",
      dates: "January 2025 - Present",
      active: true,
      description:
        "Developed a Google Colab notebook integrating OpenWebUI and Ollama, a web-based open source ChatGPT like UI that can run any AI model. OpenWebUI allows system prompting and extensive parameter tweaking and tuning.",
      technologies: [
        "Google Colab", 
        "OpenWebUI",
        "Ollama",
        "Jyputer",
        "Python",
      ],
      links: [
        {
          type: "Open In Colab",
          href: "https://colab.research.google.com/github/aadirajuthup/OpenWebUI-Ollama-Google-Colab/blob/main/notebook.ipynb",
          icon: <Icons.colab className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/aadirajuthup/OpenWebUI-Ollama-Google-Colab",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/aadirajuthup/aadirajuthup/raw/refs/heads/master/public/openwebui.mp4",
    },
    {
      title: "Responsive Playstation™ 5 Website",
      href: "https://aadirajuthup.github.io/ps5/",
      dates: "April 2023 - October 2023",
      active: true,
      description:
        "Developed a fully responsive Playstation™ 5 style website. Built with pure HTML, CSS and JavaScript. Hosted on GitHub Pages.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub Pages",
      ],
      links: [
        {
          type: "Demo",
          href: "https://aadirajuthup.github.io/ps5/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/aadirajuthup/ps5",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/aadirajuthup/aadirajuthup/raw/refs/heads/master/public/ps5.mp4",
    },
    {
      title: "Truth-ify",
      href: "https://github.com/aadirajuthup/coderstent-hacksprint",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "A browser extension to detect and flag misinformation on social media platforms, developed as a hackathon project for HackSprint 2025.",
      technologies: [
        "React",
        "Express",
        "TailwindCSS",
        "AceternityUI",
        "shadcn/ui",
        "Vite",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/aadirajuthup/coderstent-hacksprint",
          icon: <Icons.github />,
        },
      ],
      image: "",
      video:
        "https://github.com/aadirajuthup/aadirajuthup/raw/refs/heads/master/public/truthify.mp4",
    },
  ],
  hackathons: [
    {
      title: "Quantageddon",
      dates: "January 1st - 6th, 2025",
      location: "Chennai, India",
      description:
        "Developed an AI model that can predict stock prices based on previous data and to do quantitative analysis using previous price action, volume and order flow data.",
      icon: "public",
      image:
        "/quantageddon.png",
      links: [],
    },
    {
      title: "HackSprint",
      dates: "January 2nd - 6th, 2025",
      location: "Chennai, India",
      description:
        "Developed an AI browser extension that can detect fake news,misinformation on the page you're on and provide sources to back  it up.",
      image:
        "/hacksprint.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "LogicLooM",
      dates: "January 4th - 7th, 2025",
      location: "Chennai, India",
      description:
        "Developed a resource efficient large language AI model that can be used for various natural language processing tasks.",
      image:
        "/logicloom.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
