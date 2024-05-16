fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').textContent = data.name;
        document.getElementById('title').textContent = data.title;
        document.getElementById('phone').textContent = data.phone;
        document.getElementById('phone').href = `tel:${data.phone}`;
        document.getElementById('email').textContent = data.email;
        document.getElementById('email').href = `mailto:${data.email}`;
        document.getElementById('linkedin').href = data.linkedin;
        document.getElementById('about').textContent = data.about;

        const experienceList = document.getElementById('experience-list');
        data.experience.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="position">${item.position}</div>
                <div class="company">${item.company}</div>
                <div class="date">${item.date}</div>
                <p>${item.description}</p>
            `;
            experienceList.appendChild(li);
        });

        const educationList = document.getElementById('education-list');
        data.education.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="degree">${item.degree}</div>
                <div class="school">${item.school}</div>
                <div class="date">${item.date}</div>
                <p>${item.description}</p>
            `;
            educationList.appendChild(li);
        });

        const skillsList = document.getElementById('skills-list');
        data.skills.forEach(skill => {
            const div = document.createElement('div');
            div.textContent = skill;
            skillsList.appendChild(div);
        });
    })
    .catch(error => console.error('Error fetching the data:', error));
