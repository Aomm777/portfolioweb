import { PortfolioData } from '@/types';

export const ROBLOX_PROFILE_URL = 'https://www.roblox.com/users/999846488/profile';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'ปภังกร ฐานะกาญจน์ (ออม)',
        title: 'Game Developer | Roblox & Lua',
        subtitle: 'นักพัฒนาเกมที่สนใจ Roblox, Lua และการออกแบบระบบเกม',
        bio: 'ผมเริ่มต้นจากความสงสัยว่าเกมทำงานอย่างไร ก่อนจะได้ลองสร้างเกมด้วย Roblox Studio และ Lua ตั้งแต่นั้นมาผมสนุกกับการเปลี่ยนไอเดียให้เป็นเกมที่เล่นได้ ตั้งแต่การวาง Game Logic และออกแบบระบบ ไปจนถึงการทำงานร่วมกับทีม ผลงาน Bronopoly พาทีมผ่านเข้ารอบระดับภูมิภาค NSC 2026 และผมยังได้ร่วมพัฒนาเกมใน HamsterHub GameJamX รวมถึงถ่ายทอดความรู้ในค่ายสอนทำเกม',
        avatar: '/images/profile-cutout.png',
        location: 'Thailand',
        email: 'Wi.koo25561@gmail.com',
        phone: '0986627263',
        website: ROBLOX_PROFILE_URL,
        languages: [
            { name: 'Thai', level: 'Native' },
            { name: 'English', level: 'Professional' },
        ],
        socialLinks: [
            {
                platform: 'Roblox',
                url: ROBLOX_PROFILE_URL,
                icon: 'roblox',
                username: '999846488',
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
            },
            {
                platform: 'Discord',
                url: 'https://discord.com/users/709636597779398687',
                icon: 'discord',
            }
        ],
    },

    projects: [
        {
            id: 'project-1',
            slug: 'bronopoly-nsc2026',
            title: 'Bronopoly',
            image: '/images/bronopoly.png',
            description: 'เกม Multiplayer บน Roblox ที่ชวนผู้เล่นเรียนรู้เรื่องเศรษฐศาสตร์ ผ่านเข้ารอบระดับภูมิภาค NSC 2026 และยังอยู่ระหว่างพัฒนา',
            longDescription: 'Bronopoly เป็นเกม Multiplayer ที่ยังอยู่ระหว่างพัฒนาสำหรับการแข่งขัน National Software Contest (NSC) 2026 เพื่อเล่าแนวคิดด้านเศรษฐศาสตร์ผ่านการเล่นบน Roblox ผมทำหน้าที่ Team Leader และ Programmer ร่วมกับสมาชิกอีก 2 คน ดูแลการวาง System Design และพัฒนาระบบเกม ผลงานผ่านเข้ารอบระดับภูมิภาคของ NSC 2026',
            techStack: ['Roblox Studio', 'Lua Script', 'System Design'],
            tools: ['VS Code', 'Roblox Studio', 'Cursor AI'],
            status: 'ongoing',
            demoUrl: '#',
            startDate: '2025-01-01',
            role: 'Team Leader & Programmer',
            customTimeline: 'NSC 2026 — เข้ารอบระดับภูมิภาค • อยู่ระหว่างพัฒนา',
            team: 'Team Project (3 Members)',
            highlights: ['Roblox Multiplayer Game', 'Economics Learning', 'NSC 2026 Regional Finalist', 'อยู่ระหว่างพัฒนา'],
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
            ],
            galleryImages: [
                '/project/bronopoly1.png',
                '/project/bronopoly2.png',
                '/project/bronopoly3.png',
            ]
        },
        {
            id: 'project-2',
            slug: 'heat-thieves-gamejamx',
            title: 'HEAT THIEVES',
            image: '/images/heatthieves.png',
            videoUrl: '/videos/heat-thieves.mp4',
            description: 'เกม Battleground ที่ร่วมพัฒนากับทีมภายใน 3 วันในงาน HamsterHub GameJamX',
            longDescription: 'HEAT THIEVES เป็นเกมที่ทีมพัฒนาภายในเวลา 3 วันใน HamsterHub GameJamX ภายใต้โจทย์ “Lost Ship” ผมรับหน้าที่ Programmer ใช้ Roblox Studio และ Cursor AI ที่เชื่อมต่อ MCP Server ช่วยพัฒนาและแก้ปัญหาโค้ด พร้อมทำงานร่วมกับทีมเพื่อส่งมอบเกมตามเวลาที่กำหนด',
            techStack: ['Roblox Studio', 'Lua Script', 'Cursor AI'],
            tools: ['Roblox Studio', 'Cursor AI'],
            status: 'completed',
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
            challengesAndSolutions: [],
            galleryImages: ['/images/heat-thieves-gameplay.jpg']
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
            challengesAndSolutions: [],
            galleryImages: ['/project/animeroyale1.png']
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
            challengesAndSolutions: [],
            galleryImages: ['/project/escapelab1.png']
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
            timelineImage: '/experience/ai-camp-timeline.png',
            galleryImages: [
                '/experience/ai-camp-project-setup.png',
                '/experience/ai-camp-gameplay.png',
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
            timelineImage: '/experience/gamepee-camp-timeline.png',
            galleryImages: [
                '/experience/gamepee-camp-detail-1.png',
                '/experience/gamepee-camp-detail-2.png',
            ],
        },
    ],

    education: [
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
            title: 'MikroTik Certified Network Associate (MTCNA)',
            issuer: 'MikroTik',
            description: 'เกียรติบัตรรับรองความรู้ด้านระบบเครือข่าย MikroTik ระดับ MTCNA',
            image: '/certificate/mikrotik-mtcna.png',
            category: 'certification',
        },
        {
            id: 'ach-2',
            title: 'HamsterHub GameJamX',
            issuer: 'HamsterHub',
            date: '2026-04-27',
            description: 'เกียรติบัตรเข้าร่วมกิจกรรม HamsterHub GameJamX ระหว่างวันที่ 24–27 เมษายน 2026',
            image: '/certificate/hamsterhub-gamejamx.png',
            category: 'certification',
        },
        {
            id: 'ach-3',
            title: 'Roblox Boot Camp',
            issuer: 'HamsterHub',
            date: '2025-06-01',
            description: 'เกียรติบัตรเข้าร่วม Roblox Boot Camp',
            image: '/certificate/roblox-boot-camp.png',
            category: 'certification',
        },
        {
            id: 'ach-4',
            title: 'NSC Software Project',
            issuer: 'National Software Contest',
            date: '2026-03-01',
            description: 'เกียรติบัตรเข้าร่วมการแข่งขัน NSC Software Project',
            image: '/certificate/nsc-software-project.png',
            category: 'certification',
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
        { id: 'gal-1', title: 'Bronopoly — Exhibition 1', description: 'จัดแสดงผลงาน Bronopoly', date: '2026-01-01', type: 'image', url: '/experience/bronopoly-exhibition.png', category: 'Bronopoly' },
        { id: 'gal-2', title: 'Bronopoly — Exhibition 2', description: 'จัดแสดงผลงาน Bronopoly', date: '2026-01-01', type: 'image', url: '/experience/bronopoly-team-leadership.png', category: 'Bronopoly' },
        { id: 'gal-3', title: 'GamePee Camp 1', description: 'บรรยากาศค่าย GamePee Camp', date: '2026-01-01', type: 'image', url: '/experience/gamepee-camp-1.png', category: 'GamePee Camp' },
        { id: 'gal-4', title: 'GamePee Camp 2', description: 'บรรยากาศค่าย GamePee Camp', date: '2026-01-01', type: 'image', url: '/experience/gamepee-camp-2.png', category: 'GamePee Camp' },
        { id: 'gal-5', title: 'GamePee Camp 3', description: 'บรรยากาศค่าย GamePee Camp', date: '2026-01-01', type: 'image', url: '/experience/gamepee-camp-3.png', category: 'GamePee Camp' },
        { id: 'gal-6', title: 'Bronopoly — Exhibition 3', description: 'จัดแสดงผลงาน Bronopoly', date: '2026-01-01', type: 'image', url: '/experience/hamsterhub-showcase.png', category: 'Bronopoly' },
        { id: 'gal-7', title: 'Portrait', description: 'รูปของผม', date: '2026-01-01', type: 'image', url: '/images/profile.png', category: 'Me' },
    ],
};

