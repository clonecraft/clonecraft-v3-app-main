<script lang="ts">
  import { beforeUpdate } from 'svelte'
  import { getEquipState } from '@/blockchain/contracts/Equip'
  import UnequipConfirmModal from './unequip-confirm.svelte'

  export let modalState: boolean
  export let v3Data: any

  let confirmModalState: boolean = false
  let thisEquipState: any = null
  let selectedUnequipAssetIds: any = []

  let selectedAsset = {
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

  beforeUpdate(async () => {
    if (modalState && selectedUnequipAssetIds.length === 0) {
      thisEquipState = await getEquipState(v3Data.id)
    } else if (!modalState) {
      selectedUnequipAssetIds = []
      selectedAsset = {
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
  })

  function equipAssetNoncheck(data: any) {
    return data.thumbnail_image
  }

  function dataIdCheck(thisData: any) {
    if (parseInt(thisEquipState[thisData.asset_type]) === 0) {
      alert('Unable to unequip.')
      return false
    } else if (thisData.asset_type === 'none') {
      alert('No assets equiped.')
      return false
    } else {
      selectedUnequipAssetIds.push(thisData.id)
      console.log(selectedUnequipAssetIds)
      return true
    }
  }
</script>

{#if modalState}
  <UnequipConfirmModal
    bind:modalState={confirmModalState}
    omegaId={v3Data.id}
    assetData={selectedUnequipAssetIds}
    bind:parentModalState={modalState}
    on:click={() => {
      confirmModalState = !confirmModalState
    }}
  />
  <div class="modal-background" on:click|self>
    <div class="box">
      <div class="box-title">CxNxD Omega Clone Interactive UI</div>
      <div class="box-content">
        <div class="box-content-images">
          <div class="image-title">{v3Data.name}</div>
          <div class="clone-wrap">
            <div class="v3-image">
              <div class="v3-image" style="background-image: url({v3Data.thumbnail_image});" />
            </div>
            <div class="grade">
              <div class="grade-text">{v3Data.level}</div>
              <div class="grade-title">Level</div>
            </div>
          </div>
          <div class="asset-images">
            {#if selectedAsset.background.id === v3Data.background.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.background)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.background)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.background)
                  if (thisCheck) {
                    selectedAsset.background.id = v3Data.background.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.situation.id === v3Data.situation.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.situation)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.situation)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.situation)
                  if (thisCheck) {
                    selectedAsset.situation.id = v3Data.situation.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.weapon.id === v3Data.weapon.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.weapon)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.weapon)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.weapon)
                  if (thisCheck) {
                    selectedAsset.weapon.id = v3Data.weapon.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.body.id === v3Data.body.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.body)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.body)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.body)
                  if (thisCheck) {
                    selectedAsset.body.id = v3Data.body.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.tattoo.id === v3Data.tattoo.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.tattoo)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.tattoo)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.tattoo)
                  if (thisCheck) {
                    selectedAsset.tattoo.id = v3Data.tattoo.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.mouth.id === v3Data.mouth.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.mouth)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.mouth)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.mouth)
                  if (thisCheck) {
                    selectedAsset.mouth.id = v3Data.mouth.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.eyes.id === v3Data.eyes.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.eyes)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.eyes)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.eyes)
                  if (thisCheck) {
                    selectedAsset.eyes.id = v3Data.eyes.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.clothes.id === v3Data.clothes.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.clothes)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.clothes)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.clothes)
                  if (thisCheck) {
                    selectedAsset.clothes.id = v3Data.clothes.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.hat.id === v3Data.hat.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.hat)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.hat)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.hat)
                  if (thisCheck) {
                    selectedAsset.hat.id = v3Data.hat.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.accessory.id === v3Data.accessory.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.accessory)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.accessory)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.accessory)
                  if (thisCheck) {
                    selectedAsset.accessory.id = v3Data.accessory.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.mask.id === v3Data.mask.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.mask)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.mask)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.mask)
                  if (thisCheck) {
                    selectedAsset.mask.id = v3Data.mask.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
            {#if selectedAsset.effect.id === v3Data.effect.id}
              <div
                class="asset-image-select"
                style="background-image: url({equipAssetNoncheck(v3Data.effect)});"
              >
                <div class="selected">Selected</div>
              </div>
            {:else}
              <div
                class="asset-image"
                style="background-image: url({equipAssetNoncheck(v3Data.effect)});"
                on:click={() => {
                  const thisCheck = dataIdCheck(v3Data.effect)
                  if (thisCheck) {
                    selectedAsset.effect.id = v3Data.effect.id
                  }
                }}
              >
                <div class="isSelect">is Select?</div>
              </div>
            {/if}
          </div>
        </div>
        <div class="box-content-status">
          <div class="box-content-title">Omega Image Save</div>
          <div class="type-item">
            <div class="type-title">
              <a href={v3Data.image + '&size=original'} title={v3Data.name} target="_blank"> click to download </a>
            </div>
          </div>
          <div class="line" />
          <div class="box-content-title">Level UP</div>
          <div class="type-item">
            <div class="type-title">Coming soon</div>
          </div>
          <div class="line" />
          <div class="box-content-title">Skill Setting</div>
          <div class="type-item">
            <div class="type-title">Coming soon</div>
          </div>
          <div class="line" />
        </div>
      </div>
      <div class="button-wrap">
        <div
          class="normal-button"
          on:click={() => {
            if (selectedUnequipAssetIds.length > 0) {
              confirmModalState = true
            } else {
              alert('Please select unequip asset')
            }
          }}
        >
          Unequip
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .box {
    min-width: 1000px;
    max-width: 1000px;
  }
  .button-wrap {
    .normal-button {
      border: none;
      border-top: 1px solid $outline-color;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      font-size: 20px;
      font-family: 'Trajan Pro Bold';
    }
  }
  .box-content-images {
    width: 40%;
    display: flex;
    flex-direction: column;
    .clone-wrap {
      display: flex;
      .grade {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .grade-text {
          font-size: 40px;
          font-family: 'Trajan Pro Bold';
        }
        .grade-title {
          font-family: 'Trajan Pro Bold';
          font-size: 16px;
        }
      }
    }
    .image-title {
      font-family: 'Trajan Pro Bold';
      font-size: 24px;
      margin-bottom: 10px;
    }
    .v3-image {
      width: 188px;
      height: 188px;
      border: 1px solid $inline-color;
      box-sizing: border-box;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .asset-images {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 376px;
      flex-wrap: wrap;
      .asset-image:hover {
        .isSelect {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.8);
          cursor: pointer;
        }
      }
      .asset-image {
        display: flex;
        flex-flow: wrap;
        flex-wrap: wrap;
        width: 25%;
        border: 1px solid $inline-color;
        box-sizing: border-box;
        width: 94px;
        height: 94px;
        background-color: $inbox-color;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        .isSelect {
          display: none;
        }
      }
      .asset-image-select {
        display: flex;
        flex-flow: wrap;
        flex-wrap: wrap;
        width: 25%;
        border: 1px solid $inline-color;
        box-sizing: border-box;
        width: 94px;
        height: 94px;
        background-color: $inbox-color;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .selected {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.8);
      }
    }
  }

  .box-content-status::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .box-content-status {
    width: 60%;
    max-height: 500px;
    display: flex;
    overflow: scroll;
    flex-direction: column;
    margin-left: 20px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    .type-item {
      display: flex;
      justify-content: center;
      .type-title {
        font-size: 24px;
        margin-bottom: 10px;
        a {
          color: $inline-color;
        }
      }
    }
    /* .skill-wrap {
      display: flex;
      .skill {
        width: 110px;
        height: 100px;
        margin-right: 10px;
        background-image: url('/images/skill-sample.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    } */
    .box-content-title {
      font-family: 'Trajan Pro Bold';
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
</style>
