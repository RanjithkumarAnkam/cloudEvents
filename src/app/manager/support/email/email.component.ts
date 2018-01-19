import { Component, OnInit,AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  @Output() onEditorKeyup = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}
  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#email_description',
      plugins: ['link', 'paste', 'table'],
      skin_url: '/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
