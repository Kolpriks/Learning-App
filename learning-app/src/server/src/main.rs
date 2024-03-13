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
    let request = String::from_utf8_lossy(&buffer[..]);
    let lines: Vec<&str> = request.lines().collect();
    let first_line_tokens: Vec<&str>=lines[0].split_whitespace().collect();
    let method = first_line_tokens[0];
    let path = first_line_tokens[1];
    if method == "POST" && path =="/backend-endpoint"{
        let body_index = request.find("\r\n\r\n").unwrap();
        let body = &request[body_index..];
        println!("Полученны данные: {body}");
    }

    
    let contents_result = fs::read_to_string("C:/Users/coolp/code/Learning-App/learning-app/public/index.html");

    
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
