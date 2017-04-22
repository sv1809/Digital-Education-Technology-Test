import CardBase from "./CardBase";

export default class Card extends CardBase {
    constructor(opt) {
        super(opt.id);
        this.id = opt.id != null ? opt.id : 0;
        if (opt.title != null) this.title = opt.title;
        if (opt.isArchive != null) this.isArchive = opt.isArchive;
        if (opt.color != null) this.color = opt.color;
    }
}