<script lang="ts">
  import { isConnect, myV3List, selectedAsset, selectedAssetList } from '@/stores/index'
  import { selectedV3, selectedV3Original } from '@/stores/index'
  import { METADATA_API_BASE_URI } from '@/constants/index'
  import V3InteractiveModal from '@/components/modal/v3-interactive-modal.svelte'

  let v3InteractiveModalState: boolean = false
  let selectedV3Data: any = null

  async function select(id: any) {
    const data = await (await fetch(`${METADATA_API_BASE_URI}/v3/metadata/${id}`)).json()
    $selectedV3 = { ...data }
    $selectedV3Original = { ...data }
    $selectedAssetList = []
    $selectedAsset = {
      background: {
        id: null,
      },
      situation: {
        id: null,
      },
      weapon: {
        id: null,
      },
      body: {
        id: null,
      },
      tattoo: {
        id: null,
      },
      mouth: {
        id: null,
      },
      eyes: {
        id: null,
      },
      clothes: {
        id: null,
      },
      hat: {
        id: null,
      },
      accessory: {
        id: null,
      },
      mask: {
        id: null,
      },
      effect: {
        id: null,
      },
    }
  }
</script>

<V3InteractiveModal
  bind:modalState={v3InteractiveModalState}
  v3Data={selectedV3Data}
  on:click={() => {
    v3InteractiveModalState = !v3InteractiveModalState
  }}
/>

<div class="box">
  <div class="box-title">CxNxD Omega Clone List</div>
  {#if $isConnect === true}
    <div class="box-content">
      {#each $myV3List as item}
        <div class="omega-wrap">
          <div class="omega-frame">
            <!-- svelte-ignore a11y-missing-attribute -->
            <iframe src={item.thumbnail_image} frameborder="0"></iframe>
            {#if $selectedV3.id === item.id}
              <div class="omega-image">
                <div class="selected-equip-text-wrap">
                  <div class="equip-text">selected</div>
                </div>
              </div>
            {:else}
              <div class="omega-image" on:click={() => select(item.id)}>
                <div class="equip-text-wrap">
                  <div class="equip-text">is Select?</div>
                </div>
              </div>
            {/if}
            <div class="omega-title">CxNxD Omega</div>
            <div class="omega-number">#{item.id}</div>
            <button
              class="normal-button"
              on:click={() => {
                selectedV3Data = item
                v3InteractiveModalState = !v3InteractiveModalState
              }}>info</button
            >
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="box-content" style="height: 240px;">please connect wallet</div>
  {/if}
</div>

<style lang="scss">
  .box-content::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .box-content {
    overflow: scroll;
    flex-wrap: wrap;
    max-height: 260px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .equip-text {
    user-select: none;
  }
  .omega-wrap {
    min-width: 20%;
    padding: 5px;
    padding-bottom: 10px;
    box-sizing: border-box;
    .omega-frame {
      border: 1px solid $inline-color;
      box-sizing: border-box;
      position: relative;
      .normal-button {
        padding: 4px;
        width: 100%;
        border: none;
        border-top: 1px solid $inline-color;
        box-sizing: border-box;
      }
      .omega-title {
        font-size: 12px;
        max-width: 178px;
        padding: 6px;
        box-sizing: border-box;
      }
      .omega-number {
        font-size: 12px;
        padding: 6px;
        box-sizing: border-box;
        text-align: end;
      }
      .omega-image {
        min-width: 178px;
        height: 178px;
        width: 178px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        box-sizing: border-box;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        .equip-text-wrap {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          .equip-text {
            display: none;
          }
        }
        .selected-equip-text-wrap {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.8);
          .equip-text {
            display: block;
            opacity: 1;
          }
        }
      }
      .omega-image:hover {
        .equip-text-wrap {
          background-color: rgba(0, 0, 0, 0.8);
          .equip-text {
            display: block;
            opacity: 1;
          }
        }
      }
    }
  }

  iframe {
    width: 178px;
    height: 178px;
    border: none;
  }
</style>
