const locationInput = document.getElementById('locationInput');
const jobRoleInput = document.getElementById('jobRoleInput');
const searchButton = document.getElementById('searchButton');
const candidateList = document.getElementById('candidateList');

const candidates = [
    { name: 'Jane', location: 'San Francisco', jobRole: 'UI/UX Designer' , 'image' : 'https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    { name: 'Alex', location: 'London', jobRole: 'Project Manager' , 'image' : 'https://images.unsplash.com/photo-1507438222021-237ff73669b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80' },
    { name: 'John', location: 'New York', jobRole: 'Software Developer' , 'image' : 'https://images.unsplash.com/photo-1513959663939-eb7424f0e121?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
    { name: 'Doe', location: 'New York', jobRole: 'Software Developer' , 'image' : 'https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
    { name: 'Smith', location: 'New York', jobRole: 'Software Developer' , 'image' : 'https://images.unsplash.com/photo-1541473211644-5cb06d3c68ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' },
    { name: 'Johnson', location: 'New York', jobRole: 'Software Developer' , 'image' : 'https://images.unsplash.com/photo-1541600278744-d4cba88bb2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    { name: 'Johnson', location: 'New York', jobRole: 'Software Developer' , 'image' : 'https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=807&q=80' },
    { name: 'Johnson', location: 'New York', jobRole: 'Software Developer' , 'image' : 'https://images.unsplash.com/photo-1588376483402-acc965d4ac21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},
    { name: 'Johnson', location: 'New York', jobRole: 'Software Developer' , 'image' : 'https://images.unsplash.com/photo-1517231305676-5702be37e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'},

];

const jobCandidate = document.createElement('div');

jobCandidate.innerHTML = `
<div class='candidate'>
${candidates.map(candidate => `
  <div>
    <h3>${candidate.name}</h3>
    <p>Location: ${candidate.location}</p>
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
            const candidateItem = document.createElement('li');
            candidateItem.textContent = `${candidate.name} - ${candidate.location} - ${candidate.jobRole}`;
            candidateList.appendChild(candidateItem);
        });
    }
}

searchButton.addEventListener('click', filterCandidates);