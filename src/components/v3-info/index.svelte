<script lang="ts">
  import { selectedAsset, selectedV3, selectedV3Original, selectedAssetList } from '@/stores/index'
  import { onMount } from 'svelte'
  import EquipConfirmModal from '@/components/modal/equip-confirm.svelte'
  import AssetInfoModal from '@/components/modal/asset-info.svelte'

  onMount(() => {
    $selectedV3 = {
      id: null,
    }
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
  })

  let equipModalState: boolean = false
  let assetModalState: boolean = false
  let selectedAssetInfoData: object

  function checkEquipModal() {
    if ($selectedAssetList.length > 0) {
      equipModalState = !equipModalState
    } else {
      alert('Please select nft')
    }
  }

  function numberCheck(num: number) {
    if (num >= 0) {
      return `+${num}`
    } else {
      return num
    }
  }

  function checkAssetEquiped(data: any) {
    if (data.id === 0) {
      alert('No asset equiped')
      return
    }
    assetModalState = !assetModalState
    selectedAssetInfoData = data
  }
</script>

<EquipConfirmModal
  bind:modalState={equipModalState}
  omegaId={$selectedV3.id}
  assetData={$selectedAssetList}
  on:click={checkEquipModal}
/>

<AssetInfoModal
  modalState={assetModalState}
  assetData={selectedAssetInfoData}
  on:click={() => {
    assetModalState = !assetModalState
  }}
/>

