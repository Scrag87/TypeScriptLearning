class newTxtElem {
  color: string;
  idE: string;
  text: string;
  type: string;
  ParentId: string;

  constructor(
    type: string,
    idE: string,
    text: string,
    color: string,
    parentId: string
  ) {
    this.color = color;
    this.idE = idE;
    this.ParentId = parentId;
    this.text = text;
    this.type = type;
  }

  makeElem(): void {
    let para = document.createElement(this.type);
    let node = document.createTextNode(this.text);
    para.appendChild(node);
    para.style.background = this.color;
    para.id = this.idE;
    let element = document.getElementById(this.ParentId);
    element.appendChild(para);
  }
}
let x = new newTxtElem("div", "id0", "hi there x!", "red", "body");
let x1 = new newTxtElem("p", "id1", "hi there x1!", "coral", "id0");

x.makeElem();
x1.makeElem();
