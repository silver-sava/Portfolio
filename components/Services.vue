<template>
  <!-- Services -->
  <div class="silver_section" id="services">
    <div class="silver_services_second">
      <div class="container">
        <div class="silver_title_second">
          <span>Services</span>
          <h3>Quality Services</h3>
        </div>
        <div class="service_inner">
          <ul>
            <li class="wow fadeInUp" data-wow-duration="0.8s">
              <div class="inner">
                <img class="svg" src="img/svg/source.svg" alt="" />
                <div class="title">
                  <h3>Web Development</h3>
                </div>
                <div class="text">
                  <p>Be a yardstick of quality. Some people aren’t used to an environment...</p>
                </div>
              </div>
            </li>
            <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <div class="inner">
                <img class="svg" src="img/svg/line-chart.svg" alt="" />
                <div class="title">
                  <h3>Brand Identity</h3>
                </div>
                <div class="text">
                  <p>Be a yardstick of quality. Some people aren’t used to an environment...</p>
                </div>
              </div>
            </li>
            <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
              <div class="inner">
                <img class="svg" src="img/svg/light-bulb.svg" alt="" />
                <div class="title">
                  <h3>Creative Design</h3>
                </div>
                <div class="text">
                  <p>Be a yardstick of quality. Some people aren’t used to an environment...</p>
                </div>
              </div>
            </li>
            <li class="wow fadeInUp" data-wow-duration="0.8s">
              <div class="inner">
                <img class="svg" src="img/svg/adobe-photoshop.svg" alt="" />
                <div class="title">
                  <h3>Adobe Photoshop</h3>
                </div>
                <div class="text">
                  <p>Be a yardstick of quality. Some people aren’t used to an environment...</p>
                </div>
              </div>
            </li>
            <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <div class="inner">
                <img class="svg" src="img/svg/twitter-1.svg" alt="" />
                <div class="title">
                  <h3>Social Media</h3>
                </div>
                <div class="text">
                  <p>Be a yardstick of quality. Some people aren’t used to an environment...</p>
                </div>
              </div>
            </li>
            <li class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
              <div class="inner">
                <img class="svg" src="img/svg/adobe-illustrator.svg" alt="" />
                <div class="title">
                  <h3>Adobe Illustrator</h3>
                </div>
                <div class="text">
                  <p>Be a yardstick of quality. Some people aren’t used to an environment...</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="silver_skills_second">
          <div class="skills_inner">
            <div class="left">
              <div class="silver_progress">
                <div class="progress_inner" data-value="95" data-color="#FF5E5F">
                  <span><span class="label">Web Development</span><span class="number">95%</span></span>
                  <div class="background"><div class="bar"><div class="bar_in"></div></div></div>
                </div>
                <div class="progress_inner" data-value="80" data-color="#FF5E5F">
                  <span><span class="label">Brand Identity</span><span class="number">80%</span></span>
                  <div class="background"><div class="bar"><div class="bar_in"></div></div></div>
                </div>
                <div class="progress_inner" data-value="90" data-color="#FF5E5F">
                  <span><span class="label">Javascript</span><span class="number">90%</span></span>
                  <div class="background"><div class="bar"><div class="bar_in"></div></div></div>
                </div>
                <div class="progress_inner" data-value="85" data-color="#FF5E5F">
                  <span><span class="label">WordPress</span><span class="number">85%</span></span>
                  <div class="background"><div class="bar"><div class="bar_in"></div></div></div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="silver_progress">
                <div class="progress_inner" data-value="90" data-color="#FF5E5F">
                  <span><span class="label">English</span><span class="number">90%</span></span>
                  <div class="background"><div class="bar"><div class="bar_in"></div></div></div>
                </div>
                <div class="progress_inner" data-value="95" data-color="#FF5E5F">
                  <span><span class="label">Spanish</span><span class="number">95%</span></span>
                  <div class="background"><div class="bar"><div class="bar_in"></div></div></div>
                </div>
                <div class="progress_inner" data-value="80" data-color="#FF5E5F">
                  <span><span class="label">Russian</span><span class="number">80%</span></span>
                  <div class="background"><div class="bar"><div class="bar_in"></div></div></div>
                </div>
                <div class="progress_inner" data-value="85" data-color="#FF5E5F">
                  <span><span class="label">Chinese</span><span class="number">85%</span></span>
                  <div class="background"><div class="bar"><div class="bar_in"></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Services -->
</template>

<script>
    export default {
        name: "Services",
        mounted() {
          function tdProgress(container){

            "use strict";

            container.find('.progress_inner').each(function(i) {
              var progress 		= jQuery(this);
              var pValue 			= parseInt(progress.data('value'), 10);
              var pColor			= progress.data('color');
              var pBarWrap 		= progress.find('.bar');
              var pBar 			= progress.find('.bar_in');
              pBar.css({width:pValue+'%', backgroundColor:pColor});
              setTimeout(function(){pBarWrap.addClass('open');},(i*300));
            });
          }

          jQuery('.silver_progress').each(function() {

            "use strict";

            var pWrap 			= jQuery(this);
            pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});
          });
        }
    }
</script>

<style scoped>

</style>
