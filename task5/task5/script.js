function fetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      const container = document.getElementById('user-container');
      container.innerHTML = ''; // Clear existing content

      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        `;
        container.appendChild(userDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching users:', error);
      document.getElementById('user-container').innerHTML = '<p>Error loading users.</p>';
    });
}
