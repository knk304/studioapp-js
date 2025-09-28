import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'druls-ui',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './druls-ui.component.html',
  styleUrl: './druls-ui.component.scss'
})
export class DrulsUiComponent {
  excelData: string[][] = [];
  fileName = '';
  editMode = false;

  trackByRow = (index: number, row: any) => index;
  trackByCol = (index: number, cell: any) => index;

  setEditMode(val: boolean) {
    this.editMode = val;
  }

  saveEditMode() {
    this.editMode = false;
  }

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) return;
    this.fileName = target.files[0].name;
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 }) as string[][];
      this.excelData = data;
    };
    reader.readAsBinaryString(target.files[0]);
  }


  saveExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.excelData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName ? 'edited_' + this.fileName : 'edited_data.xlsx');
  }
}
