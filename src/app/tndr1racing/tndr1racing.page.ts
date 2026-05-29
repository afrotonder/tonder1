import { Component, OnInit } from '@angular/core';
import { gallery, teamAbout, teamDrivers } from 'teamData';

@Component({
  standalone: false,
  selector: 'app-tndr1racing',
  templateUrl: './tndr1racing.page.html',
  styleUrls: ['./tndr1racing.page.scss'],
})
export class Tndr1racingPage implements OnInit {

  teamIntroVideo: string;
  teamAbout = teamAbout;
  teamDrivers = teamDrivers;
  teamGallery = gallery;
  showModal: boolean;
  selectedImage: string;
  selectedImageText: string;
  selectedImageName: string;
  playlistDescription: string;
  teamIntroDescription: string;

  constructor() {

    this.teamIntroVideo = 'https://youtube.com/embed/1xQw7_m8HHs?feature=share'
    this.playlistDescription = `At TNDR1 we love our music and need it as much as our coffee so we always keep the
                                energies moving with our ever growing team playlist. Give it a listen!`

    this.teamIntroDescription = `A small but impactful introduction clip to our team & our first competing team livery.`
    this.showModal = false
    this.selectedImage = ''
    this.selectedImageText = ''
    this.selectedImageName = ''

  }

  ngOnInit() {
  }

  openImage(imgData: any) {

    this.selectedImageName = imgData.name
    this.selectedImageText = imgData.desc
    this.selectedImage = imgData.image;
    this.showModal = true;
    

  }

  closeModal() {

    this.showModal = false;
  
  }


}
