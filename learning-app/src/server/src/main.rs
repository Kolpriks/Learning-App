use std::net::{TcpListener, TcpStream};
use std::io::{Read, Write};

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();
    println!("Server listening on port 7878...");

    for stream in listener.incoming() {
        let stream = stream.unwrap();
        handle_connection(stream);
    }
}

fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    stream.read(&mut buffer).unwrap();
    let request = String::from_utf8_lossy(&buffer[..]);
    println!("Request:\n{}", request);

    if request.starts_with("OPTIONS") {
        // Ответ на предварительный запрос CORS
        let response = "HTTP/1.1 200 OK\r\n\
                        Access-Control-Allow-Origin: http://localhost:3000\r\n\
                        Access-Control-Allow-Methods: POST\r\n\
                        Access-Control-Allow-Headers: Content-Type\r\n\
                        Content-Length: 0\r\n\
                        \r\n";
        stream.write(response.as_bytes()).unwrap();
        stream.flush().unwrap();
    } else if request.starts_with("POST") {
        // Отправляем ответ клиенту
        let response = "HTTP/1.1 200 OK\r\n\r\n";
        stream.write(response.as_bytes()).unwrap();
        stream.flush().unwrap();

        // Получаем данные из запроса POST
        if let Some(body_start) = request.find("\r\n\r\n") {
            let body = &request[body_start + 4..];
            println!("Received data:\n{}", body);
        }
    }
}
