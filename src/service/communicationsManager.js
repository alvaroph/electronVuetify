
export default class CM{

    async login(user, password) {
        return new Promise((resolve, reject) => {
            if (user === "user" && password === "123") {
                resolve({state: true, username: "Alvaro Perez" , image: "https://www.w3schools.com/howto/img_avatar.png"});
            } else {
                reject({state: false, message: "Usuario o contraseña incorrectos"});
            }
        });
    }
      
}
