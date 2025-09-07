document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectWindow');
    const modalContent = modal.querySelector('.p-6');
    const grid = document.getElementById('projectsGrid');

    const basePath = 'assets/projects/';
    const maxProjects = 50;
    const pad = n => String(n).padStart(2,'0');

    // Offline metadata source: user-editable global defined in optional js/projects-metadata.js
    const metaSource = window.PROJECT_METADATA || {}; // { 'project-01': { title, description, details } }

    const exts = ['jpg','JPG','jpeg','png','webp'];
    function imageExists(src){
        return new Promise(resolve => {
            const img = new Image();
            let done = false;
            const finish = ok => { if(!done){ done = true; resolve(ok);} };
            img.onload = ()=>finish(true);
            img.onerror = ()=>finish(false);
            setTimeout(()=>finish(img.complete && img.naturalWidth>0), 600);
            img.src = src + '?' + Date.now();
        });
    }
    async function findFirstExisting(baseNoExt){
        for(const e of exts){
            const candidate = baseNoExt + '.' + e;
            if(await imageExists(candidate)) return candidate;
        }
        return null;
    }

    async function loadProjects(){
        const projects = [];
        for(let i=1;i<=maxProjects;i++){
            const idStr = pad(i);
            const folder = `project-${idStr}/`;
            const coverBase = basePath + folder + 'cover';
            const cover = await findFirstExisting(coverBase);
            if(!cover) break; // stop at first gap (no logs in clean version)
            const meta = metaSource[`project-${idStr}`] || { title: `Project ${idStr}`, description: '', details: '' };
            const images = [];
            for(let n=1;n<=100;n++){
                const galleryBase = basePath + folder + `img-${pad(n)}`;
                /* eslint-disable no-await-in-loop */
                const found = await findFirstExisting(galleryBase);
                if(!found) break;
                images.push(found);
            }
            if(images.length===0) images.push(cover);
            projects.push({ id:i, folder, cover, images, ...meta });
        }
        render(projects);
    }

    function render(projects){
        if(projects.length===0){
            grid.innerHTML = `<div class="col-span-full text-center text-gray-500 space-y-2">
                <p>No projects found.</p>
                <p>Create <code>assets/projects/project-01/cover.jpg</code>.</p>
            </div>`;
            return;
        }
        grid.innerHTML = projects.map(p=>`
            <div class="project-card group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer" data-id="${p.id}">
                <div class="relative overflow-hidden aspect-[4/3] bg-gray-100">
                    <canvas class="absolute inset-0 w-full h-full" data-placeholder></canvas>
                    <img src="${p.cover}" alt="${p.title}" class="project-cover opacity-0 w-full h-full object-cover transition duration-500" onload="this.classList.remove('opacity-0');this.previousElementSibling.remove();" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\'absolute inset-0 flex items-center justify-center text-red-500 text-xs\'>Failed: ${p.cover}</div>'">
                </div>
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-[#454545] mb-2">${p.title}</h3>
                    <p class="text-gray-600 text-sm">${p.description || ''}</p>
                </div>
            </div>`).join('');

        grid.querySelectorAll('.project-card').forEach(card=>{
            card.addEventListener('click', ()=>{
                const id = Number(card.getAttribute('data-id'));
                const project = projects.find(p=>p.id===id);
                open(project);
            });
        });
    }

    function open(project){
        modalContent.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-semibold text-[#454545]">${project.title}</h2>
                <button class="close-window text-[#bbae9d] hover:text-[#454545] transition-colors duration-200"><i class="fas fa-times text-2xl"></i></button>
            </div>
            <div class="space-y-6">
                <div class="image-gallery grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${project.images.map(img=>`<div class=\"aspect-[4/3] overflow-hidden rounded-lg\"><img src=\"${img}\" class=\"w-full h-full object-cover hover:scale-105 transition-transform duration-300\"></div>`).join('')}
                </div>
                <div class="project-details">
                    ${project.description ? `<p class=\"text-gray-700 leading-relaxed mb-4\">${project.description}</p>`:''}
                    ${project.details ? `<div class=\"text-gray-600\">${project.details}</div>`:''}
                </div>
            </div>`;
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }

    function close(){
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }
    modal.addEventListener('click', e=>{ if(e.target===modal || e.target.closest('.close-window')) close(); });

    loadProjects();
});
