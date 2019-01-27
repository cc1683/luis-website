Vue.component('ls-portfolio-showcase', {
    template:
        `
            <div>
                <div class="row">
                    <div class="col-12 col-md-4 justify-content-center my-3 my-md-5" v-for="portfolio in portfolioList">
                        <div class="box" style="width:100%">
                            <div class="card">
                                <img class="card-img-top" :src="portfolio.projectImg" alt="">
                                <div class="card-body">
                                    <h5 class="card-title">{{portfolio.projectName}}</h5>
                                    <p class="card-text">{{portfolio.projectDesc}}</p>
                                    <a :href="portfolio.projectUrl" target="_blank" class="btn btn-dark">Visit site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,

    data () {
        return {
            portfolioList: [
                // {projectImg: 'img/ls-portfolio-1.png', projectName: 'ysWebsite', projectDesc: 'Personal website and resume style site. Build with HTML5, CSS3, Bootstrap', projectUrl: 'https://yiing-website.firebaseapp.com'},
                {projectImg: 'img/ls-portfolio-2.png', projectName: 'Qia Wan', projectDesc: 'Simple restaurant finder (No Backend) website. Build with HTML5, CSS3, Materialize, Vue', projectUrl: 'https://qiawan-ddd24.firebaseapp.com/index.html'},
                {projectImg: 'img/ls-portfolio-3.png', projectName: 'Filteritout', projectDesc: 'Photo filter website. Build with HTML5, CSS3, Bulma and CamanJS', projectUrl: 'https://cc1683.github.io/filteritout'},
                {projectImg: 'img/ls-portfolio-4.png', projectName: 'Ez-Git-ing', projectDesc: 'Basic GIT documentation. Build with HTML5, CSS3, Spectre', projectUrl: 'https://cc1683.github.io/ez-Git-ing/'},
                {projectImg: 'img/ls-portfolio-5.png', projectName: 'My Wiki Site', projectDesc: 'My minimal personal wiki site that styling with Sakura, based on October CMS and hosted on DigitalOcean', projectUrl: 'http://luisyctech.tk/'},
                {projectImg: 'img/ls-portfolio-6.png', projectName: 'My Internship', projectDesc: 'My brief intership report. Implemented with fullPage.js and Material Boostrap', projectUrl: 'https://cc1683.github.io/my-internship/'},
                {projectImg: 'img/ls-portfolio-7.png', projectName: 'BorneoStarAuto', projectDesc: 'A simple website to lead potential customer to reach clients WhatsApp to place order', projectUrl: 'https://borneostarauto.com/index.html'},
            ],
        }
    }
})

var app = new Vue({
    el: '#ls-portfolio-component',
    data: {}
})