<!-- src/routes/+page.svelte -->
<script>
  export let data;
  const { posts } = data;
</script>

<main>
  <h1>My Blog</h1>
  {#if posts.length > 0}
    {#each posts as post}
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <small
          >Published on {new Date(post.created_at).toLocaleDateString()}</small
        >
      </article>
    {/each}
  {:else}
    <p>No posts available.</p>
  {/if}
</main>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  article {
    margin-bottom: 2rem;
  }
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
  h2 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
</style>
