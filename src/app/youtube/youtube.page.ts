import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  standalone: false,
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})

// @Pipe({ name: 'safe' })
export class YoutubePage implements OnInit {
  channelList: Array<any>;
  pageDescription: string;

  constructor() {
    this.pageDescription = `Coding aside, I create content as a means to organize and document my hobbies while also sharpening my video and image editing skills. 
                            Below is a small catalouge of all of the YouTube channels I own & create content for.`

    this.channelList = [
      {
        name: "",
        icon: "",
        title: 'Pokemon Eye Candy',
        genre: 'Hobbies',
        description: `Pokemon Eye Candy is a channel dedicated to documenting my Pokemon card collection in a cozy & watchable format with lofi beats to each video.`,
        url: 'https://youtube.com/embed/qCMTG7TmOko?feature=share',
        channelUrl: 'https://www.youtube.com/@PokemonEyeCandy',
        isImage: false,
        isVideo: false

      },
      {
        name: "",
        icon: "",
        title: 'TCG Eye Candy',
        genre: 'Hobbies',
        description: `TCG Eye Candy is a channel dedicated to documenting my vast collection of trading cards that include but are not limited to YuGiOh, F1, Digimon, DBZ, Star Wars, Basketball, etc. `,
        url: 'https://youtube.com/embed/mCU-m5Uaw7A?feature=share',
        channelUrl: 'https://www.youtube.com/@tcgeyecandy',
        isImage: false,
        isVideo: false

      },
      {
        name: "",
        icon: "",
        title: 'Afrotonder',
        genre: 'Gaming',
        description: `Afrotonder is my personal channel dedicated solely for gaming clips that range from tips, glitches, achievements and more! 
                      The games I play vary from modern games such as Gran Turismo 7, Fallout 76 & Kingdom Hearts to old school games such as 
                      Pac-Man World, Spyro the Dragon & the TimeSplitters series.`,
        url: 'https://www.youtube.com/embed/Ojxd7rYOhlE?si=6B3lVcLazJBS899s',
        channelUrl: 'https://www.youtube.com/@afrotonder',
        isImage: false,
        isVideo: false

      },
      {
        name: "",
        icon: "",
        title: 'tondermode',
        genre: 'Sports & Hobbies',
        description: `tondermode (with a captial t on purpose) is a channel dedicated to sports, hobbies and the sweet mix of them both. 
                      Here you'll find videos of my jump rope workouts, finger boarding tricks & builds, juggling tricks and much more!`,
        url: 'https://youtube.com/embed/opPiQW70hXM?feature=share',
        channelUrl: 'https://www.youtube.com/@afrotondermode',
        isImage: false,
        isVideo: true
      },
      {
        name: "",
        icon: "",
        title: 'Thisassembly',
        genre: 'Tech',
        description: `Thisassembly is a tech tinkering channel where you'll find the devices I take appart to fix, for parts or for science!`,
        url: 'https://youtube.com/embed/EO-ZepDeWxI?feature=share',
        channelUrl: 'https://www.youtube.com/@ThisassemblyOfficial',
        isImage: false,
        isVideo: true
      },

    ]

  }

  ngOnInit() {
  }

  //  transform(url: string) {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }


}
