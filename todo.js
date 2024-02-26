const todo = (selector) => {
    const todoContainer = document.querySelector(selector);
    if (!todoContainer) return;
    const todoForm = todoContainer.querySelector('.todo-form');
    const text = todoForm.querySelector('input[type=text]');
    const date = todoForm.querySelector('input[type=datetime-local]');
    const todos = todoContainer.querySelector('.todo-items');
    const todosArr = [];

    const timer = (item, time) => {
        const currentTime = Date.now();
        const dateEnd = new Date(time).getTime();
        const timeToEnd = dateEnd - currentTime;
        if (timeToEnd <= 0){
            item.innerText = 'Время вышло';
            return;
        }
        let day = Math.floor(timeToEnd / 1000);
        const sec = day % 60;
        day = Math.floor(day / 60);
        const min = day % 60;
        day = Math.floor(day / 60);
        const h = day % 24;
        day = Math.floor(day / 24);
        const timeString = `${day} - дней, ${h < 10 ? `0${h}` : h}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
        item.innerText = timeString;
        setTimeout(() => timer(item, time), 1000);
    }

    const createToDo = (todoData) => {
        const item = document.createElement('div');
        item.classList.add('todo-item');
        const text = document.createElement('p');
        text.classList.add('text');
        const date = document.createElement('p');
        date.classList.add('date');
        text.innerText = todoData.text;
        timer(date, todoData.date)
        item.append(text, date);
        todos.append(item);
    }

    const getStore = () => {
        if (localStorage.getItem('todo')){
            const todos = JSON.parse(localStorage.getItem('todo'));
            todos.forEach (item => createToDo(item));
        }
    }

    const getToDo = (event) => {
        event.preventDefault();
        const todoText = text.value;
        const todoDate = date.value;
        createToDo({text: todoText, date: todoDate})
    }

    todoForm.addEventListener('submit', getToDo);
    getStore();
}

todo('.todo-container');