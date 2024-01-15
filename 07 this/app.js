class App
{
    runApplication()
    {
        console.log("hello world!");
        let user1 = new User("test");
        let user2 = new User;
        let user3 = new User;
        let user4 = new User;
        let user5 = new User;
        let user6 = new User;
    }
}

class User
{
    constructor(name)
    {
        this.name = name;
        function wieBenIk()
        {
            console.log(this.name)
        }
    }
}

let app = new App();
app.runApplication();