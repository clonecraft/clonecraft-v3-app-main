<script lang="ts">
  export let modalState: boolean
  export let assetData: any
</script>

{#if modalState}
  <div class="modal-background" on:click|self>
    <div class="box">
      <div class="box-title">CxNxD Asset Info</div>
      <div class="box-content">
        <div class="box-content-images">
          <div class="image-title">{assetData.name}</div>
          <div class="clone-wrap">
            <div class="v3-image">
              <div class="v3-img" style="background-image: url({assetData.thumbnail_image});" />
            </div>
            <div class="grade">
              <div class="grade-text">{assetData.upgrade_level}</div>
              <div class="grade-title">Upgrade Level</div>
            </div>
          </div>
          <div class="line" />
          <div class="asset-infos">
            <div class="asset-info-wrap">
              <div class="asset-info-title">Asset Id: {assetData.asset_id}</div>
            </div>
            <div class="asset-info-wrap">
              <div class="asset-info-title">grade: {assetData.asset_grade}</div>
            </div>
            <div class="asset-info-wrap">
              <div class="asset-info-title">type: {assetData.asset_type}</div>
            </div>
            <div class="asset-info-wrap">
              <div class="asset-info-title">series: {assetData.asset_series}</div>
            </div>
            <div class="asset-info-wrap">
              <div class="description-wrap">
                {assetData.description}
              </div>
            </div>
          </div>
        </div>
        <div class="box-content-status">
          <div class="box-content-title">power level</div>
          <div class="type-item">
            <div class="type-title">{assetData.power_level}</div>
          </div>
          <div class="line" />
          <div class="box-content-title">status</div>
          <div class="status-item">
            <div class="status-title">attack</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.attack}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div
                  class="status-graph-amount"
                  style="width: {(assetData.attack / 1000) * 100}%;"
                />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">defense</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.defense}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div
                  class="status-graph-amount"
                  style="width: {(assetData.defense / 1000) * 100}%;"
                />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">health</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.hp}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div class="status-graph-amount" style="width: {(assetData.hp / 1000) * 100}%;" />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">luck</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.luck}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div class="status-graph-amount" style="width: {(assetData.luck / 1000) * 100}%;" />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">speed</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.speed}</div>
                <div class="status-amount">5</div>
              </div>
              <div class="status-graph">
                <div class="status-graph-amount" style="width: {(assetData.speed / 5) * 100}%;" />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">evade</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.evade}</div>
                <div class="status-amount">8</div>
              </div>
              <div class="status-graph">
                <div class="status-graph-amount" style="width: {(assetData.evade / 8) * 100}%;" />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">hitrate</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.hitrate}</div>
                <div class="status-amount">8</div>
              </div>
              <div class="status-graph">
                <div class="status-graph-amount" style="width: {(assetData.hitrate / 8) * 100}%;" />
              </div>
            </div>
          </div>
          <div class="line" />
          <div class="box-content-title">elements</div>
          <div class="status-item">
            <div class="status-title">divine</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.divine}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div
                  class="status-graph-amount"
                  style="width: {(assetData.divine / 1000) * 100}%;"
                />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">diabolic</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.diabolic}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div
                  class="status-graph-amount"
                  style="width: {(assetData.diabolic / 1000) * 100}%;"
                />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">ignis</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.ignis}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div
                  class="status-graph-amount"
                  style="width: {(assetData.ignis / 1000) * 100}%;"
                />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">aqua</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.aqua}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div class="status-graph-amount" style="width: {(assetData.aqua / 1000) * 100}%;" />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">aer</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.aer}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div class="status-graph-amount" style="width: {(assetData.aer / 1000) * 100}%;" />
              </div>
            </div>
          </div>
          <div class="status-item">
            <div class="status-title">terra</div>
            <div class="status-content-wrap">
              <div class="amount-wrap">
                <div class="status-amount">{assetData.terra}</div>
                <div class="status-amount">1000</div>
              </div>
              <div class="status-graph">
                <div
                  class="status-graph-amount"
                  style="width: {(assetData.terra / 1000) * 100}%;"
                />
              </div>
            </div>
          </div>
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
    }

    .asset-infos {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 376px;
      flex-wrap: wrap;
      .asset-info-wrap {
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 100%;
        padding: 0px 0px 10px 0px;
        .asset-info-title {
          font-family: 'Trajan Pro Bold';
          font-size: 18px;
          font-weight: bold;
        }
        .description-wrap {
          width: 100%;
          height: 120px;
          max-height: 120px;
          font-size: 16px;
          background-color: $inbox-color;
          border: 1px solid $inline-color;
          padding: 10px;
          overflow: scroll;
          box-sizing: border-box;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
          }
        }
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