const englishProjectCopy: Record<string, Partial<PortfolioData['projects'][number]>> = {
    'project-1': {
        description: 'An in-progress Roblox multiplayer game that introduces players to economics; selected for the regional round of NSC 2026.',
        longDescription: 'Bronopoly is an in-progress multiplayer game for the National Software Contest (NSC) 2026, using Roblox gameplay to introduce economic concepts. I serve as team leader and programmer on a three-person team, helping shape the system design and build the game. Our project advanced to the regional round of NSC 2026.',
        customTimeline: 'NSC 2026 — Regional Finalist • In Development',
        highlights: ['Roblox Multiplayer Game', 'Economics Learning', 'NSC 2026 Regional Finalist', 'In Development'],
        features: [{
            title: 'Core Mechanics',
            items: [
                '**Multiplayer Gameplay**: Designed a shared Roblox experience for players.',
                '**Economics Through Play**: Used in-game situations to introduce economic concepts.',
                '**Team Leadership**: Coordinated a three-person team as team leader and programmer.'
            ]
        }],
        challengesAndSolutions: [{
            problem: 'Designing a multiplayer game that makes economic concepts understandable through play.',
            solution: 'Worked with the team on system design and Roblox gameplay systems, with the player experience in mind.'
        }]
    },
    'project-2': {
        description: 'A team-built Roblox battleground game created in three days for HamsterHub GameJamX.',
        longDescription: 'HEAT THIEVES was developed by a team in three days during HamsterHub GameJamX, based on the theme “Lost Ship.” I worked as a programmer, using Roblox Studio and Cursor AI connected to an MCP server to build features and debug code while collaborating with the team to finish on time.',
        customTimeline: 'April 2026 — GameJamX (3 Days)',
        features: [{
            title: 'Gameplay',
            items: [
                '**Rapid Prototyping**: Planned and built a game with the team under a tight deadline.',
                '**AI-Assisted Workflow**: Used Cursor AI and an MCP server to support development and debugging.'
            ]
        }]
    },
    'project-3': {
        description: 'A solo strategy game inspired by Clash Royale, developed from the initial concept through its game systems.',
        longDescription: 'Anime Royale is a game inspired by Clash Royale that I developed during the HamsterHub Roblox Bootcamp. I handled the project independently, from the game concept and system design to game feel, animation, VFX/SFX, and Lua scripting, using Cursor AI and an MCP server as development tools.',
        customTimeline: 'Personal Project — 2026',
        features: [{
            title: 'Features',
            items: [
                '**Game Concept**: Built an original game inspired by Clash Royale.',
                '**System Design**: Defined the game structure and core rules.',
                '**Game Feel**: Used animation, VFX, and SFX to make gameplay more engaging.'
            ]
        }]
    },
    'project-4': {
        description: 'An early Roblox Bootcamp project focused on practicing game logic and player experience design.',
        longDescription: 'Escape Lab was one of the first games I developed during Roblox Bootcamp. Over approximately one month, I practiced using Roblox Studio and Lua and learned to turn a game concept into playable systems and rules.',
        customTimeline: 'Roblox Bootcamp — June 2025 (1 Month)',
        features: [{
            title: 'Mechanics',
            items: [
                '**Game Logic**: Practiced turning game ideas into clear sequences of behavior.',
                '**Roblox Studio**: Learned the fundamentals of building and developing Roblox games.'
            ]
        }]
    }
};

