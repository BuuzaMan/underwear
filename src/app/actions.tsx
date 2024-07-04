"use server"


  export async function getData() {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/66649f09e41b4d34e4006e07`, {
        cache: 'force-cache',
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": "$2a$10$Dtbhi4wKTKSIxv9.p2uhBOWsEISTYU/oqwhzYCvJIF88MNKFuLCqa"
        },
        method: "GET"
      });
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Ошибка запроса:', error);
      throw error; 
    }
  };

  export async function getColl() {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/6666f6ccacd3cb34a8556e68`,  {
        cache: 'force-cache',
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": "$2a$10$Dtbhi4wKTKSIxv9.p2uhBOWsEISTYU/oqwhzYCvJIF88MNKFuLCqa"
        },
        method: "GET"
      });
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Ошибка запроса:', error);
      throw error; 
    }
  };

  export async function getItems() {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/66759b83ad19ca34f87c802b`, {
        cache: 'force-cache',
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": "$2a$10$Dtbhi4wKTKSIxv9.p2uhBOWsEISTYU/oqwhzYCvJIF88MNKFuLCqa"
        },
        method: "GET"
      });
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Ошибка запроса:', error);
      throw error; 
    }
  };

  export async function getBustier() {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/66798827acd3cb34a85c8eb3`, {
        cache: 'force-cache',
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": "$2a$10$Dtbhi4wKTKSIxv9.p2uhBOWsEISTYU/oqwhzYCvJIF88MNKFuLCqa"
        },
        method: "GET"
      });
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Ошибка запроса:', error);
      throw error; 
    }
  };