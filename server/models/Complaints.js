export class Complaint {
    constructor(title, description, votes, category, status, id = null) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.votes = votes;
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
