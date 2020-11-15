import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {WorkDto} from '../../models/work.dto';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {

  item: WorkDto;
  form: FormGroup;

  constructor(protected ref: NbDialogRef<EditDialogComponent>) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(this.item.id),
      newPlannedStartDate: new FormControl(this.item.newPlannedStartDate),
      factStartDate: new FormControl({value: this.item.factStartDate, disabled: !!this.item.factStartDate}),
    });
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    this.ref.close(this.form.value);
  }

}
