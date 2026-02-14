// js/main.js
import { groupData } from './data.js';

// --- Helper: Create Member Row ---
function createMemberRow(member) {
    const socialLinks = `
        <div class="flex gap-3 mt-4 justify-center md:justify-start">
            ${member.socials?.googleScholar ? `<a href="${member.socials.googleScholar}" target="_blank" class="text-gray-400 hover:text-blue-600 transition-colors" title="Google Scholar"><i data-lucide="graduation-cap" class="w-5 h-5"></i></a>` : ''}
            ${member.socials?.linkedin ? `<a href="${member.socials.linkedin}" target="_blank" class="text-gray-400 hover:text-blue-700 transition-colors" title="LinkedIn"><i data-lucide="linkedin" class="w-5 h-5"></i></a>` : ''}
        </div>
    `;
    
    const fundingBadge = member.funding ? `
        <div class="inline-flex items-center gap-1.5 px-3 py-1 mt-2 rounded-full bg-green-50 text-green-700 border border-green-100 text-xs font-semibold">
            <i data-lucide="coins" class="w-3 h-3"></i> Funded by ${member.funding}
        </div>
    ` : '';

    return `
        <div class="card p-6 flex flex-col md:flex-row gap-6 items-start group hover:bg-white transition-all duration-300">
            <div class="shrink-0 w-full md:w-48 flex flex-col items-center">
                <img src="${member.img}" alt="${member.name}" class="w-32 h-32 md:w-40 md:h-40 rounded-full md:rounded-2xl object-cover shadow-sm group-hover:shadow-md transition-all duration-300 bg-gray-200">
            </div>
            <div class="flex-1 text-center md:text-left">
                <h4 class="text-xl font-bold text-black mb-1">${member.name}</h4>
                <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1">${member.role || member.topic || 'Researcher'}</p>
                ${fundingBadge}
                <div class="h-3"></div>
                <p class="text-gray-600 text-sm leading-relaxed mb-4 text-justify">${member.desc || "Research details to be added."}</p>
                ${socialLinks}
            </div>
        </div>
    `;
}

// --- Helper: Create Publication Row ---
function createPubRow(pub) {
    return `
       <div class="group block border-b border-gray-100 last:border-0 pb-4 mb-4">
           <h4 class="text-lg font-semibold text-black mb-1 group-hover:text-blue-600 transition-colors">
               <a href="${pub.link}" target="_blank">${pub.title}</a>
           </h4>
           <p class="text-sm text-gray-600 mb-1">${pub.authors}</p>
           <div class="flex items-center gap-3 text-xs font-medium text-gray-400 uppercase tracking-wide">
               <span class="bg-gray-100 px-2 py-0.5 rounded text-gray-600">${pub.year}</span>
               <span>${pub.journal}</span>
           </div>
       </div>
   `;
}

// --- Navigation Logic ---
window.switchTab = function(tabId) {
    const sections = document.querySelectorAll('.view-section');
    sections.forEach(section => section.classList.add('hidden-tab'));

    const activeSection = document.getElementById(`view-${tabId}`);
    if(activeSection) {
        activeSection.classList.remove('hidden-tab');
        void activeSection.offsetWidth; // Trigger reflow
    }

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const activeLink = document.getElementById(`nav-${tabId}`);
    if(activeLink) activeLink.classList.add('active');

    window.scrollTo(0, 0);
};

window.toggleMobileMenu = function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
};

