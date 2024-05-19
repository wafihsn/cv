document.addEventListener("DOMContentLoaded", function() {
    fetch('src/data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('name').textContent = data.name;
            document.getElementById('phone').textContent = data.phone;
            document.getElementById('phone').href = `tel:${data.phone}`;
            document.getElementById('email').textContent = data.email;
            document.getElementById('email').href = `mailto:${data.email}`;
            document.getElementById('linkedin').href = data.linkedin;

            document.getElementById('aboutMe').textContent = data.aboutMe;
            document.getElementById('objective').textContent = data.objective;

            const workExperience = document.getElementById('workExperience');
            data.workExperience.forEach(job => {
                const jobDiv = document.createElement('div');
                jobDiv.classList.add('job');
                jobDiv.innerHTML = `<h3>${job.title}</h3><p><strong>${job.date}</strong></p><ul>${job.responsibilities.map(res => `<li>${res}</li>`).join('')}</ul>`;
                workExperience.appendChild(jobDiv);
            });

            document.getElementById('education').textContent = data.education;

            const programmingLanguages = document.getElementById('programmingLanguages');
            data.programmingLanguages.forEach(lang => {
                const span = document.createElement('span');
                span.classList.add('skill');
                span.textContent = lang;
                programmingLanguages.appendChild(span);
            });

            const additionalSkills = document.getElementById('additionalSkills');
            data.additionalSkills.forEach(skill => {
                const span = document.createElement('span');
                span.classList.add('skill');
                span.textContent = skill;
                additionalSkills.appendChild(span);
            });

            const languages = document.getElementById('languages');
            for (const [lang, level] of Object.entries(data.languages)) {
                const div = document.createElement('div');
                div.classList.add('language');
                div.innerHTML = `<span class="language-name">${lang}:</span><span class="language-level">${level}</span>`;
                languages.appendChild(div);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
