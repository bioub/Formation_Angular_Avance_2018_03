import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ContactService } from './../../core/services/contact/contact.service';
import { Contact } from './../../shared/models/contact';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'ab-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsShowComponent implements OnInit {
  public contact$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.contact$ = this.route.params
      .map(params => Number(params.id))
      .switchMap((id: number) => this.contactService.getById$(id));
  }

}
