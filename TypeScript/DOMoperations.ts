interface ICreateElem {
  idE: string;
  type: string;
  parentId: string;
  color?: string;
  text?: string;
  makeElem();
}





class newElem implements ICreateElem {
  idE: string;
  type: string;
  parentId: string;

  constructor(type: string, idE: string, parentId: string) {
    this.idE = idE;
    this.parentId = parentId;
    this.type = type;
  }

  paintToColor(color: string) {
    let element = document.getElementById(this.idE);
    element.style.background = color;
  }

  makeElem() {
    let para = document.createElement(this.type);
    para.id = this.idE;
    let element = document.getElementById(this.parentId);
    element.appendChild(para);
  }
}





class newTxtElem extends newElem implements ICreateElem{
  text: string;

  constructor(type: string, idE: string, parentId: string, text: string) {
    super(type, idE, parentId);
    this.text = text;
  }

  makeElem() {
    let para = document.createElement(this.type);
    let node = document.createTextNode(this.text);
    para.appendChild(node);
    para.id = this.idE;
    let element = document.getElementById(this.parentId);
    element.appendChild(para);
  }
}

let x = new newElem("div", "id0", "body");
let x1 = new newTxtElem("p", "id1", "id0", "asd");
let x2 = new newTxtElem("p", "id2", "id0", "asd");
x.makeElem();
x1.makeElem();
x2.makeElem();
x1.paintToColor("orange");
x.paintToColor("gray");