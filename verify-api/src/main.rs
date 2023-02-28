// Development Settings
#![allow(unused_must_use)]
#![allow(non_snake_case)]
#![allow(dead_code)]
#![allow(unused_imports)]
#![allow(unused_variables)]

use dotenv::dotenv;
use modules::server::server::VerifyServer;

#[macro_use]
extern crate rocket;
extern crate dotenv;
mod modules;

#[rocket::main]
async fn main() {
    dotenv().ok();
    let server = VerifyServer::new().await;
    match server {
        Ok(_) => println!("Server liftoff 🚀😎"),
        Err(err) => println!("Server not started 😱\n Error:❌{}", err),
    }
}
