<template>
  <!-- Counter -->
  <div class="silver_counter_new">
    <div class="bg jarallax" data-img-url="img/slider/1.jpg" data-speed="0"></div>
    <div class="overlay"></div>
    <div class="container">
      <div class="content">
        <ul>
          <li>
            <div class="inner">
              <div class="icon">
                <img class="svg" src="img/svg/portfolio-4.svg" alt="" />
              </div>
              <h3><span><span class="silver_counter" data-from="0" data-to="2222" data-speed="3000">0</span></span></h3>
              <span class="word">Projects Completed</span>
            </div>
          </li>
          <li>
            <div class="inner">
              <div class="icon">
                <img class="svg" src="img/svg/source.svg" alt="" />
              </div>
              <h3><span><span class="silver_counter" data-from="0" data-to="333" data-speed="3000">0</span>K</span></h3>
              <span class="word">Lines of Code</span>
            </div>
          </li>
          <li>
            <div class="inner">
              <div class="icon">
                <img class="svg" src="img/svg/heartt.svg" alt="" />
              </div>
              <h3><span><span class="silver_counter" data-from="0" data-to="8888" data-speed="3000">0</span></span></h3>
              <span class="word">Happy Clients</span>
            </div>
          </li>
          <li>
            <div class="inner">
              <div class="icon">
                <img class="svg" src="img/svg/award.svg" alt="" />
              </div>
              <h3><span><span class="silver_counter" data-from="0" data-to="777" data-speed="3000">0</span>+</span></h3>
              <span class="word">My Awwwards</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /Counter -->
</template>

<script>
    export default {
        name: "Counter",
        mounted() {
          jQuery('.silver_counter').each(function() {

            "use strict";

            var el		= jQuery(this);
            el.waypoint({
              handler: function(){

                if(!el.hasClass('stop')){
                  el.addClass('stop').countTo({
                    refreshInterval: 50,
                    formatter: function (value, options) {
                      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    },
                  });
                }
              },offset:'80%'
            });
          });
        }
    }
</script>

<style scoped>

</style>