const englishExperienceCopy: Record<string, Partial<PortfolioData['experiences'][number]>> = {
    'exp-1': {
        position: 'Teaching Assistant',
        description: 'Supported participants in an AI Camp as they built projects in three days, including Roblox and Unity games and web apps. Introduced AI tools and helped debug code.',
        responsibilities: [
            'Introduced Cursor AI and MCP servers as part of the project workflow.',
            'Helped participants review and debug AI-generated code.',
            'Advised on game logic and planning work to meet the camp deadline.'
        ]
    },
    'exp-2': {
        position: 'Teaching Assistant',
        description: 'Assisted at GamePee Camp by introducing participants to enemy AI behavior design for a Roblox game during a three-day program.',
        responsibilities: [
            'Introduced concepts for designing enemy NPC behavior.',
            'Demonstrated AI tools and MCP servers in a game development workflow.',
            'Advised participants on Roblox scripting.'
        ]
    }
};

const englishEducationCopy: Record<string, Partial<PortfolioData['education'][number]>> = {
    'edu-2': {
        institution: 'Phanatpittayakarn School',
        degree: 'High School Diploma',
        major: 'Science and Mathematics',
        achievements: ['GPA 3.59', 'Roblox Bootcamp Certificate', 'HamsterHub GameJamX Participant']
    }
};

const englishAchievementDescriptions: Record<string, { title?: string; description: string }> = {
    'ach-1': {
        title: 'MikroTik Certified Network Associate (MTCNA)',
        description: 'MikroTik certification recognizing networking knowledge at the MTCNA level.'
    },
    'ach-2': {
        title: 'HamsterHub GameJamX',
        description: 'Certificate of participation in HamsterHub GameJamX, held April 24–27, 2026.'
    },
    'ach-3': {
        title: 'Roblox Boot Camp',
        description: 'Certificate of participation in the Roblox Boot Camp.'
    },
    'ach-4': {
        title: 'NSC Software Project',
        description: 'Certificate of participation in the NSC Software Project competition.'
    },
    'ach-11': {
        title: 'NSC 2026 — Regional Finalist',
        description: 'Bronopoly advanced to the regional round of the National Software Contest 2026.'
    }
};

