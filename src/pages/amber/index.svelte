<script lang="ts">
  import InfoBox from '@/components/info-box/index.svelte'
  import MyCrypto from '@/components/my-crypto/index.svelte'
  import AmberSwap from '@/components/amber-swap/index.svelte'

  const content = `Amber는 Nectar와 Mix 토큰의 가치를 1:1로 묶어서 발행하는 토큰입니다. Nectar와 Mix는 클레이스왑 거래소에 있는 
Nectar-Mix 풀에 예치됩니다. Amber 토큰만 있으면 언제든지 다시 Nectar와 Mix 토큰으로 교환할 수 있습니다.
Amber 토큰은 향후 V3 클론에 장착할 수 있는 에셋 NFT 장착과 클론크래프트에서 사용됩니다.`
</script>

<div class="wrap">
  <InfoBox {content} />
  <div class="space" />
  <MyCrypto />
  <div class="space" />
  <AmberSwap />
  <div class="space" />
</div>
