<template>
  <div class="container">
    <ol class="breadcrumb mt-4">
      <li class="breadcrumb-item">
        <a href="/" style="color: #636b6f">HOME</a>
      </li>
      <li class="breadcrumb-item">
        <a href="/contact" style="color: #636b6f">CONTACT US</a>
      </li>
    </ol>
    <div style="padding-left: 15px">
      <h2 class="contact" style="letter-spacing: 2px">CONTACT US</h2>
      <p style="color: #636b6f">
        You can reach us by simply filling out the following form below. <br />
      </p>
    </div>
    <div class="container-fluid">
      <div
        class="display-box row padded"
        style="background-color: #f0f0f0; padding: 20px"
      ></div>
      <div class="container">
        <div
          class="col-sm-12"
          style="padding-right: 0px; background-color: #ffffff"
          data-aos="fade-up"
        >
          <div style="display: table; width: 100%">
            <form
              method="post"
              action=""
              style="
                display: table-cell;
                width: 60%;
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
                style="width: 100%"
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
                    style="width: 100%"
                  />
                  <small class="d-flex text-right">first</small>
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
                    style="width: 100%"
                  />
                  <small class="d-flex text-right">last</small>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6" style="margin-top: 10px">
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
                    style="width: 100%"
                  />
                </div>
                <div class="col-md-6" style="margin-top: 10px">
                  <label>E-mail<span style="color: red">*</span></label>
                  <input
                    name="email"
                    placeholder="Type Here"
                    class="form-control"
                    type="text"
                    value=""
                    required="true"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="form-group" style="margin-top: 10px">
                <label>Phone Number<span style="color: red">*</span></label>
                <input
                  name="pnumber"
                  placeholder="Type Here"
                  class="form-control"
                  type="text"
                  value=""
                  required="true"
                  style="width: 100%"
                />
              </div>
              <div class="form-group" style="margin-top: 10px">
                <label>Address<span style="color: red">*</span></label>
                <textarea
                  name="address"
                  class="form-control"
                  rows="5"
                  id="pesan"
                  style="resize: vertical; width: 100%"
                  required="true"
                ></textarea>
              </div>
              <div class="form-group" style="margin-top: 10px">
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
              <div class="form-group" style="margin-top: 10px">
                <label>Message</label>
                <textarea
                  name="messagedata"
                  class="form-control"
                  rows="5"
                  id="pesan"
                  style="resize: vertical"
                ></textarea>
              </div>
              <div class="form-group" style="margin-top: 10px">
                <span class="pull-left"
                  ><small>*required truefields</small></span
                >
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

            <div
              class="hidden-xs"
              style="display: table-cell; width: 40%; vertical-align: middle"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.559678571271!2d106.76073607568024!3d-6.189626560644231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71b4422695b%3A0xa91dc270526105e6!2sPola%20Petro%20Development%2C%20PT!5e0!3m2!1sen!2sid!4v1698132672336!5m2!1sen!2sid"
                height="450"
                style="border: 0; margin-left: 10px"
                width="80%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
.contact {
  font-weight: bold;
  color: #636b6f;
}

.col-sm-6 {
  display: flex;
  flex-direction: column;
}

.col-sm-6 small {
  align-self: flex-end;
}

input::placeholder {
  color: transparent;
}

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

  input {
    width: 100%;
  }

  .hidden-xs {
    display: none; /* Hide the entire .hidden-xs div */
    width: 100%;
    padding: 0;
  }
  iframe {
    display: none;
  }
}
</style>
