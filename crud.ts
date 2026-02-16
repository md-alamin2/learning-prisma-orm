import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data:{
    //         name: "Al-amin",
    //         email: "alamin@gmail.com"
    //     }
    // })

    // console.log(createUser)

    // // create post for user id: 4
    // const createPost = await prisma.post.create({
    //     data:{
    //         title: "Hello World",
    //         content: "I am learning prisma orm",
    //         authorId: 4
    //     }
    // })
    // console.log(createPost)


    // // create profile fro user id: 4
    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio: "I am MERN stack web developer",
    //         userId: 4
    //     }
    // })
    // console.log(createProfile)

    // get all user
    const users = await prisma.user.findMany({
        // include:{
        //     profile: true,
        //     posts: true
        // }

        select:{
            id:true,
            name: true,
            email: true,
            profile:true,
            posts: true
        }
    });
    console.dir(users, {depth: Infinity})


}

run()