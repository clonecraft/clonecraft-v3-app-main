<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'

  import Header from '@/components/header/index.svelte'
</script>

<Header />

<div class="background">
  <div class="background-opacity">
    <Router {routes} />
    <div class="none-pc">
      <div>Unsupported window size.</div>
      <div>Please increase the size of your browser.</div>
    </div>
  </div>
</div>
