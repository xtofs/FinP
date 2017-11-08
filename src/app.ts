export class App {
  

  rows: Row[] = [new Row(0), new Row(1), new Row(2)];
 
  groups: ColumnGroup[] = [
    new ColumnGroup("Calendar", "#fde1ad", [
      new Column("Year", "", [2017, 2018, 2019]),
      new Column("Age", "", [50, 51, 52])]),
    new ColumnGroup("Income", "#dcf6ff", [
      new Column("Paycheck","3%", [1, 2, 3]),
      new Column("Bonus", "3%", [1, 2, 3]),
      new Column("Rent", "", [1, 2, 3])]),
    new ColumnGroup("Expenses", "#ffffcb", [
        new Column("household","",  [1, 2, 3]),
        new Column("401k", "", [1, -200, 3]),
        new Column("contrib", "", [1, 2, 3])]),
  ];
}

export class Row {
  constructor(readonly ix: number) {
  }
}


export class ColumnGroup {
  constructor(readonly name: string, readonly color: string, readonly columns: Column[]) {
  }
}

export class Column {
  constructor(readonly name: string, readonly info:string, readonly values: number[]) {
  }


}
