<template>
  <div class="container-center-horizontal">
    <div class="desktop-1 screen">
      <div class="overlap-group" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
        <div class="flex-row">
          <div class="jobs ibmplexsansthailooped-normal-white-15px">
            <span class="ibmplexsansthailooped-normal-white-15px">{{ spanText1 }}</span>
          </div>
          <div class="overlap-group5 ibmplexsansthailooped-normal-white-15px">
            <div class="about">
              <span class="ibmplexsansthailooped-normal-white-15px">{{ spanText2 }}</span>
            </div>
            <div class="candidates">
              <span class="ibmplexsansthailooped-normal-white-15px">{{ spanText3 }}</span>
            </div>
          </div>
          <div class="clients ibmplexsansthailooped-normal-white-15px">
            <span class="ibmplexsansthailooped-normal-white-15px">{{ spanText4 }}</span>
          </div>
          <div class="overlap-group2 ibmplexsansthailooped-normal-white-15px">
            <div class="join-us">
              <span class="ibmplexsansthailooped-normal-white-15px">{{ spanText5 }}</span>
            </div>
            <div class="insights">
              <span class="ibmplexsansthailooped-normal-white-15px">{{ spanText6 }}</span>
            </div>
            <div class="contact-us">
              <span class="ibmplexsansthailooped-normal-white-15px">{{ spanText7 }}</span>
            </div>
          </div>
          <div class="overlap-group7">
            <div class="login ibmplexsansthailooped-normal-black-15px">
              <span class="ibmplexsansthailooped-normal-black-15px">{{ spanText8 }}</span>
            </div>
          </div>
          <div class="overlap-group6">
            <div class="place ibmplexsansthailooped-normal-white-15px">
              <span class="ibmplexsansthailooped-normal-white-15px">{{ spanText9 }}</span>
            </div>
          </div>
        </div>
        <h1 class="title ibmplexsansthailooped-bold-white-47px">
          <span class="ibmplexsansthailooped-bold-white-47px">{{ spanText10 }}</span>
        </h1>
        <div class="overlap-group-container">
          <div class="overlap-group8">
            <div class="keyword valign-text-middle ibmplexsansthailooped-extra-light-black-16px">
              <span
                ><span class="ibmplexsansthailooped-extra-light-black-16px">{{ spanText11 }}</span>
              </span>
            </div>
          </div>
          <div class="overlap-group4">
            <div class="location valign-text-middle ibmplexsansthailooped-extra-light-black-16px">
              <span
                ><span class="ibmplexsansthailooped-extra-light-black-16px">{{ spanText12 }}</span>
              </span>
            </div>
          </div>
          <div class="overlap-group3">
            <div class="search-jobs valign-text-middle ibmplexsansthailooped-normal-white-16px">
              <span
                ><span class="ibmplexsansthailooped-normal-white-16px">{{ spanText13 }}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="flex-col">
          <div class="flex-row-1">
            <img class="arrow-1" :src="arrow1" />
            <div class="ellipse1 border-1px-white"></div>
            <div class="ellipse2 border-1px-white"></div>
            <div class="ellipse3 border-1px-white"></div>
            <div class="ellipse4 border-1px-white"></div>
            <div class="ellipse5 border-1px-white"></div>
            <img class="arrow-2" :src="arrow2" />
          </div>
          <div class="ellipse-container ibmplexsansthailooped-normal-white-16px">
            <div class="ellipse1_text valign-text-middle">
              <span
                ><span class="ibmplexsansthailooped-normal-white-16px">{{ spanText14 }}</span>
              </span>
            </div>
            <div class="ellipse2_text valign-text-middle">
              <span
                ><span class="ibmplexsansthailooped-normal-white-16px">{{ spanText15 }}</span>
              </span>
            </div>
            <div class="ellipse3_text valign-text-middle">
              <span
                ><span class="ibmplexsansthailooped-normal-white-16px">{{ spanText16 }}</span>
              </span>
            </div>
            <div class="ellipse4_text valign-text-middle">
              <span
                ><span class="ibmplexsansthailooped-normal-white-16px">{{ spanText17 }}</span>
              </span>
            </div>
            <div class="ellipse5_text valign-text-middle">
              <span
                ><span class="ibmplexsansthailooped-normal-white-16px">{{ spanText18 }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Desktop1",
  props: [
    "overlapGroup",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "arrow1",
    "arrow2",
    "spanText14",
    "spanText15",
    "spanText16",
    "spanText17",
    "spanText18",
  ],
};
</script>

<style>
.desktop-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 1024px;
  width: 1440px;
}

.overlap-group {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 784px;
  width: 1440px;
}

.flex-row {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  height: 65px;
  margin-right: 33px;
  margin-top: 36px;
  min-width: 866px;
}

.jobs {
  letter-spacing: 0;
  min-height: 48px;
  width: 69px;
}

