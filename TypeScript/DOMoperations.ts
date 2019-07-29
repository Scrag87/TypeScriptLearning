class newElem {
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

    makeElem(type: string, idE: string, parentId: string) {
        let para = document.createElement(this.type);
        para.id = this.idE;
        let element = document.getElementById(this.parentId);
        element.appendChild(para);
    }
}

class newTxtElem extends newElem {
    text: string;

    constructor(type: string, idE: string, parentId: string, text: string) {
        super(type, idE, parentId);
        this.text = text;
         }

    makeElem(type: string,
             idE: string,
             parentId: string,
             text: string) {
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
x.makeElem("div", "id0", "body");
x1.makeElem("p", "id1", "id0", "asd");
x2.makeElem("p", "id2", "id0", "asd2");
x1.paintToColor("orange");
