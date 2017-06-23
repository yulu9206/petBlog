export class Topic {
    constructor(
        public topic: string = "",
        public desc: string = "",
        public catg: string = "",
        public _author: Object = {},
        public answers: Array<any> = [],
    ){}
}

