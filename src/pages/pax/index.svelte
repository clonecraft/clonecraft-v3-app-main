<script lang="ts">
  import InfoBox from '@/components/info-box/index.svelte'
  import PaxInfo from '@/components/pax-info/index.svelte'
  import PaxSwap from '@/components/pax-swap/index.svelte'

  const content = `PAX는 Clones Never Die 프로젝트의 토큰입니다. 폴리곤 체인에서 발행됐으며 가이아 브릿지를 통해 KPAX로 교환할 수 있습니다. 
프로젝트에서 PAX토큰은 더이상 사용되지 않으며, Nectar 토큰이 사용됩니다.
KPAX 토큰을 Nectar 토큰과 1:1로 스왑할 수 있습니다. 지갑을 연결하고 SWAP 버튼을 눌러주세요.`
</script>

<div class="wrap">
  <InfoBox {content} />
  <div class="space" />
  <PaxInfo />
  <div class="space" />
  <PaxSwap />
</div>
