import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contacts.service";
import {Contact} from "./contact";
import {updatePlaceholderMap} from "@angular/compiler/src/render3/view/i18n/util";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  public contacts = [];

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.readAll();
  }

  private readAll() {
    return this.contactService.loadAll().subscribe((list) => {
      console.log('list', list);
      this.contacts = list;
    });
  }

  editContact(contact) {
    console.log(contact)
    this.contactService.editContact(contact);
  }

  deleteContact(contact) {
    console.log(contact);
    this.contactService.deleteContact(contact).subscribe((data) => {
        console.log(data);
        this.readAll();
    });
  }

}
