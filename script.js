
function fetchTodoData() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function validateCompletedTasks() {
  let completedCount = 0;

  return new Promise((resolve, reject) => {
    fetchTodoData()
      .then(data => {
        const tableBody = document.querySelector('#todoTable tbody');

        data.forEach(todo => {
          const row = document.createElement('tr');
          const idCell = document.createElement('td');
          const titleCell = document.createElement('td');
          const completedCell = document.createElement('td');
          const checkbox = document.createElement('input');
          const checkboxLabel = document.createElement('label');

          checkbox.type = 'checkbox';
          checkbox.checked = todo.completed;
          checkbox.disabled = todo.completed;
          checkbox.classList.add('checkbox-custom');
          checkboxLabel.classList.add('checkbox-label');
          checkboxLabel.appendChild(checkbox);

          checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
            if (checkbox.checked) {
              completedCount++;
            } else {
              completedCount--;
            }
            if (completedCount === 5) {
              resolve();
            }
          });

          idCell.textContent = todo.id;
          titleCell.textContent = todo.title;
          completedCell.appendChild(checkboxLabel);

          row.appendChild(idCell);
          row.appendChild(titleCell);
          row.appendChild(completedCell);

          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        reject(error);
      });
  });
}

validateCompletedTasks()
  .then(() => {
    alert('Congrats!! 5 Tasks have been Successfully Completed');
  })
  .catch(error =>{
       console.error('Error:', error);
    });