<template>
    <section class="mt-5">
    <p class="section-title text-center">TESTIMONIAL</p>
    <p class="happy-customers text-center">Happy Customers</p>
  <div class="container mt-5">
    <div id="testimonialCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-target="#testimonialCarousel"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#testimonialCarousel" data-slide-to="1"></li>
        <li data-target="#testimonialCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="testimonial-card">
            <div class="profile-photo">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.TAE6ye52PA1figXiN0VYrAHaHa&pid=Api&P=0&h=180"
                alt="Testimonial 1"
              />
            </div>
            <p class="testimonial-name">Martin</p>
            <p class="testimonial-title">Marketing</p>
            <p class="testimonial-text">
                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonial-card">
            <div class="profile-photo">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.TAE6ye52PA1figXiN0VYrAHaHa&pid=Api&P=0&h=180"
                alt="Testimonial 2"
              />
            </div>
            <p class="testimonial-name">Martin</p>
            <p class="testimonial-title">Marketing</p>
            <p class="testimonial-text">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."v</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="testimonial-card">
            <div class="profile-photo">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.TAE6ye52PA1figXiN0VYrAHaHa&pid=Api&P=0&h=180"
                alt="Testimonial 3"
              />
            </div>
            <p class="testimonial-name">Martin</p>
            <p class="testimonial-title">Marketing</p>
            <p class="testimonial-text">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Testimonial",
};
</script>

<style>
.section-title {
    color: #73b925;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 15px;
}
.happy-customers{
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 35px;
}
.testimonial-name {
    font-weight: bold;
    color:#73b925;
}
.testimonial-text {
    font-weight: bold;
    margin-bottom: 20px;
}
.carousel-inner {
    background-color: white;
}
.testimonial-card {
  text-align: center;
  padding: 20px;
}

.profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 10px;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-indicators li {
  background-color: #73b925;
  border-radius: 50%;
  width: 12px;
  height: 12px;
}

.carousel-indicators .active {
  background-color: #73b925;
}
</style>
