import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'ปภังกร ฐานะกาญจน์ (ออม)',
        title: 'Game Developer | Roblox & Lua',
        subtitle: 'นักพัฒนาเกมที่สนใจ Roblox, Lua และการออกแบบระบบเกม',
        bio: 'ผมเริ่มต้นจากความสงสัยว่าเกมทำงานอย่างไร ก่อนจะได้ลองสร้างเกมด้วย Roblox Studio และ Lua ตั้งแต่นั้นมาผมสนุกกับการเปลี่ยนไอเดียให้เป็นเกมที่เล่นได้ ตั้งแต่การวาง Game Logic และออกแบบระบบ ไปจนถึงการทำงานร่วมกับทีม ผลงาน Bronopoly พาทีมผ่านเข้ารอบระดับภูมิภาค NSC 2026 และผมยังได้ร่วมพัฒนาเกมใน HamsterHub GameJamX รวมถึงถ่ายทอดความรู้ในค่ายสอนทำเกม',
        avatar: '/images/profile.png',
        location: 'Thailand',
        email: 'Wi.koo25561@gmail.com',
        phone: '0986627263',
        resumeUrl: '/resume.pdf',
        website: 'https://github.com/Paphangkorn',
        languages: [
            { name: 'Thai', level: 'Native' },
            { name: 'English', level: 'Professional' },
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
            description: 'เกม Multiplayer บน Roblox ที่ชวนผู้เล่นเรียนรู้เรื่องเศรษฐศาสตร์ ผ่านเข้ารอบระดับภูมิภาค NSC 2026',
            longDescription: 'Bronopoly เป็นเกม Multiplayer ที่พัฒนาสำหรับการแข่งขัน National Software Contest (NSC) 2026 เพื่อเล่าแนวคิดด้านเศรษฐศาสตร์ผ่านการเล่นบน Roblox ผมทำหน้าที่ Team Leader และ Programmer ร่วมกับสมาชิกอีก 2 คน ดูแลการวาง System Design และพัฒนาระบบเกม ผลงานผ่านเข้ารอบระดับภูมิภาคของ NSC 2026',
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
            highlights: ['Roblox Multiplayer Game', 'Economics Learning', 'NSC 2026 Regional Finalist'],
            category: 'Game Development',
            features: [
                {
                    title: 'Core Mechanics',
                    items: [
                        '**Multiplayer Gameplay**: ออกแบบประสบการณ์การเล่นร่วมกันบน Roblox',
                        '**Economics Through Play**: ใช้สถานการณ์ในเกมเป็นสื่อเรียนรู้แนวคิดเศรษฐศาสตร์',
                        '**Team Leadership**: ประสานงานทีม 3 คนในบทบาท Team Leader และ Programmer'
                    ]
                }
            ],
            installation: [],
            challengesAndSolutions: [
                {
                    problem: 'การออกแบบเกม Multiplayer ที่สื่อแนวคิดเศรษฐศาสตร์ให้เข้าใจได้ผ่านการเล่น',
                    solution: 'ร่วมกับทีมวาง System Design และพัฒนาระบบเกมบน Roblox โดยคำนึงถึงประสบการณ์ของผู้เล่น'
                }
            ]
        },
        {
            id: 'project-2',
            slug: 'heat-thieves-gamejamx',
            title: 'HEAT THIEVES',
            image: '/images/heatthieves.png',
            description: 'เกม Battleground ที่ร่วมพัฒนากับทีมภายใน 3 วันในงาน HamsterHub GameJamX',
            longDescription: 'HEAT THIEVES เป็นเกมที่ทีมพัฒนาภายในเวลา 3 วันใน HamsterHub GameJamX ภายใต้โจทย์ “Lost Ship” ผมรับหน้าที่ Programmer ใช้ Roblox Studio และ Cursor AI ที่เชื่อมต่อ MCP Server ช่วยพัฒนาและแก้ปัญหาโค้ด พร้อมทำงานร่วมกับทีมเพื่อส่งมอบเกมตามเวลาที่กำหนด',
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
            highlights: ['3-Day Game Jam', 'Roblox Battleground', 'Team Programming', 'HamsterHub GameJamX'],
            category: 'Game Development',
            features: [
                {
                    title: 'Gameplay',
                    items: [
                        '**Rapid Prototyping**: วางแผนและพัฒนาเกมร่วมกับทีมภายในเวลาจำกัด',
                        '**AI-Assisted Workflow**: ใช้ Cursor AI และ MCP Server เป็นเครื่องมือช่วยพัฒนาและ debug'
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
            description: 'เกมวางแผนสไตล์ Clash Royale ที่พัฒนาด้วยตัวคนเดียว ตั้งแต่ Game Concept ถึงระบบเกม',
            longDescription: 'Anime Royale เป็นโปรเจกต์เกมที่ได้รับแรงบันดาลใจจาก Clash Royale และพัฒนาขึ้นระหว่างเข้าร่วม HamsterHub Roblox Bootcamp ผมดูแลการพัฒนาเกมด้วยตัวเอง ตั้งแต่ Game Concept และ System Design ไปจนถึง Game Feel, Animation, VFX/SFX และการเขียน Lua โดยใช้ Cursor AI และ MCP Server เป็นเครื่องมือช่วยทำงาน',
            techStack: ['Roblox Studio', 'Lua Script', 'Blender'],
            tools: ['Roblox Studio', 'Cursor AI', 'Blender'],
            status: 'completed',
            repoUrl: 'https://github.com/Paphangkorn',
            demoUrl: '#',
            startDate: '2026-01-01',
            role: 'Solo Developer',
            customTimeline: 'Personal Project — 2026',
            team: 'Solo',
            highlights: ['Solo Game Development', 'Game Concept & System Design', 'Animation / VFX / SFX', 'Clash Royale Inspired'],
            category: 'Game Development',
            features: [
                {
                    title: 'Features',
                    items: [
                        '**Game Concept**: นำแรงบันดาลใจจาก Clash Royale มาพัฒนาเป็นเกมของตัวเอง',
                        '**System Design**: วางโครงสร้างและกติกาหลักของเกม',
                        '**Game Feel**: ทดลองใช้ Animation, VFX และ SFX เพื่อเพิ่มอารมณ์ให้เกม'
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
            description: 'เกมแรกที่พัฒนาระหว่าง Roblox Bootcamp ฝึกวาง Game Logic และออกแบบประสบการณ์ผู้เล่น',
            longDescription: 'Escape Lab เป็นหนึ่งในเกมแรกที่ผมได้ลงมือพัฒนาระหว่าง Roblox Bootcamp ใช้เวลาทำโปรเจกต์ประมาณ 1 เดือน ทำให้ได้ฝึกใช้ Roblox Studio และ Lua พร้อมเรียนรู้การแปลงแนวคิดเกมให้เป็นระบบและเงื่อนไขที่เล่นได้จริง',
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
            highlights: ['Early Roblox Project', 'Lua Scripting', 'Game Logic', 'Roblox Bootcamp'],
            category: 'Game Development',
            features: [
                {
                    title: 'Mechanics',
                    items: [
                        '**Game Logic**: ฝึกเปลี่ยนแนวคิดเกมให้เป็นลำดับการทำงาน',
                        '**Roblox Studio**: เรียนรู้พื้นฐานการสร้างและพัฒนาเกมบน Roblox'
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
            description: 'ช่วยดูแลผู้เข้าร่วม AI Camp ในการสร้างผลงานภายใน 3 วัน ทั้งเกม Roblox/Unity และ Web app พร้อมแนะนำเครื่องมือ AI และช่วย debug โค้ด',
            responsibilities: [
                'แนะนำการใช้ Cursor AI และ MCP Server ระหว่างทำโปรเจกต์',
                'ช่วยผู้เข้าร่วมตรวจสอบและแก้ปัญหาโค้ดที่สร้างด้วย AI',
                'ให้คำแนะนำเรื่อง Game Logic และการพัฒนาโปรเจกต์ให้เสร็จภายในเวลา'
            ],
            skills: ['AI Prompting', 'Debugging AI Code', 'Mentorship', 'Roblox Studio', 'Cursor AI'],
            startDate: '2026-01-01',
            isOngoing: false,
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
            description: 'เป็นผู้ช่วยสอนค่าย GamePee Camp แนะนำการออกแบบ AI behavior ให้ศัตรูในเกม Roblox ภายในกิจกรรม 3 วัน',
            responsibilities: [
                'แนะนำแนวคิดการออกแบบพฤติกรรม NPC ศัตรู',
                'สาธิตการใช้ AI tools และ MCP Server ในเวิร์กโฟลว์พัฒนาเกม',
                'ให้คำแนะนำ Roblox Scripting แก่ผู้เข้าร่วม'
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
            activities: ['NSC 2026'],
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
        { name: 'Blender', icon: 'SiBlender', category: 'tool' },
        { name: 'Roblox Studio', icon: 'SiRoblox', category: 'tool' },
        { name: 'Cursor AI', icon: 'SiOpenai', category: 'tool' },
    ],

    hardSkills: [
        { name: 'Lua Script', level: 'expert', category: 'software' },
        { name: 'Roblox Studio', level: 'expert', category: 'software' },
        { name: 'Game Development', level: 'advanced', category: 'other' },
        { name: 'Game System Design', level: 'advanced', category: 'other' },
        { name: 'Python', level: 'intermediate', category: 'software' },
        { name: 'C++', level: 'intermediate', category: 'software' },
        { name: 'Game Logic', level: 'advanced', category: 'software' },
        { name: 'Class Diagram', level: 'intermediate', category: 'other' },
        { name: 'Animation & VFX', level: 'intermediate', category: 'other' },
        { name: 'Blender', level: 'intermediate', category: 'other' },
    ],

    softSkills: [
        { name: 'Team Leadership', description: 'รับบท Team Leader ในทีม 3 คนของโปรเจกต์ Bronopoly สำหรับ NSC 2026' },
        { name: 'Teamwork', description: 'ทำงานร่วมกับทีมเพื่อพัฒนาเกมให้ทันกำหนดใน GameJamX' },
        { name: 'Time Management', description: 'จัดลำดับงานระหว่างการพัฒนาเกมภายในเวลา 3 วัน' },
        { name: 'Mentorship', description: 'ช่วยแนะนำการทำเกมและแก้ปัญหาโค้ดให้ผู้เข้าร่วมค่าย' },
        { name: 'Problem Solving', description: 'วิเคราะห์และแก้ปัญหาที่เกิดขึ้นระหว่างพัฒนาและทดสอบเกม' },
    ],

    tools: [
        { name: 'Cursor AI', icon: 'SiOpenai', category: 'ide' },
        { name: 'VS Code', icon: 'SiVisualstudiocode', category: 'ide' },
        { name: 'Roblox Studio', icon: 'SiRoblox', category: 'ide' },
        { name: 'Blender', icon: 'SiBlender', category: 'design' },
    ],

    faqs: [
        {
            question: 'คุณเชี่ยวชาญด้านอะไรมากที่สุด?',
            answer: 'ผมสนใจ Game Development บน Roblox โดยใช้ Roblox Studio และ Lua พัฒนา Game Logic และออกแบบระบบเกม รวมถึงใช้ Blender ทำงานด้าน Animation และใช้ AI tools ช่วยในเวิร์กโฟลว์',
        },
        {
            question: 'ผลงานที่ภูมิใจมากที่สุดคือ?',
            answer: 'Bronopoly ครับ ผมทำหน้าที่ Team Leader และ Programmer ในทีม 3 คน พัฒนาเกม Multiplayer บน Roblox เพื่อสื่อแนวคิดเศรษฐศาสตร์ และทีมผ่านเข้ารอบระดับภูมิภาค NSC 2026',
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
