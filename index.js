// Add your code here

const submitData = (username, useremail)=> {
    const body = document.querySelector("body");
    const userData = {
        name: `${username}`,
        email:`${useremail}`
    }
    const configureObj = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "accept":"application/json",
        },
        body: JSON.stringify(userData),
    }
    return fetch("http://localhost:3000/users",configureObj)
     .then(function (response) {
        return response.json();
     })
     .then(function (object){
       
       body.innerHTML = `id is ${object.id}`;
    
     })
     .catch(function (error){

        body.innerHTML = error.message;
        
     })
    
};

// submitData("john","john@gmail.com")