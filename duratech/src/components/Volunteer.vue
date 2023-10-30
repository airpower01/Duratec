<template>
  <section style="background-color: #F7F5F5">
    <div class="volunteer">
      <p class="first-text text-center">MEET OUR VOLUNTEER</p>
      <p class="second-text text-center">Our Volunteer</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="profile-card">
            <div class="profile-photo">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.TAE6ye52PA1figXiN0VYrAHaHa&pid=Api&P=0&h=180"
                alt="volunteer 1"
              />
            </div>
            <div class="volunteer-name">John Doe</div>
            <div class="volunteer-title">Volunteer</div>
            <div class="mt-3">
              <iconify-icon
                icon="skill-icons:twitter"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="devicon:facebook"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="flat-color-icons:google"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="skill-icons:instagram"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
            </div>
            <p class="volunteer-desc">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="profile-card">
            <div class="profile-photo">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.TAE6ye52PA1figXiN0VYrAHaHa&pid=Api&P=0&h=180"
                alt="volunteer 2"
              />
            </div>
            <div class="volunteer-name">Jane Smith</div>
            <div class="volunteer-title">Volunteer</div>
            <div class="mt-3">
              <iconify-icon
                icon="skill-icons:twitter"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="devicon:facebook"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="flat-color-icons:google"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="skill-icons:instagram"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <p class="volunteer-desc">
                I am an ambitious workaholic, but apart from that, pretty simple
                person.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="profile-card">
            <div class="profile-photo">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.TAE6ye52PA1figXiN0VYrAHaHa&pid=Api&P=0&h=180"
                alt="volunteer 2"
              />
            </div>
            <div class="volunteer-name">Jane Smith</div>
            <div class="volunteer-title">Volunteer</div>
            <div class="mt-3">
              <iconify-icon
                icon="skill-icons:twitter"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="devicon:facebook"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="flat-color-icons:google"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="skill-icons:instagram"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
            </div>
            <p class="volunteer-desc">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="profile-card">
            <div class="profile-photo">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.TAE6ye52PA1figXiN0VYrAHaHa&pid=Api&P=0&h=180"
                alt="volunteer 2"
              />
            </div>
            <div class="volunteer-name">Jane Smith</div>
            <div class="volunteer-title">Volunteer</div>
            <div class="mt-3">
              <iconify-icon
                icon="skill-icons:twitter"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="devicon:facebook"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="flat-color-icons:google"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
              <iconify-icon
                icon="skill-icons:instagram"
                style="margin-left: 10px; cursor: pointer"
                width="20"
              ></iconify-icon>
            </div>
            <p class="volunteer-desc">
              I am an ambitious workaholic, but apart from that, pretty simple
              person.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Volunteer",
};
</script>

<style>
.first-text {
  color: #73b925;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 1px;
}
.second-text {
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 1px;
}

.profile-card {
  background-color: #f5f5f5;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  padding: 20px;
  margin: 20px;
  height: 350px;
  transition: background-color 0.3s;
}

.profile-card:hover {
  background-color: #73b925;
  color: white;
}

.profile-card:hover .volunteer-title {
    color: white;
}

.profile-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid #73b925;
  overflow: hidden;
  margin: 0 auto 10px;
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.volunteer-name {
  font-weight: bold;
}
.volunteer-title {
  color: #73b925;
  font-weight: bold;
  font-size: 11px;
}
.volunteer-desc {
  margin-top: 10px;
}
</style>
