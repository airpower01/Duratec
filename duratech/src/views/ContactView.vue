<template>

  <div class="container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/" style="color: #636b6f;">Home</a></li>
      <li class="breadcrumb-item active"><a href="/contact" style="color: #636b6f;">Contact Us</a></li>
    </ol>
    <div style="padding-left: 15px">
      <h2 class="contact">CONTACT US</h2>
      <p style="color:#636b6f;">
        You can reach us by simply filling out the following form below. <br />
      </p>
    </div>
  </div>
  <div class="container-fluid">
    <div class="display-box row padded" style="background-color: #f0f0f0; padding: 20px; overflow: hidden">
      <div class="container">
        <div class="col-sm-12 aos-init aos-animate" style="padding-right: 0px; background-color: #ffffff" data-aos="fade-up">
          <div style="display: table; width: 100%">
            <!-- form -->
            <form
              method="post"
              action=""
              style="
                display: table-cell;
                width: 50%;
                vertical-align: top;
                color: #636b6f;
                font-weight: bold;
                padding: 20px;
              "
              id="formpesan"
            >
              <input
                type="hidden"
                name="_token"
                value="RuVNDvL630FM0RcIrPxxbPhlM8DHQdLKG9p99eu9"
              />
              <div class="row form-group">
                <div class="col-sm-6">
                  <label>Your Name<span style="color: red">*</span></label>
                  <input
                    name="first"
                    placeholder="Type Here"
                    class="form-control"
                    type="text"
                    value=""
                    required="true"
                  />
                  First
                </div>
                <div class="col-sm-6">
                  <label style="color: white">_</label>
                  <input
                    name="last"
                    placeholder="Type Here"
                    class="form-control"
                    type="text"
                    value=""
                    required="true"
                  />
                  Last
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label
                    >Your Company Name<span style="color: red">*</span></label
                  >
                  <input
                    name="company"
                    placeholder="Type Here"
                    class="form-control"
                    type="text"
                    value=""
                    required="true"
                  />
                </div>
                <div class="col-md-6">
                  <label>E-mail<span style="color: red">*</span></label>
                  <input
                    name="email"
                    placeholder="Type Here"
                    class="form-control"
                    type="text"
                    value=""
                    required="true"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Phone Number<span style="color: red">*</span></label>
                <input
                  name="pnumber"
                  placeholder="Type Here"
                  class="form-control"
                  type="text"
                  value=""
                  required="true"
                />
              </div>
              <div class="form-group">
                <label>Address<span style="color: red">*</span></label>
                <textarea
                  name="address"
                  class="form-control"
                  rows="5"
                  id="pesan"
                  style="resize: vertical"
                  required="true"
                ></textarea>
              </div>
              <div class="form-group">
                <label
                  >Choose one from following that applies : Do you...</label
                >
                <select name="option" class="form-control" required="true">
                  <option value="buy">
                    Want to inquire, buy product / service from us?
                  </option>
                  <option value="sell">
                    Want to introduce or offer product / service to us?
                  </option>
                  <option value="help">
                    Have general inquires other than the two above
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label>Message</label>
                <textarea
                  name="messagedata"
                  class="form-control"
                  rows="5"
                  id="pesan"
                  style="resize: vertical"
                ></textarea>
              </div>
              <div class="form-group">
                <span class="pull-left"><small>*required ftrueields</small></span>
                <input
                  class="pull-right"
                  type="image"
                  style="width: 100px; height: 30px"
                  src="https://airpower.co.id/theme/website/images/submit.jpg"
                  border="0"
                  alt="Submit"
                />
                <div style="clear: both"></div>
              </div>
            </form>

            <div class="hidden-xs" style="display: table-cell; width: 50%; vertical-align: middle;">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.5606610693894!2d106.7615863!3d-6.1894957!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71b466c3107%3A0x15cc1b88398c6af8!2sPetrotec%20Air%20Power!5e0!3m2!1sen!2sid!4v1568368607911!5m2!1sen!2sid" width="100%" height="500" frameborder="10" style="border: 0" allowfullscreen="false"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ContactView",
  components: { Header, Navbar, Footer },
};
</script>

<style>
.contact {
    font-weight: bold;
    color: #636b6f;
}

/* Media query to make components responsive */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
  .display-box {
    padding: 10px;
  }
  form {
    width: 100%;
  }
  .hidden-xs {
    display: block;
    width: 100%;
    padding: 0;
  }
  iframe {
    width: 100%;
    height: 300px;
  }
}
</style>