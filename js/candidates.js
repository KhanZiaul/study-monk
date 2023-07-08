const locationInput = document.getElementById('locationInput');
const jobRoleInput = document.getElementById('jobRoleInput');
const searchButton = document.getElementById('searchButton');
const candidateList = document.getElementById('candidateList');

const candidates = [
    { name: 'Jane', location: 'San Francisco', jobRole: 'UX Designer', 'image': 'https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' , salary : '$100/months' },
    { name: 'Alex', location: 'India', jobRole: 'Project Manager', 'image': 'https://images.unsplash.com/photo-1507438222021-237ff73669b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80' , salary : '$200/months'},
    { name: 'John', location: 'India', jobRole: 'UX Designer', 'image': 'https://images.unsplash.com/photo-1513959663939-eb7424f0e121?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' , salary : '$250/months' },
    { name: 'Doe', location: 'New York', jobRole: 'MERN Developer', 'image': 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' , salary : '$180/months' },
    { name: 'Smith', location: 'New York', jobRole: 'Project Manager', 'image': 'https://images.unsplash.com/photo-1541473211644-5cb06d3c68ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' ,salary : '$190/months' },
    { name: 'Johnson', location: 'London', jobRole: 'MERN Developer', 'image': 'https://images.unsplash.com/photo-1541600278744-d4cba88bb2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' , salary : '$260/months' },
    { name: 'Anuk', location: 'London', jobRole: 'Web Developer', 'image': 'https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=807&q=80' , salary : '$300/months'},
    { name: 'Baskita', location: 'Dubai', jobRole: 'Web Developer', 'image': 'https://images.unsplash.com/photo-1588376483402-acc965d4ac21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' , salary : '$500/months' },
    { name: 'Johnson', location: 'Dubai', jobRole: 'Front End Developer', 'image': 'https://images.unsplash.com/photo-1517231305676-5702be37e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' , salary : '$400/months' },

];

const jobCandidate = document.createElement('div');
jobCandidate.innerHTML = `
<div class='candidate'>
${candidates.map(candidate => `
  <div class="card">
  <img class="card-imag" src=${candidate.image} alt="">
  <div class="candidate-details">
  <h3 class="candidate-name">${candidate.name}</h3>
  <div class="candidate-first-details">
  <p class="job-role">${candidate.jobRole} </p>
  <p class="candidate-location"><i class="fa-sharp fa-solid fa-location-dot"></i> ${candidate.location}</p>
  <p class="candidate-salary"> <i class="fa-solid fa-money-bill"></i> ${candidate.salary}</p>
  </div>
  <div class="candidate-second-details">
  <p>Advertising</p>
  <p>App</p>
  <p>Job</p>
  </div>
  </div>
  <button class="button" role="button"><span class="text">View Profile</span></button>
  </div>
  </div>
  </div>
`).join('')}
</div>
`;


candidateList.appendChild(jobCandidate);


function filterCandidates() {
    const location = locationInput.value.toLowerCase();
    const jobRole = jobRoleInput.value.toLowerCase();

    const filteredCandidates = candidates.filter(candidate => {
        const candidateLocation = candidate.location.toLowerCase();
        const candidateJobRole = candidate.jobRole.toLowerCase();
        return (
            candidateLocation.includes(location) && candidateJobRole.includes(jobRole)
        );
    });

    displayCandidates(filteredCandidates);
}

function displayCandidates(candidates) {
    candidateList.innerHTML = '';

    if (candidates.length === 0) {
        const noResultsItem = document.createElement('li');
        noResultsItem.textContent = 'No candidates found';
        candidateList.appendChild(noResultsItem);
    } else {
        candidates.forEach(candidate => {
            const candidateItem = document.createElement('div');
            candidateItem.innerHTML = `
            <div class="card">
            <img class="card-imag" src=${candidate.image} alt="">
            <div class="candidate-details">
            <h3 class="candidate-name">${candidate.name}</h3>
            <div class="candidate-first-details">
            <p class="job-role">${candidate.jobRole} </p>
            <p class="candidate-location"><i class="fa-sharp fa-solid fa-location-dot"></i> ${candidate.location}</p>
            <p class="candidate-salary"> <i class="fa-solid fa-money-bill"></i> ${candidate.salary}</p>
            </div>
            <div class="candidate-second-details">
            <p>Advertising</p>
            <p>App</p>
            <p>Job</p>
            </div>
            </div>
            <button class="button" role="button"><span class="text">View Profile</span></button>
            </div>
            </div>
            </div>
            `;
            candidateList.appendChild(candidateItem);
        });
    }
}

searchButton.addEventListener('click', filterCandidates);