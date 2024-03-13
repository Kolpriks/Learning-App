use std::fs;
use std::net::{TcpListener, TcpStream};
use std::io::prelude::*;

fn main() {
    //TODO Ввести адрес сервера
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();

    for stream in listener.incoming() {
        let stream = stream.unwrap();
        handle_connection(stream);
    }
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    stream.read(&mut buffer).unwrap();

    
    let contents_result = fs::read_to_string("Learning-App/learning-app/public/index.html");

    
    match contents_result {
        Ok(contents) => {
            let response = format!(
                "HTTP/1.1 200 OK\r\nContent-length: {}\r\n\r\n{}",  
                contents.len(),                                           
                contents
            );

            stream.write(response.as_bytes()).unwrap();
        }
        Err(err) => {
            
            let response = "HTTP/1.1 404 NOT FOUND\r\n\r\n";
            stream.write(response.as_bytes()).unwrap();
            println!("Error: {}", err);
        }
    }

    stream.flush().unwrap();
}
