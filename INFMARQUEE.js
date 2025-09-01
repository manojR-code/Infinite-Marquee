export class Marquee {
    constructor({ speed, gap }) {
        this.gap = 0;
        this.speed = 1;
        this.images = [];
        if (speed) {
            this.speed = speed;
        }
        if (gap) {
            this.gap = gap;
        }
    }
    AddItem(image) {
        image.map((item) => this.images.push(item));
    }
    Display() {
        console.log(this.images);
    }
    NeedGap() {
        if (!this.images) {
            return new Error("No Images where Found");
        }
        let previous = 0;
        this.images.map((ele, index) => {
            const imageWidth = ele.offsetWidth;
            console.log(imageWidth)
            if (index != 0) ele.style.left = (this.gap + previous + imageWidth) + "px";
            const splitted = ele.style.left.split("px");
            previous = parseInt(splitted[0]);
        });
    }
    Animate() {
        requestAnimationFrame(() => this.Animate());
        this.images.forEach((image) => {
            let left = parseInt(image.style.left || "0", 10);
            let imgWidth = image.offsetWidth;
            if ((left + imgWidth) >= window.innerWidth) {
                image.style.left = -imgWidth + "px";
            } else {
                left += this.speed;
                image.style.left = left + "px";
            }
        });
    }
}