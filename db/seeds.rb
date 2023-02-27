# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.delete_all
Project.delete_all
Category.delete_all
Tagging.delete_all
Post.delete_all
Tag.delete_all
Comment.delete_all

# USERS
justin= User.create(username: "jmitchell04", name: "Justin Mitchell", password: "jmoney33", age: 24, experience: "React 1 year", bio: "new programmer", email: "mitchelljm@gmail.com", github: "mitchellj04/github.com")
tommy = User.create(username: "tommyling", name: "Tommy Xioma", password: "tommy123", age: 20, experience: "Gaming coding", bio: "I have been coding games for years", email: "tommyxioma@gmail.com", github: "mitchellj04/github.com")

# PROJECTS
p1 = Project.create(title: "Ski-Buddy", description: "I am creating a project for north east skiers to be able to talk about mountains.", github_link: "ski-buddy/mitchellj04/github.com", user_id: justin.id)
p2 = Project.create(title: "Gaming-AU", description: "This is a gaming website for Australia", github_link: "gaming-buddy/tommy/github.com", user_id: tommy.id)
p3 = Project.create(title: "Ski-Buddy 1", description: "I am creating a project for north east skiers to be able to talk about mountains.", github_link: "ski-buddy/mitchellj04/github.com", user_id: justin.id)
p4 = Project.create(title: "Movie Rating Website", description: "I am creating a website similar to IDMB where you can talk to other people about the movie and see their reviews.", github_link: "movie-ranked/tommyxioma/github.com", user_id: tommy.id)
p5 = Project.create(title: "Ski-Buddy 3", description: "I am creating a project for north east skiers to be able to talk about mountains.", github_link: "ski-buddy/mitchellj04/github.com", user_id: justin.id)
p6 = Project.create(title: "Ski-Buddy 4", description: "I am creating a project for north east skiers to be able to talk about mountains.", github_link: "ski-buddy/mitchellj04/github.com", user_id: justin.id)


# POSTS 
post = Post.create(title: "Need help with a fetch function?", description: "I have been trying to figure out how to fix my fetch function but I am unable to figure it out.", link: "github.com/ski-buddy/jmithell04", user_id: justin.id)
post2 = Post.create(title: "Need help with a controller?", description: "I have been trying to figure out how to fix my controller to remember my session id", link: "github.com/water-cooler/jmithell04", user_id: justin.id)
post3 = Post.create(title: "Button or link?", description: "I need help with adding links to my website so that they are clickable links", link: "github.com/ski-buddy/tommyXioama", user_id: tommy.id)
post4 = Post.create(title: "Trying to add images from my desktop on a post instead of from the web", description: "I need help to be able to figure out how to add an image to my project from my desktop instead of the web", link: "github.com/ski-buddy/tommyXioama", user_id: tommy.id)


# CATEGORIES
c1 = Category.create(code: "React")
c2 = Category.create(code: "Javascript")
c3 = Category.create(code: "Ruby")
c4 = Category.create(code: "C++")
c5 = Category.create(code: "Rails")

#TAGGING 
tag1 = Tagging.create(project_id: p1.id, category_id: c1.id)
tag2 = Tagging.create(project_id: p1.id, category_id: c3.id)
tag3 = Tagging.create(project_id: p2.id, category_id: c3.id)
tag4 = Tagging.create(project_id: p2.id, category_id: c2.id)
tag5 = Tagging.create(project_id: p2.id, category_id: c4.id)

# POST TAGS
tag1 = Tag.create(post_id: post.id, category_id: c1.id)
tag2 = Tag.create(post_id: post2.id, category_id: c5.id)
tag3 = Tag.create(post_id: post3.id, category_id: c2.id)
tag4 = Tag.create(post_id: post4.id, category_id: c3.id)
tag4 = Tag.create(post_id: post4.id, category_id: c1.id)

# COMMENTS 

comment = Comment.create(answer: "Have you tried using an arrow function instead. What is the problem with the function?",post_id: post.id, user_id: tommy.id)
comment2 = Comment.create(answer: "To be able to have your controller remember your session you need to add the cookies gem", post_id: post2.id, user_id: justin.id)

# COLLABORATIONS

collab = Collaboration.create(user_id: justin.id, project_id: p2.id, collaborate: true)