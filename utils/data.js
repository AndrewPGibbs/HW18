const users = [
    {
      "username": "testusername1",
      "email": "testusername@email.com",
      "thoughts": [],
      "friends": [],
      "__v": 0
    },
    {
      "username": "tester2",
      "email": "test2@test2.com",
      "thoughts": [],
      "friends": [],
      "__v": 0
    },
    {
      "username": "tester3",
      "email": "third@test3.com",
      "thoughts": [],
      "friends": [],
      "__v": 0
    }
  ];
  
  const thoughts = [
    {
      "thoughtText": "This is an example thought by tester ECAMPLE 1",
      "username": "testusername1",
      "createdAt": "2022-11-25T09:09:17.076+00:00",
      "reactions": [
        {
          "reactionBody": "This is an example reaction by TESTER 1",
          "username": "tester2",
          "reactionId": "638083c9417ed0ed80903d82",
          "createdAt": "2022-11-25T09:09:17.076+00:00",
        }
      ],
      "__v": 0
    },
    {
      "thoughtText": "This is an example thought by tester 3",
      "username": "tester3",
      "createdAt": "2022-11-25T09:09:17.076+00:00",
      "reactions": [
        {
          "reactionBody": "This is an example reaction by tester2",
          "username": "tester2",
          "reactionId": "6380840e417ed0ed80903d8a",
          "createdAt": "2022-11-25T09:09:17.076+00:00",
        }
      ],
      "__v": 0
    }
  ];
  
  // Export the functions for use in seed.js
  module.exports = { users, thoughts };