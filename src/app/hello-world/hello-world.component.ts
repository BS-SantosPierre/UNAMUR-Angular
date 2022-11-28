import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
	private _title: string = "Mon Magnifique Titre";

  constructor() { }

  ngOnInit(): void {
  }

	public get title() : string {
		return this._title;
	}


}
