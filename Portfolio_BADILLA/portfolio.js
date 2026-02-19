document.addEventListener('DOMContentLoaded', function() {
    const activitiesSection = document.getElementById('activities');
    const activitiesList = activitiesSection.querySelector('.activities-list');
    const activitiesHeading = activitiesSection.querySelector('h2');
    
    // Initially hide the activities list
    activitiesList.style.display = 'none';
    activitiesList.style.opacity = '0';
    activitiesList.style.maxHeight = '0';
    activitiesList.style.overflow = 'hidden';
    activitiesList.style.transition = 'all 0.5s ease-in-out';
    
    // Add click event to the Activities heading
    activitiesHeading.addEventListener('click', function() {
        toggleActivities();
    });
    
    // Add cursor pointer to indicate it's clickable
    activitiesHeading.style.cursor = 'pointer';
    activitiesHeading.style.position = 'relative';
    
    // Add dropdown indicator
    const indicator = document.createElement('span');
    indicator.textContent = ' ▼';
    indicator.style.transition = 'transform 0.3s ease';
    indicator.style.display = 'inline-block';
    activitiesHeading.appendChild(indicator);
    
    function toggleActivities() {
        if (activitiesList.style.display === 'none') {
            // Show activities
            activitiesList.style.display = 'grid';
            setTimeout(() => {
                activitiesList.style.opacity = '1';
                activitiesList.style.maxHeight = '500px';
                indicator.style.transform = 'rotate(180deg)';
            }, 10);
        } else {
            // Hide activities
            activitiesList.style.opacity = '0';
            activitiesList.style.maxHeight = '0';
            indicator.style.transform = 'rotate(0deg)';
            
            setTimeout(() => {
                activitiesList.style.display = 'none';
            }, 500);
        }
    }
    
    // Add hover effect to activities heading
    activitiesHeading.addEventListener('mouseenter', function() {
        activitiesHeading.style.color = '#5a67d8';
        activitiesHeading.style.transform = 'translateX(5px)';
        activitiesHeading.style.transition = 'all 0.3s ease';
    });
    
    activitiesHeading.addEventListener('mouseleave', function() {
        activitiesHeading.style.color = '#667eea';
        activitiesHeading.style.transform = 'translateX(0)';
    });
});