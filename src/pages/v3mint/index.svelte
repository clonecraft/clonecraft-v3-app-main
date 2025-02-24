<script lang="ts">
  import InfoBox from '@/components/info-box/index.svelte'
  import V3Mint from '@/components/v3-mint/index.svelte'
  import V3MintFree from '@/components/v3-mint-free/index.svelte'

  const content = `CxNxD Omega는 Clonecraft 게임에 사용될 예정인 NFT입니다. 민팅 가격은 1개에 2 klay 입니다.
하루에 선착순으로 총 10개 무료민팅이 가능하며, 하루에 지갑당 9개 유료민팅이 가능합니다.
CxNxD Asset NFT와 Omega skill NFT로 CxNxD Omega 메타데이터를 변경할 수 있습니다.`
</script>

<div class="wrap">
  <InfoBox {content} />
  <div class="space" />
  <V3Mint />
  <div class="space" />
  <V3MintFree />
  <div class="space" />
</div>
