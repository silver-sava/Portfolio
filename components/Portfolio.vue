<template>
  <!-- Portfolio -->
  <div class="silver_section" id="portfolio">
    <div class="silver_portfolio_second">
      <div class="container">
        <div class="silver_title_second">
          <span>Portfolio</span>
          <h3>Creative Works</h3>
        </div>
        <ul class="silver_portfolio_filter_second">
          <li><a href="#" class="current" data-filter="*">All</a></li>
          <li><a href="#" data-filter=".video">Video</a></li>
          <li><a href="#" data-filter=".photography">Photography</a></li>
          <li><a href="#" data-filter=".development">Development</a></li>
        </ul>
        <div class="portfolio_list">
          <ul class="gallery_zoom">
            <li class="video">
              <div class="inner">
                <div class="image">
                  <img src="img/portfolio/600x600.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/1.jpg"></div>
                </div>
                <span class="video_icon"></span>
                <a class="link popup-youtube" href="https://www.youtube.com/watch?v=FZFD2DqeLr4"></a>
              </div>
            </li>
            <li class="photography">
              <div class="inner">
                <div class="image">
                  <img src="img/portfolio/600x600.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/2.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div class="text">
                  <h3>Mockup Box</h3>
                  <span>Branding</span>
                </div>
                <a class="link zoom" href="img/portfolio/2.jpg"></a>
              </div>
            </li>
            <li class="development">
              <div class="inner">
                <div class="image">
                  <img src="img/portfolio/600x600.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/3.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div class="text">
                  <h3>Black Bag</h3>
                  <span>Branding</span>
                </div>
                <a class="link zoom" href="img/portfolio/3.jpg"></a>
              </div>
            </li>
            <li class="design">
              <div class="inner">
                <div class="image">
                  <img src="img/portfolio/600x600.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/4.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div class="text">
                  <h3>Small Paper</h3>
                  <span>Branding</span>
                </div>
                <a class="link zoom" href="img/portfolio/4.jpg"></a>
              </div>
            </li>
            <li class="video">
              <div class="inner">
                <div class="image">
                  <img src="img/portfolio/600x600.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/6.jpg"></div>
                </div>
                <span class="video_icon"></span>
                <a class="link popup-youtube" href="https://www.youtube.com/watch?v=FZFD2DqeLr4"></a>
              </div>
            </li>
            <li class="development">
              <div class="inner">
                <div class="image">
                  <img src="img/portfolio/600x600.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/5.jpg"></div>
                </div>
                <div class="overlay"></div>
                <div class="text">
                  <h3>Mix Mockup</h3>
                  <span>Branding</span>
                </div>
                <a class="link zoom" href="img/portfolio/5.jpg"></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- /Portfolio -->
</template>

<script>
    export default {
        name: "Portfolio"
    }
</script>

<style scoped>

</style>
