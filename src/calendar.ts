
import { bindable } from 'aurelia-framework';


export class Calendar {

   

    public rows: Row[] = [new Row(0), new Row(1), new Row(2)];
    public groups: ColumnGroup[] = [
        new ColumnGroup("T", "#fde1ad", [
            new Column("Year", "", [2017, 2018, 2019], true),
            new Column("Age", "", [50, 51, 52])]),
        new ColumnGroup("Income", "#dcf6ff", [
            new Column("Paycheck", "3%", [1, 2, 3]),
            new Column("Bonus", "3%", [1, 2, 3]),
            new Column("Rent", "", [1, 2, 3]),
            new Column("Total", "", [1, 2, 3], true)
        ]),
        new ColumnGroup("Expenses", "#ffffcb", [
            new Column("household", "", [1, 2, 3]),
            new Column("401k", "", [1, -200, 3]),
            new Column("espp", "", [1, -200, 3]),
            new Column("401k ctl", "", [1, -200, 3]),
            new Column("stock ctl", "", [1, -200, 3]),
            new Column("401k", "", [1, -200, 3]),
            new Column("contrib", "", [1, -200, 3]),
            new Column("Total", "", [1, 2, 3], true)
        ]),
        new ColumnGroup("Investments", "#cfffe6", [
            new Column("BoY", "", [1, 2, 3], true),
            new Column("401k", "", [1, -200, 3]),
            new Column("espp", "", [1, -200, 3]),
            new Column("401k ctl", "", [1, -200, 3]),
            new Column("stock ctl", "", [1, -200, 3]),
            new Column("401k", "", [1, -200, 3]),
            new Column("contrib", "", [1, -200, 3]),
            new Column("EoY", "", [1, 2, 3], true)
        ]),
    ];

    public collapse(x: ColumnGroup){
        x.expanded = !x.expanded;
    }
}


export class Row {
    constructor(readonly ix: number) {
    }
}


export class ColumnGroup {
    constructor(readonly name: string, readonly color: string, readonly columns: Column[]) {
    }

    public expanded: boolean = true;

    public get colspan(): number {
        return  this.expanded ? this.columns.length : this.columns.filter(c => c.summary).length;
    }
}

export class Column {
    constructor(readonly name: string, readonly info: string, readonly values: number[], readonly summary: boolean = false) {
    }


}