// --- Rendering Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. PI Section
    const piName = document.getElementById('pi-name');
    if(piName) piName.textContent = groupData.pi.name;
    const piBio = document.getElementById('pi-bio');
    if(piBio) piBio.textContent = groupData.pi.bio;
    const piImg = document.getElementById('pi-image');
    if(piImg) piImg.src = groupData.pi.image;

    // 2. Research Areas
    const areasContainer = document.getElementById('areas-container');
    if(areasContainer) {
        areasContainer.innerHTML = groupData.researchAreas.map(area => `
            <div class="min-w-[200px] snap-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-default">
                <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-black">
                    <i data-lucide="${area.icon}" class="w-6 h-6"></i>
                </div>
                <h4 class="font-bold text-sm mb-1">${area.title}</h4>
                <p class="text-xs text-gray-500">${area.desc}</p>
            </div>
        `).join('');
    }

    // 3. Highlights
    const highlightContainer = document.getElementById('highlights-container');
    if(highlightContainer) {
        highlightContainer.innerHTML = groupData.highlights.map(item => {
            let bgOverlay = item.bgImage ? `
                <div class="absolute inset-0 z-0">
                    <img src="${item.bgImage}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>` : '';
            let textClass = (item.bgImage || item.color.includes('text-white')) ? 'text-white' : 'text-black';
            
            return `
                <div class="card flex flex-col justify-between relative group ${item.size} ${item.color}">
                    ${bgOverlay}
                    <div class="relative z-10 p-8 flex flex-col h-full justify-between ${textClass}">
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider opacity-80 mb-2 block">${item.type}</span>
                            <h3 class="text-2xl font-bold mb-3 leading-tight">${item.title}</h3>
                            <p class="opacity-90 text-sm leading-relaxed">${item.desc}</p>
                        </div>
                        <a href="${item.link}" class="mt-6 inline-flex items-center text-sm font-semibold hover:opacity-70 transition-opacity">
                            View Details <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
                        </a>
                    </div>
                </div>`;
        }).join('');
    }

    // 4. Team Members
    const renderMemberSection = (id, data) => {
        const container = document.getElementById(id);
        if(container) container.innerHTML = data.map(createMemberRow).join('');
    };

    renderMemberSection('pi-group-container', groupData.team.pi);
    renderMemberSection('postdoc-container', groupData.team.postdocs);
    renderMemberSection('phd-container', groupData.team.phd);
    renderMemberSection('project-container', groupData.team.project);
    renderMemberSection('interns-container', groupData.team.interns);
    renderMemberSection('visitors-container', groupData.team.visitors);
    renderMemberSection('alumni-container', groupData.team.alumni);

    // 5. Grants
    const grantsContainer = document.getElementById('grants-container');
    if(grantsContainer) {
        grantsContainer.innerHTML = groupData.grants.map(grant => `
            <div class="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-md transition-all">
                <div class="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 text-xl font-black text-gray-800 border border-gray-100">
                    ${grant.name}
                </div>
                <h4 class="font-bold text-gray-900">${grant.name}</h4>
                <p class="text-xs text-gray-500 mt-1">${grant.full}</p>
            </div>
        `).join('');
    }

    // 6. Publications
    const recentPubs = document.getElementById('publications-recent-container');
    if(recentPubs) recentPubs.innerHTML = groupData.publications.recent.map(createPubRow).join('');
    
    const preprints = document.getElementById('publications-preprint-container');
    if(preprints) preprints.innerHTML = groupData.publications.preprints.map(createPubRow).join('');

    // 7. News
    const newsContainer = document.getElementById('news-container');
    if(newsContainer) {
        newsContainer.innerHTML = groupData.publications.news.map(n => `
            <div class="card p-6 border-l-4 border-blue-500">
                <span class="text-xs font-bold text-gray-400 uppercase mb-2 block">${n.date}</span>
                <h4 class="font-bold text-lg mb-1">${n.title}</h4>
                <p class="text-sm text-gray-500">${n.desc}</p>
            </div>
        `).join('');
    }

    // 8. Collaborators, Conferences, Outreach, Events, Resources, Teaching, Gallery
    // (Simplified map injections similar to above - abbreviated for modularity example)
    const simpleMap = (id, data, fn) => {
        const el = document.getElementById(id);
        if(el) el.innerHTML = data.map(fn).join('');
    };

    simpleMap('collaborators-container', groupData.collaborators, c => `
        <div class="flex flex-col items-center text-center">
            <img src="${c.img}" alt="${c.name}" class="w-20 h-20 rounded-full mb-3 object-cover shadow-sm bg-gray-100">
            <h5 class="font-bold text-sm text-gray-900">${c.name}</h5>
            <p class="text-xs text-gray-500">${c.affiliation}</p>
        </div>
    `);

    simpleMap('gallery-container', groupData.gallery, item => `
        <div class="card p-3 group">
            <div class="overflow-hidden rounded-xl h-64 bg-gray-100 mb-4">
                <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="px-2 pb-2">
                <span class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">${item.date}</span>
                <h3 class="text-lg font-bold text-black">${item.title}</h3>
            </div>
        </div>
    `);
    
    // (Injecting remaining IDs based on existing structure - simplified for brevity)
    // ... Add mappings for teaching, resources, events_organized here following same pattern ...

    // Initialize Default Tab
    switchTab('home');

    // Initialize Icons LAST
    lucide.createIcons();
});