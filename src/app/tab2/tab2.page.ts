import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  portfolioItems: Array<any>;

  constructor() {

    this.portfolioItems = [
      {
        name: 'APS Health',
        workedFrom: 'August 2020 - Present',
        src: 'https://apshealth.com/',
        img: '../../assets/images/APS-V.png',
        jobTitle: 'Business Intelligence Analyst',
        desc: `APS Health is a leading health data management company based in Puerto Rico, known for their many clinics and mental health services such as APS Optimind and APS MindSpa.`,
        myPosition: 'Originally hired as a BI Analyst, my position quickly shifted to a BI Developer due to my skillset. My responsibilities include:',
        tasks: [
                { nm: 'BARGE:', 
                  desc: '' }, 
                { 
                  nm: 'Power BI reports',
                  desc: ''
                 },
                { 
                  nm: 'git wiki and implementation',
                  desc: ''
                 }
              ],
        stack: ['../../assets/images/php-icon.png', '../../assets/images/js-icon.png', '../../assets/images/powerbi.png', '../../assets/images/html-icon.png'],
        // gallery: ['https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y', 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'],
        data: [{ src: 'https://corredordelyaguazo.org/', img: '../../assets/images/yaguazo.png', nm: 'El Corredor Del Yaguazo', title: '', desc: 'Official website for Corredor Del Yaguazo, a wholesale plant nursery dedicated to conserving the Natural Reserve of Ciénaga las Cucharillas.' }]

      },

      {
        name: 'TuChequera.com',
        workedFrom: 'July 2018 - Present',
        src: 'https://tuchequera.com/',
        img: '../../assets/images/tcc.jpg',
        jobTitle: 'Full Stack Developer',
        desc: '',
        myPosition: 'My first official job in the industry. Learned my current stack and made it mine.',
        tasks: [
                { nm: 'TuChequera.com:  ', desc: 'Styles, designs and SEO.' }, 
                { nm: 'TuChequera Móvil: ', desc: 'this is my baby yo' },
              ],
        stack: ['../../assets/images/ionic-icon.png', '../../assets/images/ts-icon.png', '../../assets/images/angular-icon.png', '../../assets/images/android.png', '../../assets/images/xcode-icon.png'],
        // gallery: ['https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y', 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'],
        data: [
               
                { src: 'https://play.google.com/store/apps/details?id=com.ycspr.tuchequera', 
                  img: '../../assets/images/tccm_md.png', 
                  nm: 'TuChequera Móvil for Android', 
                  title: 'TuChequeraMóvilAndroid', 
                  desc: 'Accounting app thats easy to use and focuses on small businesses.' 
                },
                { src: 'https://apps.apple.com/us/app/tu-chequera/id1141118902', 
                  img: '../../assets/images/tccm_ios.png', 
                  nm: 'TuChequera Móvil for iOS', 
                  title: 'TuChequeraMóvilAndroid', 
                  desc: 'Accounting app thats easy to use and focuses on small businesses.' 
                },
                { src: 'https://tuchequera.com/', 
                img: '../../assets/images/tccweb.png', 
                nm: 'TuChequera.com', 
                title: 'TuChequera.com', 
                desc: 'Accounting app thats easy to use and focuses on small businesses.' 
              },
              ]

      },

      {
        name: 'CATEC',
        workedFrom: 'January 2016 - July 2018',
        src: 'http://catec.upr.edu/',
        img: '../../assets/images/catec.png',
        jobTitle: 'Full Stack Developer',
        desc: '',
        myPosition: 'At CATEC I learned how to build and deploy my first websites.',
        tasks: [
                { nm: 'CATEC Official Site:', desc: 'something to say about this' }, 
                { nm: 'FireCollect:', desc: 'something to say about this' }, 
              ],
        stack: [
                '../../assets/images/php-icon.png', 
                '../../assets/images/js-icon.png', 
                '../../assets/images/bootstrap-icon.png', 
                '../../assets/images/wordpress-icon.png'],
        // gallery: ['https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y', 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'],
        data: [
          { 
            src: 'http://catec.upr.edu/', 
            img: '../../assets/images/catec1.png', 
            nm: 'Center For Applied Tropical Ecology and Conservation', 
            title: 'CATEC', 
            desc: 'Official website CATEC, a reasearch facility located at the University of Puerto Rico, Rio Piedras Capus.' 
          },
          { 
            src: 'http://firecollect.com/', 
            img: '../../assets/images/firecollect.png', 
            nm: 'Fire Collect', 
            title: 'FireCollect', 
            desc: 'Site for Firecollect: Metadata Collection Site.' 
          },
      ]

      },
      {
        name: 'Get(IT)Virtual',
        workedFrom: 'August 2016 - December 2017',
        src: 'http://www.getitvirtual.com/',
        img: '../../assets/images/getITvirtual.png',
        jobTitle: 'WordPress Developer',
        desc: '',
        myPosition: 'As my first work experience, using WordPress was great for my development skills. My tasks included :',
        tasks: [
                { 
                  nm: 'Build WordPress Sites:', 
                  desc: 'Build user friendly WordPress apps for clients using top-notch plugins and beautiful themes.' }, 
                { 
                  nm: 'Design Process:', 
                  desc: 'As part of the core design team I participated in hours long design sprints to get products ready for scheduled releases.' }, 
              ],
        stack: ['../../assets/images/wordpress-icon.png'],
        // gallery: ['../../assets/images/catec1.png'],
        data: [
          {
            src: 'https://corredordelyaguazo.org/',
            img: '../../assets/images/yaguazo.png', 
            nm: 'El Corredor Del Yaguazo', 
            title: '', 
            desc: 'Official website for Corredor Del Yaguazo, a wholesale plant nursery dedicated to conserving the Natural Reserve of Ciénaga las Cucharillas.'
          },
          {
            src: 'http://www.mcc.com.pr/',
            img: '../../assets/images/mcc.png', 
            title: 'MCC', 
            desc: 'Official site for Materials Characterization Center'
          }
          
        ]

      },
    ]

  }

}
