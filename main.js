// window.addEventListener('load', ()=>{  
// is an event that waits for the page to load
window.addEventListener('load', ()=>{
    // declare variables to get the "form" from the elements
    // form, input and the list element of 'tasks' <div id="tasks">
    // where the added tasks appear
    const form = document.querySelector('#new-add-task');
    const input = document.querySelector('#task-input');
    const list_el = document.querySelector('#tasks');
    //when submiting the "form" the page will be forced to not refresh
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        // creating a variable to store the value of the user`s input
        const task = input.value;
        // verifying if the inpute value = null 
        if(!task){
            // if task = null alerts to inpute a value
            alert("Fill the required spaces");
            // return to not proceed the code returns to start point
            return;
        }else{ // else continues
            console.log('yay');
        }
        // creates a element "<div>" with the class "task"
        // refere to index.html to see the "dummy task"
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        // creates a element "<div>" with the class "content"
        // refere to index.html to see the "dummy task"
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        // appends task_content_el to task_el
        // .appendChild creates a "chid" of a "parent"
        // "nested"
        task_el.appendChild(task_content_el);
        // creates a element "<div>" with the class "text"
        // refere to index.html to see the "dummy task"
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        list_el.appendChild(task_el);
        })
})
