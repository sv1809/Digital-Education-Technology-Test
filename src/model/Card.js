export default class Card {
    constructor(opt) {
        this.id = opt.id != null ? opt.id : 0;
        if (opt.title != null) this.title = opt.title;
        if (opt.isArchive != null) this.isArchive = opt.isArchive;
    }
}