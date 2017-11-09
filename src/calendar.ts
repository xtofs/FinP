
import { bindable } from 'aurelia-framework';


export class Calendar {

   

    public rows: Row[] = [new Row(0), new Row(1), new Row(2)];
    public groups: ColumnGroup[] = [
        new ColumnGroup("Calendar", "#fde1ad", [
            new Column("Year", "", [2017, 2018, 2019], true),
            new Column("Age", "", [50, 51, 52])]),
        new ColumnGroup("Income", "#dcf6ff", [
            new Column("Paycheck", "3%", [1, 2, 3]),
            new Column("Bonus", "3%", [1, 2, 3]),
            new Column("Rent", "", [1, 2, 3]),
            new Column("total income", "", [1, 2, 3], true)
        ]),
        new ColumnGroup("Expenses", "#ffffcb", [
            new Column("household", "", [1, 2, 3]),
            new Column("401k", "", [1, -200, 3]),
            new Column("espp", "", [1, -200, 3]),
            new Column("401k ctl", "", [1, -200, 3]),
            new Column("stock ctl", "", [1, -200, 3]),
            new Column("401k", "", [1, -200, 3]),
            new Column("contrib", "", [1, -200, 3]),
            new Column("total expense", "", [1, 2, 3], true)
        ]),
        new ColumnGroup("Investments", "#cfffe6", [
            new Column("start of year", "", [1, 2, 3], true),
            new Column("401k", "", [1, -200, 3]),
            new Column("espp", "", [1, -200, 3]),
            new Column("401k ctl", "", [1, -200, 3]),
            new Column("stock ctl", "", [1, -200, 3]),
            new Column("401k", "", [1, -200, 3]),
            new Column("contrib", "", [1, -200, 3]),
            new Column("end of year", "", [1, 2, 3], true)
        ]),
    ];

    public collapse(x){
        x.visible=!x.visible;
    }
}


export class Row {
    constructor(readonly ix: number) {
    }
}


export class ColumnGroup {
    constructor(readonly name: string, readonly color: string, readonly columns: Column[]) {
    }

    public visible: boolean = true;

    public get colspan(): number {
        return  this.visible ? this.columns.length : this.columns.filter(c => c.summary).length;
    }
}

export class Column {
    constructor(readonly name: string, readonly info: string, readonly values: number[], readonly summary: boolean = false) {
    }


}