.overlap-group5 {
  height: 48px;
  position: relative;
  width: 178px;
}

.about {
  left: 0;
  letter-spacing: 0;
  position: absolute;
  top: 0;
  width: 79px;
}

.candidates {
  left: 72px;
  letter-spacing: 0;
  position: absolute;
  top: 0;
  width: 106px;
}

.clients {
  letter-spacing: 0;
  min-height: 48px;
  width: 79px;
}

.overlap-group2 {
  height: 48px;
  margin-left: 2px;
  position: relative;
  width: 279px;
}

.join-us {
  left: 0;
  letter-spacing: 0;
  position: absolute;
  top: 0;
  width: 106px;
}

.insights {
  left: 83px;
  letter-spacing: 0;
  position: absolute;
  top: 0;
  width: 106px;
}

.contact-us {
  left: 173px;
  letter-spacing: 0;
  position: absolute;
  top: 0;
  width: 106px;
}

.overlap-group7 {
  align-items: flex-end;
  align-self: flex-start;
  background-color: var(--white);
  display: flex;
  height: 54px;
  margin-left: 59px;
  min-width: 100px;
  padding: 14px 27px;
}

.login {
  letter-spacing: 0;
  min-height: 25px;
  min-width: 45px;
  text-align: center;
}

.overlap-group6 {
  align-items: flex-end;
  align-self: flex-start;
  background-color: var(--tangerine);
  display: flex;
  height: 54px;
  min-width: 100px;
  padding: 14px;
}

.place {
  letter-spacing: 0;
  min-height: 25px;
  min-width: 71px;
}

.title {
  letter-spacing: 0;
  margin-left: 1px;
  margin-top: 111px;
  min-height: 145px;
  text-align: center;
  width: 623px;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  margin-left: 8px;
  margin-top: 40px;
  min-width: 1084px;
}

.overlap-group8 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 53px;
  min-width: 428px;
  padding: 13px 18px;
}

.keyword {
  height: 26px;
  letter-spacing: 0;
  width: 86px;
}

.overlap-group4 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 53px;
  margin-left: 11px;
  min-width: 428px;
  padding: 13px 27px;
}

.location {
  height: 26px;
  letter-spacing: 0;
}

.overlap-group3 {
  align-items: flex-start;
  background-color: var(--tangerine);
  display: flex;
  height: 53px;
  margin-left: 15px;
  min-width: 202px;
  padding: 13px 49px;
}

.search-jobs {
  height: 26px;
  letter-spacing: 0;
  min-width: 104px;
  text-align: center;
}

.flex-col {
  align-items: flex-end;
  background-color: #8c8c8cb5;
  display: flex;
  flex-direction: column;
  margin-top: 159px;
  min-height: 175px;
  padding: 11px 108.9px;
  width: 1440px;
}

.flex-row-1 {
  align-items: flex-end;
  display: flex;
  height: 114px;
  margin-top: 6px;
  min-width: 1222px;
}

.arrow-1 {
  align-self: center;
  height: 1px;
  margin-top: 17px;
  width: 1px;
}

.ellipse1 {
  border-radius: 55px;
  height: 110px;
  margin-left: 138px;
  width: 110px;
}

.ellipse2 {
  border-radius: 55px;
  height: 110px;
  margin-left: 91px;
  width: 110px;
}

.ellipse3 {
  align-self: flex-start;
  border-radius: 55px;
  height: 110px;
  margin-left: 93px;
  width: 110px;
}

.ellipse4 {
  align-self: flex-start;
  border-radius: 55px;
  height: 110px;
  margin-left: 95px;
  width: 110px;
}

.ellipse5 {
  border-radius: 55px;
  height: 110px;
  margin-left: 102px;
  width: 110px;
}

.arrow-2 {
  align-self: center;
  height: 3px;
  margin-left: 102px;
  margin-top: 15.02px;
  width: 50px;
}

.ellipse-container {
  align-items: flex-start;
  align-self: center;
  display: flex;
  margin-right: 13px;
  margin-top: 8px;
  min-width: 957px;
}

.ellipse1_text {
  height: 25px;
  letter-spacing: 0;
  text-align: center;
  width: 136px;
}

.ellipse2_text {
  height: 25px;
  letter-spacing: 0;
  margin-left: 65px;
  text-align: center;
  width: 136px;
}

.ellipse3_text {
  height: 25px;
  letter-spacing: 0;
  margin-left: 67px;
  text-align: center;
  width: 136px;
}

.ellipse4_text {
  height: 25px;
  letter-spacing: 0;
  margin-left: 69px;
  text-align: center;
  width: 136px;
}

.ellipse5_text {
  height: 25px;
  letter-spacing: 0;
  margin-left: 76px;
  text-align: center;
  width: 136px;
}
</style>
