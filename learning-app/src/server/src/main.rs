use std::fs;
use std::net::{TcpListener, TcpStream};
use std::io::prelude::*;

fn main() {
    //TODO Ввести адрес сервера
    let listner =

        TcpListener::bind("127.0.0.1:7878").unwrap();

    for stream in listner.incoming(){

        let stream = stream.unwrap();

        handle_connection(stream);
    }
}
fn handle_connection(mut stream: TcpStream){

    let mut buffer: [u8; 1024] = [0; 1024];

    stream.read(&mut buffer).unwrap();
    //Сделал полноценную HTTP поддержку
    //Только надо теперь ввести верный индекс
    let contents: String = fs::read_to_string("index.html").unwrap();
        let response: String = format!(
        "HTTP/1.1 200 OK\r\nContent-length: {}\r\n\r\n{}",  
        contents.len(),                                           
        contents
    );

    stream.write(response.as_bytes()).unwrap();

    stream.flush().unwrap();
}