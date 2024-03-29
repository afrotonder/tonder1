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
        name: 'Thunder1 Consulting',
        workedFrom: 'November 2021 - Present',
        src: 'afrotonder.com/tabs/portfolio',
        img: '../../assets/images/2286.png',
        jobTitle: 'Consultant/Developer',
        desc: `Thunder1 Consulting is my personal SAAS & tech consulting company, where I create hightly scalable progressive web apps that
              solve client problems using the best and most cost effective toolsets.`,
        myPosition: `I specialize in building NFT projects from scratch, web3 integration for minting, rarity websites, generative art, etc.
                     I also specialize in creating audited smart contracts for drops, marketplace, auctions, collections etc, using the thirdweb.com.`,
        tasks: [
          { 
            nm: 'Manantial Blanco Marketplace',
            desc: `Digital asset marketplace for all NFT collections created under the Manantial Blanco umbrella.`
           },
           { 
            nm: 'Alebrijes, Alebrijes! Auction House',
            desc: `Auction house for the famous Alebrijes, Alebrijes! art collection.`
           },
          { 
            nm: 'CryptoBangers Music NFT Platform',
            desc: `Music streaming webapp exclusively for CryptoBangers NFT holders.`
           },
          { 
            nm: 'CyberJibaNFT Dapp',
            desc: `Token gated website for the CyberJibaNFT community.`
           },
          { 
            nm: 'WAGMIBALLZ NFT',
            desc: `Website for the WAGMIBALLZ NFT collection.`
           },
           { 
            nm: 'Paddlez Web3 Game',
            desc: `Simple utility game only available to WAGMIBALLZ NFT holders.`
           },
            { nm: 'PunkForce Rarity Site', 
              desc: `Rarity website for the CC0 NFT collection PunkForce.` 
            }, 
            { 
              nm: '3Mfer Rarity Site',
              desc: `Rarity website for Mfers derivative collection 3Mfers by SkullCat.`
              },
            { 
              nm: 'OTW Addres Exporter',
              desc: `Simple web3 tool that permits users to search ethereum & polygon NFTs from each blockchain and export an excel file with all unique addresses.`
              },
              { 
              nm: 'The Minnies NFT Site',
              desc: `Website for The Minnies NFT collection.`
              }
          ],
            stack: [
            '../../assets/images/ionic-icon.png',
            '../../assets/images/ts-icon.png', 
            '../../assets/images/angular-icon.png', 
            '../../assets/images/firebase.png', 
            '../../assets/images/thirdweb.png',
            '../../assets/images/mm.png',
            '../../assets/images/wc.png',
            '../../assets/images/moralis.png',
            '../../assets/images/nftport.jpg',


            // '../../assets/images/android.png', 
            // '../../assets/images/xcode-icon.png',
            

          ],        // gallery: ['https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y', 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'],
        data: [
          {  
            src: 'https://manantialblanco.com',  
            img: '../../assets/images/manan.png', 
            nm: 'Manantial Blanco Marketplace', 
            title: 'manantialblanco.com', 
            desc: `Official Manantial Blanco Marketplace website.` 
          },
          {  
            src: 'https://alebrijes-alebrijes.com',  
            img: '../../assets/images/aleale.png', 
            nm: 'Alebrijes, Alebrijes! Auction House', 
            title: 'alebrijes-alebrijes.com', 
            desc: `Official Auction House for the Alebrijes, Alebrijes! art collection by Estudio Linares.` 
          },
          {  
            src: 'https://cyberjiba.io',  
            img: '../../assets/images/cyberjiba.png', 
            nm: 'CyberJiba Official Dapp', 
            title: 'CyberJibaOfficial', 
            desc: `Official NFT gated website for the CyberJiba community.` 
          },
          
          {  
            src: 'https://wagmiballznft.web.app/home',  
            img: '../../assets/images/wagmi.png', 
            nm: 'The Minnies NFT Official', 
            title: 'TheMinniesNFT', 
            desc: 'Official webiste for The Minnies NFT collection. ' 
          },

          {  
            src: 'https://paddlez-1b260.web.app/',  
            img: '../../assets/images/paddlez.png', 
            nm: 'The Minnies NFT Official', 
            title: 'TheMinniesNFT', 
            desc: 'Official webiste for The Minnies NFT collection. ' 
          },
          {  src: 'https://punkforce-rarity.web.app/home', 
                  img: '../../assets/images/punkforce.png', 
                  nm: 'PunkForce Rarity Site', 
                  title: 'PunkForceRarity', 
                  desc: 'Rarity site for the PunkForce NFT Collection' 
                },
                {  
                  src: 'https://3mfer-rarity.xyz/home',  
                  img: '../../assets/images/mfers.png', 
                  nm: '3Mfers NFT Official', 
                  title: '3MfersNFTWebsite', 
                  desc: 'Rarity site for the 3Mfers NFT collection.' 
                },
                {  
                  src: 'https://minniesnft.web.app/home',  
                  img: '../../assets/images/minnies1.png', 
                  nm: 'The Minnies NFT Official', 
                  title: 'TheMinniesNFT', 
                  desc: 'Official webiste for The Minnies NFT collection. ' 
                },
                {  
                  src: '',  
                  img: '../../assets/images/otw.png', 
                  nm: 'OTW Addres Exporter', 
                  title: 'OTWAddressExportTool', 
                  desc: 'NFT address export tool.' 
                },
           
            
            
                
                ]
      },
      {
        name: 'APS Health',
        workedFrom: 'August 2020 - Present',
        src: 'https://apshealth.com/',
        img: '../../assets/images/APS-V.png',
        jobTitle: 'Business Intelligence Analyst',
        desc: `APS Health is a leading health data management company based in Puerto Rico, known for their many clinics and mental health services such as APS Optimind and APS MindSpa.`,
        myPosition: 'Originally hired as a BI Analyst, my position quickly shifted to a BI Developer due to my skillset. My responsibilities include:',
        tasks: [
                { nm: 'BARGE', 
                  desc: 'Helped scale in-house reporting tool by replacing jQuery with ES6 modules, implementing npm as a package manager for easy updates and adding Power Bi capabilities to replace data intense reports.' 
                }, 
                { 
                  nm: 'Power BI',
                  desc: 'Recreated existing reports in Power Bi to enable users access to more data dynamically and stabily, considering the constant movement of data in the health industry.'
                 },
                { 
                  nm: 'Git/DevOps',
                  desc: 'Drove initiative to replace SVN(Apache Subversion) for the modern Git version control system so company software development can follow modern coding standards.'
                 }
              ],
        stack: ['../../assets/images/php-icon.png', '../../assets/images/js-icon.png', '../../assets/images/powerbi.png', '../../assets/images/html-icon.png'],
        // gallery: ['https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y', 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'],
        data: [{  src: 'https://apshealth.com', 
                  img: '../../assets/images/brg1.png', 
                  nm: 'BARGE Reporting App', 
                  title: '', 
                  desc: 'Official website for APS Health.' 
                },
                {  
                  src: 'https://apshealth.com',  
                  img: '../../assets/images/brg2.png', 
                  nm: 'BARGE Reporting App', 
                  title: '', 
                  desc: 'Official website for APS Health.' 
                },
                

                
                ]
      },

      {
        name: 'Yibzer by YCS Inc.',
        workedFrom: 'July 2018 - Present',
        src: 'https://en.yibzer.com/',
        img: '../../assets/images/yib.webp',
        jobTitle: 'Frontend Developer',
        desc: 'Food ordering app designed to schedule orders ASAP, for a date at 8pm, or for a party next week.',
        myPosition: 'Worked as a frontend developer to quickly create a working frontend in a 3 month time period.',
        tasks: [
          { nm: 'Yibzer App', 
            desc: `Took over frontend design of the app while head developer focused on API integration & other backend tasks. As the head
                    frontend developer my responsabilities included but were not limited to creating clean, user friendly designs that worked
                    both for smartphones and tablets, testing API endpoints to make sure backend & frontend are synced, and approve or discard desings
                    deemed not user friendly.`
          }, 
              ],
        stack: ['../../assets/images/ionic-icon.png', 
                '../../assets/images/ts-icon.png', 
                '../../assets/images/angular-icon.png', 
                '../../assets/images/android.png', 
                '../../assets/images/xcode-icon.png',

              ],
        // gallery: ['https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y', 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'],
        data: [
               
                { src: 'https://play.google.com/store/apps/details?id=com.ycspr.yibzer', 
                  img: '../../assets/images/yib-md.png', 
                  nm: 'Yibzer for Android', 
                  title: 'YibzerForAndroid', 
                  desc: 'Food ordering app.' 
                },
                { src: 'https://play.google.com/store/apps/details?id=com.ycspr.yibzer', 
                img: '../../assets/images/yib-md2.png', 
                nm: 'Yibzer for Android', 
                title: 'YibzerForAndroid', 
                desc: 'Food ordering app.' 
              },
                { src: 'https://apps.apple.com/us/app/yibzer/id1401432968?ign-mpt=uo%3D4', 
                  img: '../../assets/images/yib-iOS.png', 
                  nm: 'Yibzer for iOS', 
                  title: 'YibzerForiOS', 
                  desc: 'Food ordering app.' 
                },
              //   { src: 'https://play.google.com/store/apps/details?id=com.ycspr.yibzer', 
              //   img: '../../assets/images/yib-md.png', 
              //   nm: 'Yibzer', 
              //   title: 'Yibzer', 
              //   desc: 'Food ordering app.' 
              // },
              ]

      },

      {
        name: 'TuChequera.com',
        workedFrom: 'July 2018 - Present',
        src: 'https://tuchequera.com/',
        img: '../../assets/images/tcc.jpg',
        jobTitle: 'Full Stack Developer',
        desc: 'TuChequera.com is a local accounting platform aimed for small & personal businesses. They have a subscription based web platform and a free companion app so all you data is accessible 24/7 from anywhere.',
        myPosition: 'Hired as a front end developer, my time in the company eventually lead me to be the core developer of the mobile application. My full responsibilities include:',
        tasks: [
                { nm: 'TuChequera Móvil', desc: 'A powerful, hybrid accounting app available for Android and iOS. I am currently fully responsible for app store deployments, app development and API maintanence. ' },
                { nm: 'TuChequera.com', 
                  desc: `As the website is more cumbersome, styling and SEO responsibilities were given to me considering my experience designing websites. 
                         As the main web development team develops new features I fix/detail styles and run SEO tests so the site is always looking good & feeling smooth. I was also
                         responsible for setting up the current website customer support chat powered by PureChat.`
                }, 
              ],
        stack: ['../../assets/images/ionic-icon.png', 
                '../../assets/images/ts-icon.png', 
                '../../assets/images/angular-icon.png', 
                '../../assets/images/android.png', 
                '../../assets/images/xcode-icon.png',
                '../../assets/images/google-lighthouse.png'

              ],
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
        name: 'Get(IT)Virtual',
        workedFrom: 'August 2016 - December 2017',
        src: 'http://www.getitvirtual.com/',
        img: '../../assets/images/getITvirtual.png',
        jobTitle: 'WordPress Developer',
        desc: '',
        myPosition: 'As my first work experience, using WordPress was great for my development skills. My tasks included:',
        tasks: [
                { 
                  nm: 'WordPress Sites', 
                  desc: 'Build user friendly WordPress apps for clients using top-notch plugins and beautiful themes.' }, 
                { 
                  nm: 'Design Process', 
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
      {
        name: 'CATEC',
        workedFrom: 'January 2016 - July 2018',
        src: 'http://catec.upr.edu/',
        img: '../../assets/images/catec.png',
        jobTitle: 'Full Stack Developer',
        desc: '',
        myPosition: 'At CATEC I learned how to build and deploy my first websites.',
        tasks: [
                { nm: 'CATEC Site', desc: `The official portal for CATEC, which is still up and running today, was created using WordPress
                                            & allowed me to learn/implement modern web practices such as parallax scrolling, SEO, HTTPS security, and others.` }, 
                { nm: 'FireCollect', desc: `My first official full stack project for CATEC, FireCollect is a Research Database Portal that
                                            contains all CATEC research data, publications, partner profiles, and more. My tasks were to aid in the design phase,
                                            implement frontend features & create backend API calls. This project was created using PHP, jQuery & CSS
                                            with a ThemeForest purchased template & used a custom, self hosted PHP API to call data from the CATEC databases.` }, 
                { nm: 'CATEC Backup Tool', desc: `One of my most notable tasks include a custom in-house backup tool, coded using Python, Shell Script & a cronjob,
                                                   to keep an up to date backup of our code redundant in our development & backup servers. 
                                                  ` }, 
                { nm: 'Miscellaneous', desc: `As CATEC was a research center, other miscellaneus tasks were assigned to me, which include fixing
                                             failing computers, updating research partners computers, installing software, & more.` }, 

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
            desc: 'Official website CATEC, a reasearch facility located at the University of Puerto Rico, Rio Piedras Campus.' 
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
    ]

  }

  ionViewDidEnter() {
    // alert('Tab under construction. Some missing data. 🤓')
  }

}
