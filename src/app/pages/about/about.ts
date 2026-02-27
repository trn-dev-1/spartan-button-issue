import { Component } from '@angular/core';
import { HlmButton } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-about',
  imports: [HlmButton],
  templateUrl: './about.html',
  styleUrl: './about.css',
  host: {
    class: 'flex flex-col gap-6 w-fit',
  },
})
export default class About {}
