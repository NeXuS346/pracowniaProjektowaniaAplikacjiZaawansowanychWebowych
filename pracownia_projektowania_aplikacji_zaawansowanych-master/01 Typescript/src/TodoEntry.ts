class TodoEntry {
    id: number;
    title: string;
    description: string;
    isDone: boolean;

    conststructor(id: number, title:string) {
        this.id = id;
        this.title = title;
    }

    render() {
        return`
       
        <div class ="card card-body mt-1 shadow">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <button class ="btn btn-danger">${this.isDone}</button>
        </div>
       `



    }
}