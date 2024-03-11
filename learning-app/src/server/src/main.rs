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
    println!(
        "Запрос: {}",
        String::from_utf8_lossy(&buffer[..])
    )
}