import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
	selector: 'new-user',
	templateUrl: './new_user.component.html'
})

export class NewUserComponent
{
	private selectedOption: string;

	constructor(public dialog: MdDialog)
	{
	}
	
	public openDialog(): void
	{
		let dialogRef = this.dialog.open(NewUserDialog);
		dialogRef.afterClosed().subscribe(result => this.selectedOption = result);
	}
}

@Component({
	selector: 'new-user-dialog',
	templateUrl: './new_user.dialog.html',
})

export class NewUserDialog
{
	constructor(public dialogRef: MdDialogRef<NewUserDialog>)
	{
	}
}