const englishSoftSkillDescriptions: Record<string, string> = {
    'Team Leadership': 'Served as team leader for the three-person Bronopoly team in NSC 2026.',
    Teamwork: 'Collaborated with a team to complete a game for GameJamX on a tight deadline.',
    'Time Management': 'Prioritized tasks while developing a game within three days.',
    Mentorship: 'Helped camp participants with game development and debugging.',
    'Problem Solving': 'Analyzed and resolved issues during game development and testing.'
};

const englishFaqs = [
    {
        question: 'What are your main areas of expertise?',
        answer: 'I focus on game development with Roblox Studio and Lua, building gameplay logic and designing game systems. I also use Blender for animation and AI tools to support my workflow.'
    },
    {
        question: 'Which project are you most proud of?',
        answer: 'Bronopoly. I was the team leader and programmer on a three-person team building a Roblox multiplayer game about economics. The project advanced to the regional round of NSC 2026.'
    },
    {
        question: 'How can I contact you?',
        answer: 'Email me at Wi.koo25561@gmail.com or send me a direct message on Instagram at @ppk.tnk. I usually reply within 24 hours.'
    }
];

const englishGalleryDescriptions: Record<string, string> = {
    'gal-1': 'Showing Bronopoly.',
    'gal-2': 'Showing Bronopoly.',
    'gal-3': 'At GamePee Camp.',
    'gal-4': 'At GamePee Camp.',
    'gal-5': 'At GamePee Camp.',
    'gal-6': 'Showing Bronopoly.',
    'gal-7': 'A photo of me.'
};

export function getPortfolioData(locale: string): PortfolioData {
    if (locale === 'th') {
        return portfolioData;
    }

    return {
        ...portfolioData,
        personal: {
            ...portfolioData.personal,
            subtitle: 'Aspiring game developer focused on Roblox, Lua, and game system design.',
            bio: 'My curiosity about how games work led me to Roblox Studio and Lua. Since then, I have enjoyed turning ideas into playable games—from planning game logic and designing systems to collaborating with a team. My team advanced to the regional round of NSC 2026 with Bronopoly, and I have also helped develop a game for HamsterHub GameJamX and shared what I have learned at game development camps.'
        },
        projects: portfolioData.projects.map((project) => ({
            ...project,
            ...englishProjectCopy[project.id],
            role: project.id === 'project-1' ? 'Team Leader & Programmer' : project.id === 'project-3' ? 'Solo Developer' : project.id === 'project-4' ? 'Developer' : project.role,
            team: project.id === 'project-1' ? 'Team Project (3 Members)' : project.id === 'project-2' ? 'Team Project (5 Members)' : project.id === 'project-3' || project.id === 'project-4' ? 'Solo Project' : project.team,
            highlights: project.id === 'project-1'
                ? ['Roblox Multiplayer Game', 'Economics Learning', 'NSC 2026 Regional Finalist']
                : project.id === 'project-2'
                    ? ['3-Day Game Jam', 'Roblox Battleground', 'Team Programming', 'HamsterHub GameJamX']
                    : project.id === 'project-3'
                        ? ['Solo Game Development', 'Game Concept & System Design', 'Animation / VFX / SFX', 'Clash Royale Inspired']
                        : project.highlights,
            challengesAndSolutions: project.challengesAndSolutions?.map((item) => ({
                problem: project.id === 'project-1' ? 'Designing a multiplayer game that makes economic concepts understandable through play.' : item.problem,
                solution: project.id === 'project-1' ? 'Worked with the team on system design and Roblox gameplay systems, with the player experience in mind.' : item.solution
            }))
        })),
        experiences: portfolioData.experiences.map((experience) => ({
            ...experience,
            ...englishExperienceCopy[experience.id]
        })),
        education: portfolioData.education.map((education) => ({
            ...education,
            ...englishEducationCopy[education.id]
        })),
        achievements: portfolioData.achievements.map((achievement) => ({
            ...achievement,
            ...englishAchievementDescriptions[achievement.id]
        })),
        softSkills: portfolioData.softSkills.map((skill) => ({
            ...skill,
            description: englishSoftSkillDescriptions[skill.name] ?? skill.description
        })),
        faqs: englishFaqs,
        gallery: portfolioData.gallery.map((item) => ({
            ...item,
            description: englishGalleryDescriptions[item.id] ?? item.description
        }))
    };
}
