<script lang="ts">
  import InfoBox from '@/components/info-box/index.svelte'
  import CollectionLink from '@/components/collection-link/index.svelte'

  const content = `Clonecraft와 관련된 NFT 컬렉션과 Token 정보입니다.`
</script>

<div class="wrap">
  <InfoBox {content} />
  <div class="space" />
  <CollectionLink />
  <div class="space" />
</div>
