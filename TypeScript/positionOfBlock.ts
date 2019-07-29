class Point {
    type: string;
    posX: number;
    posY: number;
    id: string;

    constructor(type: string, posX: number, posY: number, id: string) {
        this.type = type;
        this.id = id;
        this.posX = posX;
        this.posY = posY;
    }

    draw(): void {
        let str = document.getElementById('id' + this.posY);
        //   let initialStr: string = '0 1 2 3 4 5 6 7 8 9 10';
        str.textContent = '';
        let finalStr: string = this.posY + ' ';
        let x: number;
        for (x = 1; x < this.posX; x++) {
            finalStr = finalStr +"[]";
        }
        finalStr = finalStr + this.type;
        str.textContent = finalStr;
        str.style.background="red";

    }

}

let p1 = new Point("+", 5, 5, "p1");
let p2 = new Point("\u{1F60D}", 15, 1, "p2");
p1.draw();
p2.draw();