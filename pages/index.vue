<template>
  <div>
    <app-download-line
      line-text="Indatabet's Soccer &quot;2in1 Pinnacle & bet365 ML-TG 2.50&quot; data package"
      line-link-text="Download Now"
      line-link-to="/download"
    />
    <app-ads
      link-to="https://google.com"
      image-src="images/horizontal.jpg"
    />
    <app-data-package-carousel />
    <app-advantages />
    <app-information />
    <app-bookmakers />
    <app-info-data />
    <app-popular-data-package />
    <app-subscribe />
    <app-news />
  </div>
</template>

<script>
import AppDownloadLine from '@/components/main/AppDownloadLine'
import AppAds from '@/components/main/AppAds'
import AppDataPackageCarousel from '@/components/main/AppDataPackageCarousel'
import AppAdvantages from '@/components/main/AppAdvantages'
import AppInformation from '@/components/main/AppInformation'
import AppBookmakers from '@/components/main/AppBookmakers'
import AppInfoData from '@/components/main/AppInfoData'
import AppPopularDataPackage from '@/components/main/AppPopularDataPackage'
import AppSubscribe from '@/components/main/AppSubscribe'
import AppNews from '@/components/main/AppNews'

export default {
  components: {
    AppNews,
    AppSubscribe,
    AppPopularDataPackage,
    AppInfoData,
    AppBookmakers,
    AppInformation,
    AppAdvantages,
    AppDataPackageCarousel,
    AppAds,
    AppDownloadLine
  },
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home' },
      { title: 'About' }
    ]
  })
}
</script>

<style scoped>
.wrap-mob {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
.btn-drawer {
  z-index: 1;
}
</style>
