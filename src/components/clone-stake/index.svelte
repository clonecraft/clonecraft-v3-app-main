<script lang="ts">
</script>

<div class="box">
  <div class="box-title">CxNxD Nectar Stake</div>
  <div class="box-content">
    <div class="button-wrap">
      <button class="normal-button">CxNxD Kings</button>
      <button class="normal-button">CxNxD Mu</button>
    </div>
    <div class="content-wrap">
      <div class="content">Stakable NFT : 10</div>
    </div>
    <div class="content-wrap" style="padding: 0px 20px;">
      <div class="line" />
    </div>
    <div class="nft-wrap">
      <div class="omega-wrap">
        <div class="omega-frame">
          <div class="omega-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Select?</div>
            </div>
          </div>
          <div class="omega-title">CxNxD Omega</div>
          <div class="omega-number">#2022</div>
        </div>
      </div>
      <div class="omega-wrap">
        <div class="omega-frame">
          <div class="omega-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Select?</div>
            </div>
          </div>
          <div class="omega-title">CxNxD Omega</div>
          <div class="omega-number">#2022</div>
        </div>
      </div>
      <div class="omega-wrap">
        <div class="omega-frame">
          <div class="omega-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Select?</div>
            </div>
          </div>
          <div class="omega-title">CxNxD Omega</div>
          <div class="omega-number">#2022</div>
        </div>
      </div>
      <div class="omega-wrap">
        <div class="omega-frame">
          <div class="omega-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Select?</div>
            </div>
          </div>
          <div class="omega-title">CxNxD Omega</div>
          <div class="omega-number">#2022</div>
        </div>
      </div>
      <div class="omega-wrap">
        <div class="omega-frame">
          <div class="omega-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Select?</div>
            </div>
          </div>
          <div class="omega-title">CxNxD Omega</div>
          <div class="omega-number">#2022</div>
        </div>
      </div>
      <div class="omega-wrap">
        <div class="omega-frame">
          <div class="omega-image">
            <div class="equip-text-wrap">
              <div class="equip-text">is Select?</div>
            </div>
          </div>
          <div class="omega-title">CxNxD Omega</div>
          <div class="omega-number">#2022</div>
        </div>
      </div>
    </div>
    <div class="big-button-wrap">
      <button class="normal-button">Staking Nectar to selected NFT</button>
      <button class="normal-button">Staking Nectar to all NFT</button>
    </div>
  </div>
</div>

<style lang="scss">
  .box-content {
    padding: 0px;
    flex-direction: column;
  }

  .button-wrap {
    display: flex;
    width: 100%;
    .normal-button {
      width: 50%;
    }
  }

  .big-button-wrap {
    display: flex;
    width: 100%;
    .normal-button {
      font-size: 20px;
      padding: 10px;
      width: 50%;
      font-family: 'Trajan Pro Bold';
    }
  }

  .content-wrap {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    line-height: 40px;
    padding: 20px;
  }

  .nft-wrap {
    display: flex;
    padding: 20px;
    overflow: scroll;
    flex-wrap: wrap;
    max-height: 520px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .omega-wrap {
    min-width: 20%;
    padding: 6px;
    box-sizing: border-box;
    .omega-frame {
      border: 1px solid $inline-color;
      box-sizing: border-box;
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
        width: 100%;
        background-image: url('/images/clone-sample.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        box-sizing: border-box;
        cursor: pointer;
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
</style>
