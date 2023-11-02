<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
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
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts."
          </p>
        </div>
      </div>
      <div class="carousel-item">
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
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts."
          </p>
        </div>
      </div>
      <div class="carousel-item">
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
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts."
          </p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style>
.testimonial-card {
  text-align: center;
  padding: 20px;
}

.testimonial-name {
  font-weight: bold;
  color: #73b925;
}
.testimonial-text {
  font-weight: bold;
  margin-bottom: 20px;
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
</style>
