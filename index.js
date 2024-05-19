

let editbtn= document.createElement('button');
let editbtntext=document.createTextNode("Edit");
editbtn.appendChild(editbtntext);
editbtn.className='edit-btn';

function addButtons(li) {
          const editButton = document.createElement('button');
          editButton.className = 'edit-btn';
          editButton.textContent = 'Edit';

          const deleteButton = li.querySelector('.delete-btn');
          deleteButton.className = 'delete-btn';
          deleteButton.textContent = 'x';

          li.appendChild(editButton);
        }

        // Add buttons to existing list items
        const existingFruits = document.querySelectorAll('.fruits .fruit');
        existingFruits.forEach(addButtons);

// Implement the code as in video but with one extra 'Edit' button in 'li'
let form=document.querySelector('form');
let fruits=document.querySelector('.fruits');
fruits.addEventListener('click', function(event) {
          if (event.target.classList.contains('delete-btn')) {
            const li = event.target.parentElement;
            fruits.removeChild(li);
          }})

        form.addEventListener('submit', function(event) {
          event.preventDefault();

          let fruitToAdd = document.getElementById('fruit-to-add').value.trim();
          if (fruitToAdd === "") return;

          let newLi = document.createElement('li');
          newLi.className = 'fruit';
          newLi.textContent = fruitToAdd;

          let editButton = document.createElement('button');
          editButton.className = 'edit-btn';
          editButton.textContent = 'Edit';

          let deleteButton = document.createElement('button');
          deleteButton.className = 'delete-btn';
          deleteButton.textContent = 'x';

          newLi.appendChild(editButton);
          newLi.appendChild(deleteButton);

          fruits.appendChild(newLi);

          document.getElementById('fruit-to-add').value = "";
        });

    