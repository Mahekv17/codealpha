const issuesContainer = document.getElementById('issues-container');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const priorityInput = document.getElementById('priority');
const assignedToInput = document.getElementById('assignedTo');
const fileInput = document.getElementById('file');

function createIssue() {
    const issue = {
        title: titleInput.value,
        description: descriptionInput.value,
        priority: priorityInput.value,
        assignedTo: assignedToInput.value,
        file: fileInput.files[0]?.name || null,
    };

    // You can send the 'issue' object to the backend and handle server-side logic

    // For now, just display the created issue
    displayIssue(issue);
    clearForm();
}

function displayIssue(issue) {
    const issueElement = document.createElement('div');
    issueElement.className = 'issue';
    issueElement.innerHTML = `
        <h3>${issue.title}</h3>
        <p>${issue.description}</p>
        <p><strong>Priority:</strong> ${issue.priority}</p>
        <p><strong>Assigned To:</strong> ${issue.assignedTo}</p>
        <p><strong>File:</strong> ${issue.file || 'None'}</p>
    `;
    issuesContainer.appendChild(issueElement);
}

function clearForm() {
    titleInput.value = '';
    descriptionInput.value = '';
    priorityInput.value = 'low';
    assignedToInput.value = '';
    fileInput.value = '';
}
