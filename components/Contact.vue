<template>
  <!-- Contact -->
  <div class="silver_section" id="contact">
    <div class="silver_touch">
      <div class="silver_title_second">
        <span>Contact</span>
        <h3>Get in touch</h3>
      </div>
      <div class="silver_contact_wrap_new">
        <div class="main_input_wrap">
          <form action="http://integrothemes.com/" method="post" class="contact_form" id="contact_form">
            <div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
            <div class="empty_notice"><span>Please Fill Required Fields</span></div>
            <div class="wrap wow fadeInUp" data-wow-duration="0.8s">
              <input id="name" type="text" placeholder="Your Name">
            </div>
            <div class="wrap wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <input id="email" type="text" placeholder="Your Email">
            </div>
            <div class="wrap wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <div class="silver_first_button wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
              <a id="send_message" href="#"><span>Send Message</span></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Contact -->
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
