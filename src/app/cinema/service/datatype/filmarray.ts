export class FilmArray {

    constructor(
        public id: number,
        public title: string,
        public publish_date: string,
        public url: string,
        public note: number
    ) {}

    public static json(json: Object): FilmArray {
        return new FilmArray(
            json['id'],
            json['title'],
            json['publish_date'],
            // new Date(json['published'])
            json['url'],
            json['note']
        );
    }
    
}
