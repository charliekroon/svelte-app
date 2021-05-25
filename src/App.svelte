<!-- App.svelte -->
<script>
  import Todos from "./components/Todos.svelte";

  let todos = [
    { id: 1, name: "Look for a dog", completed: true },
    { id: 2, name: "Pet a dog", completed: true },
    { id: 3, name: "Pet another dog", completed: false },
  ];
</script>

<Todos {todos} />
