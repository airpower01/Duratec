<template>
 <div class="container-fluid p-0  mb-5">
        <section class="jumbotron text-center" style="background-image: url('https://cdn.discordapp.com/attachments/1020018520836284586/1164412214216773692/pexels-liis-saar-832521_3.jpg?ex=65431e61&is=6530a961&hm=e3e665d60c6521631552458612798ad7b6cff3873275738974ce23582df611ec&');">
            <div class="container">
                <p class="review-title p-3">GREAT REVIEWS FOR OUR SERVICES</p>
                <p class="statistics text-white mb-5">Technical Statistics</p>
                <div class="row">
                    <div class="col-md-3">
                        <div class="review-card">
                            <iconify-icon icon="iconoir:donate" style="color: white; margin-top: 10px;" width="60"></iconify-icon>
                           <p class="amount" >$60M</p>
                            <p class="review-name">FUND RAISED</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="review-card">
                            <iconify-icon icon="iconoir:donate" style="color: white; margin-top: 10px;" width="60"></iconify-icon>
                            <p class="amount">9,200</p>
                             <p class="review-name">COMPLETED PROJECTS</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="review-card">
                            <iconify-icon icon="iconoir:donate" style="color: white; margin-top: 10px;"  width="60"></iconify-icon>
                            <p class="amount">5,800</p>
                             <p class="review-name">DONATION</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="review-card">
                            <iconify-icon icon="iconoir:donate" style="color: white;  margin-top: 10px;" width="60"></iconify-icon>
                            <p class="amount">2,750</p>
                             <p class="review-name">VOLUNTEER</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
export default {
    name:'Review'
}

</script>


<style>

.review-title {
    letter-spacing: 1px;
    font-size: 13px;
    font-weight: bold;
    color: white;
}

.statistics {
    font-weight: bold;
    font-size: 40px;
}
.review-card {
    height: 200px;
    background: rgba(255, 255, 255, .1);

}

.amount {
    color: white;
    font-size: 40px;
    letter-spacing: 2px;
    font-weight: bold;
}

.review-name {
    color: white;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
}
</style>