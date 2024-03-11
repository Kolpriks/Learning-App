use serde::{Deserialise, Serialise};
use std::fs::File;
use std::io::{BufReader, Error};
#[derive(Debug, Deserialise, Serialise)]
struct Login{
    email: String,
    password: String,
}
struct Registaration{
    email: String,
    name: String,
    age: u32,
    password: String,
    confirm_password: String,
}
impl Registaration{
    fn password_match(&self) -> bool{
        self.password == self.confirm_password
    }
}
fn main() ->Result<(), Error>{
    //TODO Вписать название файла на логин
    let login_file =File::open(".js")?;
    let login_reader = BufReader::new(login_file);
    let login_data: Login =serge_json::from_reader(login_reader)?;
    println!("Логин данные загруженны: {:?}", login_data);
    
    //TODO тоже самое с регистрацией
    let registaration_file =File::open(".js")?;
    let registaration_reader = BufReader::new(registaration_file);
    let registaration_data: Login =serge_json::from_reader(registaration_reader)?;
    println!("Регистр данные загруженны: {:?}", registaration_data);
    if registaration_data.password_match(){
        println!("Пароли не совпадают!");
        return Ok(())
    }
    Ok(())
}