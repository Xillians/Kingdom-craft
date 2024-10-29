<script>
  export let title = "Kingdom Craft";
</script>

<main>
  <header>
    <h1>{title}</h1>
  </header>
  <section class="container">
    <slot></slot>
  </section>
  <footer>
    <p>&copy; {new Date().getFullYear()} Kingdom Craft. All rights reserved.</p>
  </footer>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    color: white;
    padding: 1rem;
  }
  section {
    flex: 1;
    padding: 1rem;
  }

  footer {
    color: white;
    text-align: center;
    padding: 1rem;
  }
</style>