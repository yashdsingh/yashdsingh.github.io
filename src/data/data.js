// ============================================================
// DATA FILE — Replace all placeholder values with your own!
// ============================================================

export const personalInfo = {
  name: "Yash D Singh",
  title: "Cybersecurity | AI/ML | Web Development",
  tagline: "Building, Breaking, Learning, Improving.",
  bio: `Hello, I am Yash, a third year BCA student and tech-savvy individual with passion to turn my ideas into projects and always keep myself updated about the latest areas in the field of Computer Science. My primary interests include Cybersecurity, Web Development, Python, Artificial Intelligence, Databases and Cryptography.
Throughout my education, I have been learning by practicing hands-on. I have undertaken many projects using Flask, Javascript, Firebase, Firestore, SQLite, MySQL and networking programming, along with exploring Cybersecurity using Kali Linux, Nmap, OWASP ZAP and Nikto. My first experience of using Kali Linux through the internship of Cyber Security made me more interested in practical aspects of cyber security.
Apart from studies, I take active part in technical events and competitions, where I have performed well in many events. Solving technical problems, debugging difficult bugs, experimenting with new technologies and learning through each project is something which I enjoy.
At present, I am concentrating on improving my development and cybersecurity skills, apart from exploring the field of Artificial Intelligence and other new technologies.
Every project, every mistake and every new concept is an opportunity for me to learn and improve.`,
  email: "yashdsingh9@outlook.com",
  location: "Prayagraj, India",
  github: "https://github.com/yashdsingh",
  linkedin: "https://www.linkedin.com/in/yash-d-singh-8633ab347 ",
  twitter: "https://x.com/yashdsingh30552",
  avatar: "/avatar.png", // Your profile photo
  resumeUrl: "/Yash_Resumefinal.pdf", // Place your PDF in the 'public' folder and put '/filename.pdf' here
};

export const skills = [
  // Programming
  { name: "Python", category: "Programming", level: 80, icon: "🐍", color: "#3776AB" },
  { name: "Java", category: "Programming", level: 65, icon: "☕", color: "#ED8B00" },
  { name: "JavaScript", category: "Programming", level: 70, icon: "🟨", color: "#F7DF1E" },
  { name: "SQL", category: "Programming", level: 75, icon: "🗄️", color: "#336791" },

  // Web Development
  { name: "HTML", category: "Web Development", level: 85, icon: "🌐", color: "#E34F26" },
  { name: "CSS", category: "Web Development", level: 75, icon: "🎨", color: "#1572B6" },
  { name: "Flask", category: "Web Development", level: 75, icon: "🌶️", color: "#000000" },

  // Database
  { name: "SQLite", category: "Database", level: 80, icon: "🗃️", color: "#003B57" },
  { name: "MySQL", category: "Database", level: 70, icon: "🐬", color: "#4479A1" },
  { name: "Firebase", category: "Database", level: 70, icon: "🔥", color: "#FFCA28" },
  { name: "Firestore", category: "Database", level: 70, icon: "☁️", color: "#FFA000" },

  // Cybersecurity
  { name: "Kali Linux", category: "Cybersecurity", level: 75, icon: "🐉", color: "#557C94" },
  { name: "OWASP ZAP", category: "Cybersecurity", level: 65, icon: "🛡️", color: "#00549E" },
  { name: "Nikto", category: "Cybersecurity", level: 60, icon: "🔍", color: "#D32F2F" },
  { name: "Network Scanning", category: "Cybersecurity", level: 70, icon: "🌐", color: "#7B1FA2" },
  { name: "Cryptography", category: "Cybersecurity", level: 60, icon: "🔐", color: "#00897B" },

  // Tools
  { name: "GitHub", category: "Tools", level: 60, icon: "🐙", color: "#181717" },
  { name: "VS Code", category: "Tools", level: 85, icon: "💻", color: "#007ACC" },
  { name: "VMware", category: "Tools", level: 70, icon: "🖥️", color: "#607078" },
];