<div class="box">
  <div class="box-title">CxNxD Omega Clone Info</div>
  {#if $selectedV3.id !== null}
    <div class="box-content">
      <div class="box-content-images">
        <div class="image-title">{$selectedV3.name}</div>
        <div class="clone-wrap">
          <div class="v3-image">
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.background.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.situation.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.weapon.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.body.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.tattoo.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.mouth.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.eyes.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.clothes.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.hat.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.accessory.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.mask.thumbnail_base_image});"
            />
            <div
              class="v3-img"
              style="background-image: url({$selectedV3.effect.thumbnail_base_image});"
            />
          </div>
          <div class="grade">
            <div class="grade-text">{$selectedV3.level}</div>
            <div class="grade-title">Level</div>
          </div>
        </div>
        <div class="asset-images">
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.background.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.background)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.situation.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.situation)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.weapon.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.weapon)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.body.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.body)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.tattoo.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.tattoo)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.mouth.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.mouth)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.eyes.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.eyes)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.clothes.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.clothes)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.hat.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.hat)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.accessory.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.accessory)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.mask.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.mask)
            }}
          />
          <div
            class="asset-image-select"
            style="background-image: url({$selectedV3.effect.thumbnail_image});"
            on:click={() => {
              checkAssetEquiped($selectedV3.effect)
            }}
          />
        </div>
      </div>
      <div class="box-content-status">
        <div class="box-content-title">power level</div>
        <div class="type-item">
          <div class="type-title">
            {$selectedV3.power_level} ({$selectedV3Original.power_level}
            {numberCheck($selectedV3.power_level - $selectedV3Original.power_level)})
          </div>
        </div>
        <div class="line" />
        <div class="box-content-title">status</div>
        <div class="status-item">
          <div class="status-title">attack</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.attack} ({$selectedV3Original.attack}
                {numberCheck($selectedV3.attack - $selectedV3Original.attack)})
                <div class="status-amount" />
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.attack / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">defense</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.defense} ({$selectedV3Original.defense}
                {numberCheck($selectedV3.defense - $selectedV3Original.defense)})
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.defense / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">health</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.hp} ({$selectedV3Original.hp}
                {numberCheck($selectedV3.hp - $selectedV3Original.hp)})
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: {($selectedV3.hp / 12000) * 100}%;" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">luck</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.luck} ({$selectedV3Original.luck}
                {numberCheck($selectedV3.luck - $selectedV3Original.luck)})
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.luck / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">speed</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.speed} ({$selectedV3Original.speed}
                {numberCheck($selectedV3.speed - $selectedV3Original.speed)})
              </div>
              <div class="status-amount">60</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: {($selectedV3.speed / 60) * 100}%;" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">evade</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.evade} ({$selectedV3Original.evade}
                {numberCheck($selectedV3.evade - $selectedV3Original.evade)})
              </div>
              <div class="status-amount">100</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: {($selectedV3.evade / 100) * 100}%;" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">hitrate</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.hitrate} ({$selectedV3Original.hitrate}
                {numberCheck($selectedV3.hitrate - $selectedV3Original.hitrate)})
              </div>
              <div class="status-amount">100</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.hitrate / 100) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="line" />
        <div class="box-content-title">elements</div>
        <div class="status-item">
          <div class="status-title">divine</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.divine} ({$selectedV3Original.divine}
                {numberCheck($selectedV3.divine - $selectedV3Original.divine)})
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.divine / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">diabolic</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.diabolic} ({$selectedV3Original.diabolic}
                {numberCheck($selectedV3.diabolic - $selectedV3Original.diabolic)})
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.diabolic / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">ignis</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.ignis} ({$selectedV3Original.ignis}
                {numberCheck($selectedV3.ignis - $selectedV3Original.ignis)})
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.ignis / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">aqua</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.aqua} ({$selectedV3Original.aqua}
                {numberCheck($selectedV3.aqua - $selectedV3Original.aqua)})
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.aqua / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">aer</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.aer} ({$selectedV3Original.aer}
                {numberCheck($selectedV3.aer - $selectedV3Original.aer)})
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: {($selectedV3.aer / 12000) * 100}%;" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">terra</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">
                {$selectedV3.terra} ({$selectedV3Original.terra}
                {numberCheck($selectedV3.terra - $selectedV3Original.terra)})
              </div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div
                class="status-graph-amount"
                style="width: {($selectedV3.terra / 12000) * 100}%;"
              />
            </div>
          </div>
        </div>
        <!-- <div class="line" />
        <div class="box-content-title">skills</div>
        <div class="skill-wrap">
          <div class="skill" />
          <div class="skill" />
          <div class="skill" />
        </div> -->
      </div>
    </div>
  {:else}
    <!-- <div class="box-content" style="min-height: 554.976px;" /> -->
    <div class="box-content">
      <div class="box-content-images">
        <div class="image-title">CxNxD Omega</div>
        <div class="clone-wrap">
          <div class="v3-image">
            <div class="sample" />
          </div>
          <div class="grade">
            <div class="grade-text">0</div>
            <div class="grade-title">Level</div>
          </div>
        </div>
        <div class="asset-images">
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
          <div class="asset-image" />
        </div>
      </div>
      <div class="box-content-status">
        <div class="box-content-title">power level</div>
        <div class="type-item">
          <div class="type-title">0</div>
        </div>
        <div class="line" />
        <div class="box-content-title">status</div>
        <div class="status-item">
          <div class="status-title">attack</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">defense</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">health</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">luck</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">speed</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">60</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">evade</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">100</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">hitrate</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">100</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="line" />
        <div class="box-content-title">elements</div>
        <div class="status-item">
          <div class="status-title">divine</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">diabolic</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">ignis</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">aqua</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">aer</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <div class="status-item">
          <div class="status-title">terra</div>
          <div class="status-content-wrap">
            <div class="amount-wrap">
              <div class="status-amount">0</div>
              <div class="status-amount">12000</div>
            </div>
            <div class="status-graph">
              <div class="status-graph-amount" style="width: 0%" />
            </div>
          </div>
        </div>
        <!-- <div class="line" />
        <div class="box-content-title">skills</div>
        <div class="skill-wrap">
          <div class="skill" />
          <div class="skill" />
          <div class="skill" />
        </div> -->
      </div>
    </div>
  {/if}
  <div class="button-wrap">
    <div class="normal-button" on:click={checkEquipModal}>Equip</div>
  </div>
</div>

<style lang="scss">
  /* .loading {
    width: 188px;
    height: 188px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100000;
  } */
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
      .v3-img {
        position: absolute;
        width: 186px;
        height: 186px;
        object-fit: cover;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .sample {
        width: 188px;
        height: 186px;
        background-color: $inbox-color;
      }
    }

    .asset-images {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 376px;
      flex-wrap: wrap;
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
        cursor: pointer;
      }
      .asset-image-select:hover {
        border: 3px solid $active-color;
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
    .status-item {
      display: flex;
      margin-bottom: 15px;
      .status-title {
        width: 20%;
        display: flex;
        align-items: flex-end;
        color: $inline-color;
      }
      .status-content-wrap {
        width: 80%;
        .amount-wrap {
          display: flex;
          justify-content: space-between;
          .status-amount {
            font-size: 12px;
          }
        }
        .status-graph {
          display: flex;
          width: 100%;
          height: 15px;
          border: 1px solid $inline-color;
          box-sizing: border-box;
          background-color: $inbox-color;
          .status-graph-amount {
            background-color: $text-color;
          }
        }
      }
    }
  }
</style>
