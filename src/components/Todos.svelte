<script>
    let todos = [
        { id: 1, name: "Create a Svelte starter app", completed: true },
        { id: 2, name: "Create your first component", completed: true },
        { id: 3, name: "Complete the rest of the tutorial", completed: false },
    ];

    let totalTodos = todos.length;
    let completedTodos = todos.filter((todo) => todo.completed).length;
</script>

<!-- Todos.svelte -->
<div class="todoapp stack-large">
    <!-- NewTodo -->
    <form>
        <h2 class="label-wrapper">
            <label for="todo-0" class="label__lg">
                What needs to be done?
            </label>
        </h2>
        <input
            type="text"
            id="todo-0"
            autocomplete="off"
            class="input input__lg"
        />
        <button type="submit" disabled="" class="btn btn__primary btn__lg">
            Add
        </button>
    </form>

    <!-- Filter -->
    <div class="filters btn-group stack-exception">
        <button class="btn toggle-btn" aria-pressed="true">
            <span class="visually-hidden">Show</span>
            <span>All</span>
            <span class="visually-hidden">tasks</span>
        </button>
        <button class="btn toggle-btn" aria-pressed="false">
            <span class="visually-hidden">Show</span>
            <span>Active</span>
            <span class="visually-hidden">tasks</span>
        </button>
        <button class="btn toggle-btn" aria-pressed="false">
            <span class="visually-hidden">Show</span>
            <span>Completed</span>
            <span class="visually-hidden">tasks</span>
        </button>
    </div>

    <!-- TodosStatus -->
    <h2 id="list-heading">
        {completedTodos} out of {totalTodos} items completed
    </h2>

    <!-- Todos -->
    <ul>
        {#each todos as todo, index (todo.id)}
            <li>
                <input type="checkbox" checked={todo.completed} />
                {index}. {todo.name} (id: {todo.id})
            </li>
        {:else}
            Nothing to do here!
        {/each}
    </ul>

    <hr />

    <!-- MoreActions -->
    <div class="btn-group">
        <button type="button" class="btn btn__primary">Check all</button>
        <button type="button" class="btn btn__primary">Remove completed</button>
    </div>
</div>