export const interests = [
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    description:
      "Exploring AI concepts, intelligent systems, RAG, and practical AI applications for solving real-world problems.",
  },
  {
    title: "Web Development",
    icon: "🌐",
    description:
      "Building responsive and functional web applications using HTML, CSS, JavaScript, Python, Flask, and modern web technologies.",
  },
  {
    title: "Cybersecurity",
    icon: "🔐",
    description:
      "Exploring ethical hacking, network security, vulnerability assessment, web security, and security testing tools.",
  },
  {
    title: "Cryptography",
    icon: "🛡️",
    description:
      "Learning about encryption, secure communication, cryptographic algorithms, and emerging quantum-safe security technologies.",
  },
  {
    title: "Software Development",
    icon: "💻",
    description:
      "Developing practical software projects and improving programming, database, debugging, and problem-solving skills.",
  },
  {
    title: "Research & Technology",
    icon: "🔬",
    description:
      "Exploring emerging technologies, research papers, and innovative solutions at the intersection of AI, cybersecurity, and software development.",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution:
      "Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS)",
    period: "2024 – Present",
    gpa: "Final Year",
    description:
      "Pursuing a BCA with a strong focus on programming, web development, databases, cybersecurity, and emerging technologies. Actively involved in technical events, competitions, and practical software projects, with consistent recognition for technical performance.",
    highlights: [
      "Final Year BCA Student",
      "Won Multiple College Technical Events",
      "Frequently Ranked Among the Top 3 Scorers in Technical Events",
      "Strong Practical Skills in Computer Science",
    ],
  },
  {
    degree: "Higher Secondary (12th Grade) – Science",
    institution: "Bethany Convent School, Naini, Prayagraj",
    period: "2023 – 2024",
    gpa: "85%",
    description:
      "Completed Higher Secondary education in the Science stream (Non-Mathematics) with Computer Science. Developed a strong foundation in computer science and technology and became a well-known student for technical knowledge and performance in Computer Science.",
    highlights: [
      "Science Stream – Non-Mathematics",
      "Computer Science",
      "85% Overall",
      "Recognized for Strong Computer Science Skills",
    ],
  },
];

export const projects = [
  {
    title: "ShareHub – Donor & Receiver Platform",
    description:
      "A donation platform connecting donors and receivers with login, donation requests, image uploads, and request management.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    status: "Completed",
    github: "https://github.com/yashdsingh/ShareHub",
    live: null,
    image: null,
    featured: true,
    isPrivate: false,
  },
  {
    title: "Church Subscription Management System",
    description:
      "A subscription management system for tracking church members, monthly payments, pending amounts, advance payments, and member records.",
    tech: ["Next.js", "React", "Firebase", "Firestore", "Firebase Auth"],
    status: "Ongoing",
    github: null,
    live: null,
    image: null,
    featured: true,
    isPrivate: true,
  },
  {
    title: "Church Song Book",
    description:
      "A web-based song book for managing and browsing church songs with lyrics, categories, languages, search, favorites, and YouTube integration.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    status: "Ongoing",
    github: null,
    live: null,
    image: null,
    featured: false,
    isPrivate: true,
  },
  {
    title: "Network Scanner",
    description:
      "A Python-based network scanning tool designed to identify hosts, open ports, and available network services.",
    tech: ["Python", "Nmap", "Networking", "Kali Linux"],
    status: "Completed",
    github: null,
    live: null,
    image: null,
    featured: false,
    isPrivate: true,
  },
  {
    title: "Encrypted File Transfer",
    description:
      "A Python-based file transfer application that encrypts files and securely transfers them across a network using sockets.",
    tech: ["Python", "Sockets", "Cryptography", "Networking"],
    status: "Completed",
    github: null,
    live: null,
    image: null,
    featured: false,
    isPrivate: true,
  },
];

export const certifications = [
  {
    name: "Cyber Security – Project Completion",
    issuer: "EdiGlobe",
    date: "31 October 2025",
    credentialId: "EGPC0308",
    details: "Completed one minor and one major project.",
    link: "https://ediglobe.com/cert/EGPC0308",
    icon: "🔐",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
];


export const blogPosts = [
  {
    title: "My First Hands-On Experience with Kali Linux",
    excerpt:
      "My first hands-on experience with Kali Linux began during my EdiGlobe Cyber Security internship in October 2025. From setting it up in VMware to exploring tools like Nmap, OWASP ZAP, and Nikto, this was my first step toward understanding cybersecurity beyond theory and getting practical with security tools.",
    date: "September 26, 2026",
    tags: ["Kali Linux", "Cybersecurity", "Linux", "Penetration Testing"],
    link: "https://yashdsingh.hashnode.dev/my-first-hands-on-experience-with-kali-linux",
  },
  {
    title: "Cryptography: The Hidden Technology Protecting Our Digital World",
    excerpt:
      "Cryptography is one of the technologies quietly protecting our digital lives. In this article, I explore the fundamentals of encryption, hashing, symmetric and asymmetric cryptography, and how these concepts are used to protect information in the digital world.",
    date: "September 26, 2026",
    tags: ["Cryptography", "Cybersecurity", "Computer Science", "Technology"],
    link: "https://yashdsingh.hashnode.dev/how-does-cryptography-actually-protect-our-data",
  },
];