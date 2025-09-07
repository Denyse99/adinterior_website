document.addEventListener('DOMContentLoaded', function() {
    const window = document.getElementById('projectWindow');
    const content = window.querySelector('.p-6');

    // Close window function
    function closeWindow() {
        window.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    // Close window when clicking the close button
    window.addEventListener('click', (e) => {
        const closeBtn = e.target.closest('.close-window');
        if (closeBtn || e.target === window) {
            closeWindow();
        }
    });

    // Handle project card clicks
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectData = {
                title: card.getAttribute('data-title'),
                description: card.getAttribute('data-description'),
                images: JSON.parse(card.getAttribute('data-images')),
                details: card.getAttribute('data-details')
            };
            
            openWindow(projectData);
        });
    });

    function openWindow(projectData) {
        const windowHTML = `
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-semibold text-[#454545]">${projectData.title}</h2>
                <button class="close-window text-[#bbae9d] hover:text-[#454545] transition-colors duration-200">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div class="space-y-6">
                <div class="image-gallery grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${projectData.images.map(img => `
                        <div class="aspect-[4/3] overflow-hidden rounded-lg">
                            <img src="${img}" alt="" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    `).join('')}
                </div>
                <div class="project-details">
                    <p class="text-gray-700 leading-relaxed mb-4">${projectData.description}</p>
                    <div class="text-gray-600">${projectData.details}</div>
                </div>
            </div>
        `;

        content.innerHTML = windowHTML;
        window.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    }
});