export class App {
  message = 'Hello World!';
  rows: Row[] = [ new Row(0), new Row(1), new Row(2) ];
  cols: Column[] = [ 
    new Column("Year",[2017,2018,2019]), 
    new Column("Age",[50,51,52]), 
    new Column("Paycheck",[1,2,3]), ]
}

export class Row {
  constructor(readonly ix: number) {
  }
}


export class Column {
  constructor(readonly name: string, readonly values: number[]) {
  }

  
}
