import { Component } from '@angular/core';
import { DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private document: DocumentViewer,
              private fileOpener: FileOpener) {


  }

  ngAfterViewInit()	{
    this.renderResume()
  }

  renderResume() {


    this.fileOpener.open('../../assets/images/resume_dec2021.pdf', 'application/pdf')
  .then(() => console.log('File is opened'))
  .catch(e => console.log('Error opening file', e));


    // const options: DocumentViewerOptions = {
    //   title: 'My PDF'
    // }

    // this.document.viewDocument('../../assets/images/resume_dec2021.pdf', 'application/pdf', options)
  }
}
