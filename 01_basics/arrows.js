const user = {
  username: "Zohaib",
  age: 20,
  message: function () {
    console.log(`${this.username} , Welcome to our website.`);
    // console.log(this);
  },
};

user.message();
user.username = "Soldier boy";
user.message();
