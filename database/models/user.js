class User {
    constructor(id, username, education, 
        skills, projects, password) {
        this.id = id;
        this.username = username;
        this.education = education;
        this.skills = skills;
        this.projects = projects;
        this.password = password;
    }
}

module.exports = User;
