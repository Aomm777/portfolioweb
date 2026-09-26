import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'ปภังกร ฐานะกาญจน์ (ออม)',
        title: 'Game Developer & Software Engineer',
        subtitle: 'Game Developer • Software Engineer | มุ่งมั่นพัฒนาซอฟต์แวร์และเกมด้วยระบบที่มีประสิทธิภาพ',
        bio: 'จุดเริ่มต้นจากความสงสัยในวัยเด็กว่า "โค้ดและคอมพิวเตอร์ประมวลผลอย่างไร" สู่การลงมือทำจริงบน Roblox Studio ตลอดการเดินทาง ผมได้พัฒนาทักษะด้าน Game Development, Logic Design และ Software Engineering ผ่านโครงการระดับประเทศอย่าง NSC 2026 (เข้ารอบระดับภูมิภาค) และการแข่งขัน GameJamX ผมมีความมุ่งมั่นที่จะเติบโตเป็นนักพัฒนาซอฟต์แวร์ที่สร้างสรรค์นวัตกรรมและระบบที่มีประสิทธิภาพสูง',
        avatar: '/images/profile.png',
        location: 'Thailand',
        email: 'Wi.koo25561@gmail.com',
        phone: '0986627263',
        resumeUrl: '/resume.pdf',
        website: 'https://github.com/Paphangkorn',
        languages: [
            { name: 'Thai', level: 'Native' },
            { name: 'English', level: 'Working Proficiency' },
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/Paphangkorn',
                icon: 'github',
                username: 'Paphangkorn',
            },
            {
                platform: 'Instagram',
                url: 'https://instagram.com/ppk.tnk',
                icon: 'instagram',
                username: 'ppk.tnk',
            },
            {
                platform: 'Facebook',
                url: 'https://facebook.com/doc.kx',
                icon: 'facebook',
                username: 'Doc Kx',
            }
        ],
    },

    projects: [
        {
            id: 'project-1',
            slug: 'bronopoly-nsc2026',
            title: 'Bronopoly',
            image: '/images/bronopoly.png',
            description: 'เกม Multiplayer สร้างความรู้ด้านเศรษฐศาสตร์ผ่านโลกจำลอง เข้ารอบระดับภูมิภาค NSC 2026',
            longDescription: 'Bronopoly เป็นผลงานชิ้นโบแดงที่พัฒนาขึ้นสำหรับการแข่งขัน National Software Contest (NSC) 2026 โดยเป็นเกมแนว Multiplayer บนแพลตฟอร์ม Roblox ซึ่งออกแบบมาเพื่อแก้ไขปัญหาความเข้าใจด้านการเงินในชีวิตประจำวัน ผมรับบทบาทเป็น Team Leader และ Programmer คอยจัดการโค้ด ออกแบบ System Design และพัฒนาระบบที่มีความซับซ้อนให้ทำงานได้อย่างราบรื่น',
            techStack: ['Roblox Studio', 'Lua Script', 'System Design'],
            tools: ['VS Code', 'Roblox Studio', 'Cursor AI'],
            status: 'completed',
            repoUrl: 'https://github.com/Paphangkorn',
            demoUrl: '#',
            startDate: '2025-01-01',
            endDate: '2026-03-01',
            role: 'Team Leader & Programmer',
            customTimeline: 'NSC 2026 — เข้ารอบระดับภูมิภาค',
            team: 'Team Project (3 Members)',
            highlights: ['Multiplayer System', 'Economic Simulation', 'National Level Competition — NSC 2026'],
            category: 'Game Development',
            features: [
                {
                    title: 'Core Mechanics',
                    items: [
                        '**Multiplayer Economy**: ระบบจำลองโลกการเงินเสมือนจริงที่รองรับผู้เล่นหลายคนในเวลาเดียวกัน',
                        '**System Architecture**: การออกแบบโครงสร้างโค้ดที่รองรับสเกลและการปรับปรุงในอนาคต',
                        '**Event System**: ระบบ Event-driven ที่จัดการสถานะของเกมได้อย่างแม่นยำ'
                    ]
                }
            ],
            installation: [],
            challengesAndSolutions: [
                {
                    problem: 'การออกแบบระบบเศรษฐกิจที่ซับซ้อนให้ทำงานได้ใน Multiplayer Real-time',
                    solution: 'ใช้ RemoteEvent และ RemoteFunction ของ Roblox ในการ Sync ข้อมูลระหว่าง Client-Server อย่างมีประสิทธิภาพ'
                }
            ]
        },
        {
            id: 'project-2',
            slug: 'heat-thieves-gamejamx',
            title: 'HEAT THIEVES',
            image: '/images/heatthieves.png',
            description: 'เกมแนวต่อสู้ Battleground ที่พัฒนาขึ้นภายในเวลาจำกัดเพียง 3 วันในงาน HamsterHub GameJamX',
            longDescription: 'โปรเจกต์นี้เกิดจากความท้าทายในการพัฒนาเกม "HEAT THIEVES" ภายใต้หัวข้อ "Lost Ship" หรือ "ร้อน" ภายใน 3 วัน ผมรับหน้าที่ Programmer หลัก โดยใช้ Roblox Studio ในการสร้างระบบต่อสู้ (Battleground) ผู้เล่นจะต้องใช้พลังความร้อนเพื่อต่อสู้และเอาชีวิตรอด โปรเจกต์นี้สอนให้ผมรู้จักการจัดลำดับความสำคัญ การตัดขอบเขตงาน และ Developer Mindset เพื่อให้งานเสร็จทันเวลา',
            techStack: ['Roblox Studio', 'Lua Script', 'Cursor AI'],
            tools: ['Roblox Studio', 'Cursor AI'],
            status: 'completed',
            repoUrl: 'https://github.com/Paphangkorn',
            demoUrl: '#',
            startDate: '2026-04-24',
            endDate: '2026-04-27',
            role: 'Programmer',
            customTimeline: 'April 2026 — GameJamX (3 Days)',
            team: 'Team Project (5 Members)',
            highlights: ['Time Management', 'Action Battleground', 'AI Assisted Development', 'HamsterHub GameJamX'],
            category: 'Game Development',
            features: [
                {
                    title: 'Gameplay',
                    items: [
                        '**Heat Combat System**: ระบบต่อสู้ที่ใช้พลังความร้อนเป็น Core Mechanic',
                        '**3-Day Sprint**: พัฒนาจาก 0 จนเป็นเกมที่เล่นได้ครบทุก Loop ภายใน 72 ชั่วโมง'
                    ]
                }
            ],
            installation: [],
            challengesAndSolutions: []
        },
        {
            id: 'project-3',
            slug: 'anime-royale',
            title: 'Anime Royale',
            image: '/images/anime-royale.png',
            description: 'เกมแนววางแผนป้องกันป้อมปราการสไตล์ Clash Royale สร้างด้วยตัวคนเดียว',
            longDescription: 'Anime Royale เป็นเกมที่พัฒนาขึ้นจากความชื่นชอบส่วนตัว โดยได้รับแรงบันดาลใจจาก Clash Royale ตัวเกมเน้นการวางแผนป้องกันป้อมและทำลายป้อมศัตรูภายใน 2 นาที โปรเจกต์นี้ผมได้นำความรู้ทุกอย่าง ทั้ง Game Concept, System Design, Game Feel (Animation, VFX/SFX) และการเขียนโค้ด Lua โดยมี Cursor AI ช่วยเสริม จนเกิดเป็นเกมที่สมบูรณ์และสนุกสนาน',
            techStack: ['Roblox Studio', 'Lua Script', 'Blender'],
            tools: ['Roblox Studio', 'Cursor AI', 'Blender'],
            status: 'completed',
            repoUrl: 'https://github.com/Paphangkorn',
            demoUrl: '#',
            startDate: '2026-01-01',
            role: 'Solo Developer',
            customTimeline: 'Personal Project — 2026',
            team: 'Solo',
            highlights: ['Game Design', 'Solo Developed', 'VFX / SFX Implementation', 'Clash Royale Inspired'],
            category: 'Game Development',
            features: [
                {
                    title: 'Features',
                    items: [
                        '**Card System**: ระบบ Card ที่ผู้เล่นเลือกใช้ตัวละครอนิเมะในการต่อสู้',
                        '**2-Minute Match**: การออกแบบ Pacing ของเกมที่กระตุ้นให้ตัดสินใจรวดเร็ว',
                        '**VFX & SFX**: ทำ Effect ภาพและเสียงด้วยตัวเองทั้งหมด'
                    ]
                }
            ],
            installation: [],
            challengesAndSolutions: []
        },
        {
            id: 'project-4',
            slug: 'escape-lab',
            title: 'Escape Lab',
            image: '/images/escape-lab.png',
            description: 'โปรเจกต์เกมแรกจากค่าย Roblox Bootcamp เน้นการออกแบบตรรกะและไขปริศนา',
            longDescription: 'นี่คือจุดเริ่มต้นแรกของผมในการพัฒนาเกมอย่างจริงจังใน Roblox Bootcamp ภายใต้ระยะเวลา 1 เดือน ผมได้ออกแบบเกม "Escape Lab" ซึ่งเป็นเกมแนวสยองขวัญที่ผู้เล่นต้องซ่อนตัวจากผีและไขปริศนาเพื่อหาทางออก เป็นการเปิดโลกทัศน์เกี่ยวกับการวิเคราะห์เกม การวาง Logic และการจัดเงื่อนไขของตัวแปรต่างๆ อย่างเป็นระบบ',
            techStack: ['Roblox Studio', 'Lua Script'],
            tools: ['Roblox Studio'],
            status: 'completed',
            repoUrl: 'https://github.com/Paphangkorn',
            demoUrl: '#',
            startDate: '2025-06-01',
            endDate: '2025-07-01',
            role: 'Developer',
            customTimeline: 'Roblox Bootcamp — June 2025 (1 Month)',
            team: 'Solo',
            highlights: ['First Full Game', 'Puzzle Mechanics', 'Horror Design', 'Logical Conditions'],
            category: 'Game Development',
            features: [
                {
                    title: 'Mechanics',
                    items: [
                        '**Puzzle System**: ระบบปริศนาที่ต้องแก้ทีละ Step เพื่อหาทางออก',
                        '**Ghost AI**: ออกแบบ AI ของผีที่ตามล่าผู้เล่นอย่างมีรูปแบบ'
                    ]
                }
            ],
            installation: [],
            challengesAndSolutions: []
        }
    ],

    experiences: [
        {
            id: 'exp-1',
            company: 'HamsterHub',
            position: 'ผู้ช่วยสอน (Teaching Assistant)',
            description: 'เป็นผู้ช่วยสอนในกิจกรรม AI Camp สร้างผลงานภายใน 3 วัน (Roblox, Unity, Web app) แนะนำการใช้ AI (Cursor, MCP Server) แก่ผู้เข้าร่วม และแก้ปัญหาโค้ดที่เกิดจาก AI Generate.',
            responsibilities: [
                'แนะนำการใช้งาน Cursor AI และ MCP Server ให้กับผู้เข้าร่วม',
                'ช่วย Debug โค้ดที่เกิดจาก AI Generate แบบ Real-time',
                'Mentor ผู้เข้าร่วมในการออกแบบ Game Logic'
            ],
            skills: ['AI Prompting', 'Debugging AI Code', 'Mentorship', 'Roblox Studio', 'Cursor AI'],
            startDate: '2026-01-01',
            isOngoing: true,
            location: 'Remote',
            type: 'freelance',
            logo: '/images/profile-microsoft.webp',
            galleryImages: [
                '/experience/FotoSC2.webp',
                '/experience/FotoSC3.webp',
                '/experience/FotoSC4.webp',
                '/experience/FotoSC5.webp',
            ],
        },
        {
            id: 'exp-2',
            company: 'GamePee Camp',
            position: 'ผู้ช่วยสอน (Teaching Assistant)',
            description: 'สอนการนำ AI มาใช้ในการ Design ศัตรูในเกมผี (Roblox) ภายในเวลา 3 วัน แนะนำการออกแบบเงื่อนไข AI ของผี เพื่อให้ผู้เข้าร่วมเข้าใจหลักการดักหน้าและตามล่าผู้เล่น',
            responsibilities: [
                'ออกแบบ NPC AI Behavior สำหรับ Ghost ในเกม',
                'สอนหลักการ Pathfinding และการดักหน้าผู้เล่น',
                'Mentor Roblox Scripting'
            ],
            skills: ['AI NPC Design', 'Roblox Scripting', 'Mentorship', 'Game AI'],
            startDate: '2026-01-01',
            isOngoing: false,
            location: 'Remote',
            type: 'freelance',
        },
    ],

    education: [
        {
            id: 'edu-1',
            institution: 'มหาวิทยาลัยมหิดล',
            degree: 'วิศวกรรมศาสตรบัณฑิต',
            major: 'วิศวกรรมคอมพิวเตอร์',
            startDate: '2025-06-01',
            isOngoing: true,
            gpa: undefined,
            activities: ['NSC 2026', 'Software Development Club'],
            achievements: ['National Software Contest 2026 — เข้ารอบระดับภูมิภาค'],
        },
        {
            id: 'edu-2',
            institution: 'โรงเรียนพนัสพิทยาคาร',
            degree: 'มัธยมศึกษาตอนปลาย',
            major: 'สายวิทย์-คณิต',
            startDate: '2019-05-01',
            endDate: '2025-03-01',
            isOngoing: false,
            gpa: '3.59',
            activities: ['Roblox Bootcamp by HamsterHub', 'GameJamX'],
            achievements: ['GPA 3.59', 'Roblox Bootcamp Certificate', 'HamsterHub GameJamX Participant'],
        }
    ],

    achievements: [
        {
            id: 'ach-1',
            title: 'AI Innovation Challenge',
            issuer: 'AI Innovation Challenge',
            date: '2024-01-01',
            description: 'ใบประกาศนียบัตร AI Innovation Challenge',
            image: '/certificate/AI Innovation Challenge.pdf',
            category: 'certification',
        },
        {
            id: 'ach-2',
            title: 'Algorithm & Data Structures with Python',
            issuer: 'Online Course',
            date: '2024-01-01',
            description: 'ใบประกาศนียบัตร Algorithm & Data Structures with Python',
            image: '/certificate/Algorithm & Data Structures with Python.pdf',
            category: 'certification',
        },
        {
            id: 'ach-3',
            title: 'AWS Academy Graduate — Introduction to Cloud',
            issuer: 'Amazon Web Services Academy',
            date: '2024-01-01',
            description: 'AWS Academy Graduate - AWS Academy Introduction to Cloud 1',
            image: '/certificate/AWS Academy Graduate - AWS Academy Introduction to Cloud 1.pdf',
            category: 'certification',
        },
        {
            id: 'ach-4',
            title: 'Back-End dengan JavaScript',
            issuer: 'Dicoding',
            date: '2024-01-01',
            description: 'ใบประกาศนียบัตร Back-End dengan JavaScript จาก Dicoding',
            image: '/certificate/Back-End dengan JavaScript.pdf',
            category: 'certification',
        },
        {
            id: 'ach-5',
            title: 'Cloud Practitioner Essentials',
            issuer: 'Dicoding / AWS',
            date: '2024-01-01',
            description: 'ใบประกาศนียบัตร Cloud Practitioner Essentials',
            image: '/certificate/Cloud Practitioner Essentials.pdf',
            category: 'certification',
        },
        {
            id: 'ach-6',
            title: 'Dasar Artificial Intelligence',
            issuer: 'Dicoding',
            date: '2024-01-01',
            description: 'ใบประกาศนียบัตร Dasar Artificial Intelligence',
            image: '/certificate/Dasar Artificial Intelligence.pdf',
            category: 'certification',
        },
        {
            id: 'ach-7',
            title: 'Pemrograman dengan Python',
            issuer: 'Dicoding',
            date: '2024-01-01',
            description: 'ใบประกาศนียบัตร Pemrograman dengan Python',
            image: '/certificate/Pemrograman dengan Python.pdf',
            category: 'certification',
        },
        {
            id: 'ach-8',
            title: 'Machine Learning Modeling (Beginner)',
            issuer: 'Dicoding',
            date: '2024-01-01',
            description: 'ใบประกาศนียบัตร Machine Learning Modeling สำหรับ Beginner',
            image: '/certificate/Machine Learning Modeling (Beginner).pdf',
            category: 'certification',
        },
        {
            id: 'ach-9',
            title: 'Generative AI',
            issuer: 'Dicoding',
            date: '2024-01-01',
            description: 'ใบประกาศนียบัตร Generative AI',
            image: '/certificate/Generative AI.pdf',
            category: 'certification',
        },
        {
            id: 'ach-10',
            title: 'Practical AI for Productivity',
            issuer: 'Online Course',
            date: '2024-01-01',
            description: 'ใบประกาศนียบัตร Practical AI for Productivity',
            image: '/certificate/Practical AI for Productivity.pdf',
            category: 'certification',
        },
        {
            id: 'ach-11',
            title: 'NSC 2026 — เข้ารอบระดับภูมิภาค',
            issuer: 'NECTEC / National Software Contest',
            date: '2026-03-01',
            description: 'ผลงาน Bronopoly ได้เข้ารอบระดับภูมิภาคในการแข่งขัน National Software Contest 2026',
            category: 'award',
            tags: ['NSC 2026', 'Game Development', 'Roblox']
        }
    ],

    techStack: [
        { name: 'Lua Script', icon: 'SiLua', category: 'language' },
        { name: 'Python', icon: 'SiPython', category: 'language' },
        { name: 'C++', icon: 'SiCplusplus', category: 'language' },
        { name: 'TypeScript', icon: 'SiTypescript', category: 'language' },
        { name: 'JavaScript', icon: 'SiJavascript', category: 'language' },
        { name: 'Roblox Studio', icon: 'SiRoblox', category: 'tool' },
        { name: 'Next.js', icon: 'SiNextdotjs', category: 'framework' },
        { name: 'React', icon: 'SiReact', category: 'framework' },
        { name: 'Node.js', icon: 'SiNodedotjs', category: 'framework' },
        { name: 'Blender', icon: 'SiBlender', category: 'tool' },
        { name: 'Cursor AI', icon: 'SiOpenai', category: 'tool' },
        { name: 'Git', icon: 'SiGit', category: 'tool' },
    ],

    hardSkills: [
        { name: 'Lua Script', level: 'expert', category: 'software' },
        { name: 'Roblox Studio', level: 'expert', category: 'software' },
        { name: 'Game Design', level: 'advanced', category: 'other' },
        { name: 'System Design', level: 'advanced', category: 'other' },
        { name: 'Python', level: 'intermediate', category: 'software' },
        { name: 'C++', level: 'intermediate', category: 'software' },
        { name: 'AI Prompting', level: 'advanced', category: 'ai' },
        { name: 'Blender', level: 'intermediate', category: 'other' },
        { name: 'Next.js', level: 'intermediate', category: 'frontend' },
    ],

    softSkills: [
        { name: 'Problem Solving', description: 'คิดวิเคราะห์และแก้ปัญหาอย่างเป็นระบบ' },
        { name: 'Team Leadership', description: 'ประสบการณ์นำทีม 3 คนในโครงการระดับชาติ NSC 2026' },
        { name: 'Time Management', description: 'พัฒนาเกมให้เสร็จสมบูรณ์ภายใน 3 วันในงาน GameJam' },
        { name: 'Mentorship', description: 'ถ่ายทอดความรู้ด้าน AI และ Game Dev ให้กับผู้เข้าร่วมค่าย' },
        { name: 'Adaptability', description: 'เรียนรู้เทคโนโลยีใหม่ๆ ได้อย่างรวดเร็ว' },
    ],

    tools: [
        { name: 'Cursor AI', icon: 'SiOpenai', category: 'ide' },
        { name: 'VS Code', icon: 'SiVisualstudiocode', category: 'ide' },
        { name: 'Roblox Studio', icon: 'SiRoblox', category: 'ide' },
        { name: 'Blender', icon: 'SiBlender', category: 'design' },
        { name: 'GitHub', icon: 'SiGithub', category: 'devops' },
        { name: 'Figma', icon: 'SiFigma', category: 'design' },
    ],

    faqs: [
        {
            question: 'คุณเชี่ยวชาญด้านอะไรมากที่สุด?',
            answer: 'ผมเชี่ยวชาญด้าน Game Development บนแพลตฟอร์ม Roblox โดยเฉพาะการเขียน Lua Script, System Design และการออกแบบ Game Mechanics ที่ซับซ้อน รวมถึงการนำ AI เข้ามาช่วยพัฒนา',
        },
        {
            question: 'ผลงานที่ภูมิใจมากที่สุดคือ?',
            answer: 'Bronopoly ครับ เพราะเป็นโปรเจกต์ที่ผมได้เป็น Team Leader ตั้งแต่ต้นจนจบ ต้องออกแบบระบบ Multiplayer Economy ที่ซับซ้อน จนสามารถเข้ารอบระดับภูมิภาคใน NSC 2026 ได้',
        },
        {
            question: 'ติดต่อได้อย่างไร?',
            answer: 'ส่ง Email มาที่ Wi.koo25561@gmail.com หรือ DM ทาง Instagram @ppk.tnk ได้เลยครับ ผมตอบภายใน 24 ชั่วโมง',
        },
    ],

    blogs: [],
    gallery: [
        { id: 'gal-1', title: 'Microsoft Visit', description: 'ถ่ายรูปที่ Microsoft Office', date: '2026-01-01', type: 'image', url: '/experience/Foto Utama.webp', category: 'experience' },
        { id: 'gal-2', title: 'City View', description: 'วิวเมืองยามค่ำคืน', date: '2026-01-01', type: 'image', url: '/experience/FotoSC1.webp', category: 'experience' },
        { id: 'gal-3', title: 'Event 2', description: 'รูปกิจกรรม', date: '2026-01-01', type: 'image', url: '/experience/FotoSC2.webp', category: 'experience' },
        { id: 'gal-4', title: 'Event 3', description: 'รูปกิจกรรม', date: '2026-01-01', type: 'image', url: '/experience/FotoSC3.webp', category: 'experience' },
        { id: 'gal-5', title: 'Event 4', description: 'รูปกิจกรรม', date: '2026-01-01', type: 'image', url: '/experience/FotoSC4.webp', category: 'experience' },
        { id: 'gal-6', title: 'Event 5', description: 'รูปกิจกรรม', date: '2026-01-01', type: 'image', url: '/experience/FotoSC5.webp', category: 'experience' },
    ],
};
