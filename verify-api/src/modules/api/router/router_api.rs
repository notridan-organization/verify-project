use rocket::{serde::json::{serde_json::json, *}, Route};

#[get("/test")]
fn test() -> Value {
    json!({
     "teste": 129122
    })
}

pub fn apiRouter() -> Vec<Route> {
    routes![test]
}
