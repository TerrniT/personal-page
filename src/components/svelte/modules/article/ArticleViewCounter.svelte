<script>
  import { onMount } from 'svelte'

  /**
   * @type {string}
   */
  export let slug = ''

  /**
   * @type {boolean}
   */
  let isLoading = false

  /**
   * @type {number}
   */
  let views = 0

  onMount(async () => {
    if (slug && slug.trim() !== '') {
      const parsedSlug = slug.replace('/', '-')
      try {
        isLoading = true
        const response = await fetch(`/api/articles/views/${parsedSlug}.json`)

        const stats = await response.json()
        views = stats.views
      } catch (e) {
        console.error('[Error]: ArticleViewCounter', e)
      } finally {
        isLoading = false
      }
    }
  })
</script>

<div class="flex items-center animate">
  <slot />
  <span class="px-1 mx-1 text-sm text-muted-foreground">{views}</span>
</div>
