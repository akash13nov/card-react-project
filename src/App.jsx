import React from "react";
import Card from "./component/Card";

const App = () => {
  const users = [
    {
      fullName: "Nagraj",
      title: "Sarpa Superhero",
      description: "Protector of humanity with mystical snake powers.",
      profile:
        "https://i.pinimg.com/736x/51/fd/bc/51fdbce7f191837d4933b0b856c0bb8e.jpg",
      coverImage:
        "https://i.pinimg.com/736x/38/1d/46/381d46a3fa34a29f148b4d9482a6a07b.jpg",
      likesCount: 5200,
      postCount: 180,
      viewsCount: 150000,
    },
    {
      fullName: "Super Commando Dhruva",
      title: "Human Superhero",
      description: "Bravest detective with martial mastery and brainpower.",
      profile:
        "https://i.pinimg.com/736x/54/17/38/54173843ddf40dc7f657fd45f6185fc7.jpg",
      coverImage:
        "https://i.pinimg.com/736x/5f/36/c6/5f36c6a09887ce6f32e8f168cac26d37.jpg",
      likesCount: 4300,
      postCount: 210,
      viewsCount: 132000,
    },
    {
      fullName: "Doga",
      title: "Dark Vigilante",
      description: "Fearless crime fighter in the shadows.",
      profile:
        "https://i.pinimg.com/736x/ef/14/89/ef148984b1d882a18052607735e97310.jpg",
      coverImage:
        "https://i.pinimg.com/736x/18/31/23/183123899df3c44ec87e4c9d21c32797.jpg",
      likesCount: 6100,
      postCount: 195,
      viewsCount: 175000,
    },
    {
      fullName: "Bhediya",
      title: "Werewolf Warrior",
      description: "Lunar powered warrior with heightened senses.",
      profile:
        "https://i.pinimg.com/736x/af/d2/72/afd27265e19b020d82367242a86fc583.jpg",
      coverImage:
        "https://i.pinimg.com/1200x/c4/04/ff/c404ff6e1c94e3904e8a092c9c6caa8b.jpg",
      likesCount: 2900,
      postCount: 120,
      viewsCount: 82000,
    },
    {
      fullName: "Parmanu",
      title: "Scientific Superhero",
      description: "Atomic genius with tech mastery.",
      profile:
        "https://i.pinimg.com/736x/26/92/91/26929101cf327374e9c96c134db2ed56.jpg",
      coverImage:
        "https://rajcomics.shop/cdn/shop/collections/Parmanu_Col.jpg?v=1718961156",
      likesCount: 3400,
      postCount: 98,
      viewsCount: 91000,
    },
    {
      fullName: "Shakti",
      title: "Cyber Superhero",
      description: "Tech-enhanced intelligence and power.",
      profile:
        "https://i.pinimg.com/736x/ba/bc/fd/babcfde77832c893b2ad9344ab984b63.jpg",
      coverImage:
        "https://i.pinimg.com/1200x/3f/65/4d/3f654df7b33f92a95c75b6d4377ccfa3.jpg",
      likesCount: 2200,
      postCount: 76,
      viewsCount: 64000,
    },
    {
      fullName: "Tiranga",
      title: "Patriotic Warrior",
      description: "Symbol of national strength and courage.",
      profile:
        "https://i.pinimg.com/736x/33/06/ef/3306efef1f35df1fc403c813bcac724d.jpg",
      coverImage:
        "https://i.pinimg.com/1200x/91/5d/5e/915d5eb52bf98ca31d73ff223357f30d.jpg",
      likesCount: 4100,
      postCount: 143,
      viewsCount: 118000,
    },
    {
      fullName: "Inspector Steel",
      title: "Cyborg Law Enforcer",
      description: "Half-machine cop upholding justice.",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-BalQNybzZPzHYZWjevsddOGZFvo3GmAHQ&s",
      coverImage:
        "https://rajcomics.shop/cdn/shop/collections/Steel_Col.jpg?v=1661519875",
      likesCount: 3600,
      postCount: 110,
      viewsCount: 98000,
    },
    {
      fullName: "Anthony",
      title: "Street Fighter",
      description: "Brave warrior battling city underworld.",
      profile:
        "https://i.pinimg.com/736x/97/52/d7/9752d70706318dede5889a8ac5a21895.jpg",
      coverImage:
        "https://i.pinimg.com/736x/61/e4/bb/61e4bbfbe58bac05cf08ef56b1d5a371.jpg",
      likesCount: 1800,
      postCount: 64,
      viewsCount: 52000,
    },
  ];
  return (
    <div className="card-container w-full h-full flex justify-center gap-5 flex-wrap p-2.5 bg-[rgb(210,210,210)]">
      {users.map(function (elem) {
        return <Card users={elem} />;
      })}
    </div>
  );
};

export default App;
