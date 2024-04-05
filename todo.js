const todo = [];

        function displaytodo()
        {
            let todoHTML = '';
            for( let i= 0;i<todo.length;i++)
            {
                todoHTML+=`
                <div>${todo[i].name}</div> <div> ${todo[i].dueDate} </div>
                <div>
                <button class=
                "js-delete" onclick="todo.splice(${i},1); displaytodo();">Delete</button></div>
                `;
            }
            document.querySelector(`.js-todo`).innerHTML
                = todoHTML;
        }


        function addTodo() {
            const name = document.querySelector('.inputelements').value;
            const dueDate = document.querySelector('.date-input').value;
            todo.push(
                {
                    //name : name,
                    name,
                    //dueDate : dueDate
                    dueDate
                }
            );
            console.log(todo);
            document.querySelector('.inputelements').value='';
            displaytodo();
        }