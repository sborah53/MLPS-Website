// js/data.js
export const groupData = {
    pi: {
        name: "Sangkha Borah",
        title: "Assistant Professor",
        image: "https://api.dicebear.com/7.x/initials/svg?seed=SB&backgroundColor=1a1a1a", 
        bio: "My primary research areas are ML for Quantum Technology, Quantum Control, Quantum Computing, and Quantum Error Correction. We also explore Neuromorphic Computing and ML applications in photonics and condensed matter physics. I lead the Machine Learning for Physical Sciences group at IIT Hyderabad."
    },
    researchAreas: [
        { title: "ML for Quantum Technology", icon: "cpu", desc: "Developing machine learning methods to tackle computational and design challenges across quantum technologies." },
        { title: "Quantum Control", icon: "settings-2", desc: "Designing robust quantum control protocols using AI for high-fidelity state preparation and control operations." },
        { title: "Quantum Error Correction", icon: "shield-check", desc: "Creating data-driven quantum error-correcting schemes to stabilize fragile quantum information." },
        { title: "Quantum ML", icon: "brain-circuit", desc: "Exploring variational circuits and kernel-based models for quantum-enhanced learning tasks." },
        { title: "Neuromorphic Computing", icon: "zap", desc: "Building brain-inspired architectures that harness quantum and neuromorphic principles for efficient computation." },
        { title: "ML for Photonics", icon: "lightbulb", desc: "Using ML to inversely design and optimize complex photonic structures and devices." },
        { title: "ML for Condensed Matter Physics", icon: "layers", desc: "Leveraging ML to classify phases, discover emergent behavior, and accelerate simulations." },
    ],
    highlights: [
        {
            type: "Latest Paper I",
            title: "Non-Markovian feedback for optimized quantum error correction",
            desc: "Phys. Rev. Lett (2025)",
            link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.020601",
            color: "bg-blue-50 text-blue-900",
            size: "md:col-span-2 md:row-span-2",
            bgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop"
        },
        {
            type: "Latest Paper II",
            title: "No-Collapse Feedback Control",
            desc: "Published in Phys. Rev. Lett (2023): Achieving accurate quantum feedback via conditional state tomography.",
            link: "https://doi.org/10.1103/PhysRevLett.131.210803",
            color: "bg-white border border-gray-100",
            size: "md:col-span-1 md:row-span-1",
            bgImage: "" 
        },
        {
            type: "news",
            title: "New Joining",
            desc: "Subodh Roushan, Akash Kumar Saw and Anjana K have joined the group as PhD scholars",
            link: "#",
            color: "bg-purple-50 text-purple-900",
            size: "md:col-span-1 md:row-span-1",
            bgImage: ""
        }
    ],
    team: {
        pi: [
           {
                name: "Sangkha Borah",
                role: "Principal Investigator",
                img: "https://api.dicebear.com/7.x/initials/svg?seed=SB&backgroundColor=1a1a1a",
                desc: "I work as a quantum physicist at the intersection of machine learning and quantum technologies...",
                socials: { googleScholar: "https://scholar.google.com/citations?user=qfByhykAAAAJ&hl=en", linkedin: "#" }
           } 
        ],
        postdocs: [
            {
                name: "Dr. Future PostDoc",
                role: "Postdoctoral Researcher",
                img: "https://api.dicebear.com/7.x/notion/svg?seed=Postdoc1",
                funding: "Institute/External Grant",
                desc: "Interested in quantum control and feedback. Looking for new ways to apply RL in experiment design.",
                socials: { googleScholar: "#", linkedin: "#" }
            }
        ],
        phd: [
            { name: "Akash Kumar Saw", role: "Quantum Error Correction", img: "https://api.dicebear.com/7.x/notion/svg?seed=Akash", funding: "CSIR-JRF Fellowship", desc: "Working on Quantum Error Correction.", socials: { googleScholar: "#" } },
            { name: "Anjana K", role: "Quantum Machine Learning", img: "https://api.dicebear.com/7.x/notion/svg?seed=Anjana", funding: "DST-Inspire Fellowship", desc: "Working on Quantum Machine Learning.", socials: { googleScholar: "#" } },
            { name: "Subodh Roushan", role: "Neuromorphic Quantum Computing", img: "https://api.dicebear.com/7.x/notion/svg?seed=Subodh", funding: "UGC-JRF Fellowship", desc: "Working on Neuromorphic Quantum Computing.", socials: { googleScholar: "#" } },
            { name: "Majji Siva", role: "Machine Learning for Photonics", img: "https://api.dicebear.com/7.x/notion/svg?seed=Siva", funding: "UGC-JRF Fellowship", desc: "Co-guided with Prof. Vandana Sharma.", socials: { googleScholar: "#" } },
            { name: "Harish Chalwadi", role: "ML for Condensed Matter Physics", img: "https://api.dicebear.com/7.x/notion/svg?seed=Harish", funding: "MOE Fellowship", desc: "Co-guided with Dr. Mahesh Peddigari.", socials: { googleScholar: "#" } }
        ],
        project: [
            { name: "Raghav Sundararaman", role: "B.Tech Project", img: "https://api.dicebear.com/7.x/notion/svg?seed=Raghav", topic: "ML for QT", desc: "Working on Neuromorphic Computing.", socials: {} },
            { name: "Harshit Lakshakar", role: "M.Sc Project", img: "https://api.dicebear.com/7.x/notion/svg?seed=Harshit", topic: "ML for QT", desc: "Working on ML for Photonics.", socials: {} },
            { name: "Shardul Bharat Gharat", role: "Project Associate", img: "https://api.dicebear.com/7.x/notion/svg?seed=Shardul", topic: "ML for QT", desc: "Working on Shadow Tomography.", socials: {} }
        ],
        interns: [
            { name: "Intern Name 1", role: "Summer Intern", img: "https://api.dicebear.com/7.x/notion/svg?seed=Intern1", topic: "Quantum ML", desc: "Summer internship project.", socials: {} }
        ],
        visitors: [
            { name: "Dr. Visiting Scholar", role: "Visiting Professor", img: "https://api.dicebear.com/7.x/notion/svg?seed=Visitor1", topic: "Quantum Optics", desc: "Visiting from University of X.", socials: {} }
        ],
        alumni: [
            { name: "Dr. Aditi Verma", role: "Former PhD Student", img: "https://api.dicebear.com/7.x/notion/svg?seed=Aditi", desc: "Graduated in 2024. Postdoc at ETH Zurich.", socials: {} }
        ]
    },
    grants: [
        { name: "CSIR", full: "Council of Scientific & Industrial Research", type: "Fellowship" },
        { name: "DST", full: "Department of Science and Technology", type: "Fellowship" },
        { name: "UGC", full: "University Grants Commission", type: "Fellowship" },
        { name: "MOE", full: "Ministry of Education", type: "Fellowship" }
    ],
    conferences: [
        { name: "APS March Meeting 2025", location: "Los Angeles", role: "Invited Talk" },
        { name: "QML Workshop 2024", location: "Zurich", role: "Poster Presentation" },
        { name: "IEEE Quantum Week", location: "Seattle", role: "Keynote" },
        { name: "Indian Science Congress", location: "Kolkata", role: "Invited Talk" }
    ],
    outreach: [
         { name: "Science Day Demo", location: "IIT Hyderabad", role: "Live Quantum Computing Demo" },
         { name: "Public Lecture", location: "Hyderabad Regional Library", role: "Intro to Quantum Mechanics" }
    ],
    events_organized: [
        { title: "Workshop on Quantum Machine Learning", date: "Dec 2024", desc: "A 3-day intense workshop covering VQEs and Quantum Kernels." },
        { title: "Winter School on Mathematical Physics", date: "Jan 2025", desc: "Lectures on topology and geometry in physics." }
    ],
    publications: {
        recent: [
            {
                title: "Non-Markovian feedback for optimized quantum error correction",
                authors: "Matteo Puviani, <b>Sangkha Borah</b>, Remmy Zen, Jan Olle, Florian Marquardt",
                journal: "Physical Review Letters, 134, 020601",
                year: "2025",
                link: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.134.020601"
            },
            {
                title: "No-collapse accurate quantum feedback control via conditional state tomography",
                authors: "<b>Sangkha Borah</b>, Bijita Sarma",
                journal: "Physical Review Letters, 131, 210803",
                year: "2023",
                link: "https://doi.org/10.1103/PhysRevLett.131.210803"
            }
        ],
        preprints: [
            {
                title: "Transformer-based machine learning for fast and accurate readout",
                authors: "A Kumar, S Borah",
                journal: "arXiv preprint arXiv:2310.02100",
                year: "2023",
                link: "#"
            }
        ],
        news: [
            { title: "Cover Story in Physics Today", desc: "Our work on RL control was featured on the cover.", date: "Jan 2025", link: "#" },
            { title: "Best Paper Award", desc: "Won at QML Workshop Zurich.", date: "Dec 2024", link: "#" }
        ]
    },
    collaborators: [
        { name: "Prof. John Doe", affiliation: "MIT, USA", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
        { name: "Dr. Jane Smith", affiliation: "ETH Zurich", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" },
        { name: "Prof. A. Kumar", affiliation: "IISc Bangalore", img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kumar" },
    ],
    resources: [
        { title: "QuantumNet", desc: "A PyTorch library for Quantum Neural Networks.", link: "github.com" },
        { title: "TopoLearn", desc: "Dataset for topological phases of matter.", link: "github.com" },
    ],
    teaching: [
        { code: "PH501", name: "Quantum Computing", semester: "Autumn 2025" },
        { code: "PH602", name: "Machine Learning for Physical Sciences", semester: "Spring 2026" },
        { code: "PH405", name: "Mathematical Physics", semester: "Autumn 2024" }
    ],
    gallery: [
        { title: "Diwali Celebration 2024", date: "Nov 2024", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop" },
        { title: "Group Trek to Coorg", date: "Aug 2024", img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop" },
        { title: "Lab Birthday Party", date: "July 2024", img: "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?q=80&w=600&auto=format&fit=crop" }
    ]
};