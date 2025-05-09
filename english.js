let devProfile = {
    fullName: "Sebastian Borda",
    age: 28,
    profession: "Full-Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    isEmployed: false,
    contact: {
      email: "sbordaojeda@gmail.com",
      location: "Posadas"
    }
  };
  
  function introduce(profile) {
    return `Hello! My name is ${profile.fullName}. I am a ${profile.profession}.`;
  }
  
  console.log(introduce(devProfile));