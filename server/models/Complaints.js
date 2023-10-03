export class Complaint {
    constructor(title, description, category, status) {
        this.title = title;
        this.description = description;
        this.votes = 0;
        this.category = category;
        this.status = status;
    }

    upvote() {
        this.votes++;
    }

    downvote() {
        this.votes--;
    }
}
